import { appendFile, mkdir } from "node:fs/promises";
import path from "node:path";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const phonePattern = /^\+?[0-9]{7,18}$/;

function cleanText(value) {
  return String(value || "").trim().slice(0, 2000);
}

function isValidPhone(value) {
  return phonePattern.test(value.replace(/[\s().-]/g, ""));
}

export async function POST(request) {
  try {
    const payload = await request.json();

    if (cleanText(payload.website)) {
      return Response.json({ message: "Rejected as spam." }, { status: 400 });
    }

    const inquiry = {
      name: cleanText(payload.name),
      email: cleanText(payload.email).toLowerCase(),
      phone: cleanText(payload.phone),
      company: cleanText(payload.company),
      country: cleanText(payload.country),
      productRequirement: cleanText(payload.productRequirement),
      message: cleanText(payload.message),
      createdAt: new Date().toISOString()
    };

    const errors = {};
    if (!inquiry.name) errors.name = "Name is required.";
    if (!inquiry.email) errors.email = "Email is required.";
    if (!inquiry.phone) errors.phone = "Phone is required.";
    if (inquiry.email && !emailPattern.test(inquiry.email)) errors.email = "Email format is invalid.";
    if (inquiry.phone && !isValidPhone(inquiry.phone)) errors.phone = "Phone format is invalid.";

    if (Object.keys(errors).length > 0) {
      return Response.json({ message: "Please complete required fields.", errors }, { status: 422 });
    }

    await mkdir(path.join(process.cwd(), "data"), { recursive: true });
    await appendFile(
      path.join(process.cwd(), "data", "inquiries.jsonl"),
      `${JSON.stringify(inquiry)}\n`,
      "utf8"
    );

    if (process.env.INQUIRY_WEBHOOK_URL) {
      await fetch(process.env.INQUIRY_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          to: process.env.INQUIRY_EMAIL_TO || "sales@example.com",
          subject: `New WEUP inquiry from ${inquiry.name}`,
          inquiry
        })
      });
    }

    // Production integration examples:
    // 1. Send email to sales@yourdomain.com via Resend, SendGrid, AWS SES or SMTP.
    // 2. Insert the inquiry into PostgreSQL, MySQL, Supabase, Airtable or a CRM.
    // 3. Add Turnstile / reCAPTCHA verification before accepting the submission.

    return Response.json({ message: "Inquiry submitted successfully." });
  } catch (error) {
    return Response.json(
      { message: "Unable to submit inquiry. Please try again later." },
      { status: 500 }
    );
  }
}
