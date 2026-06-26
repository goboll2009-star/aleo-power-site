import Image from "next/image";
import { BadgeCheck, FileCheck2, Globe2, PackageCheck } from "lucide-react";
import { Header } from "../components";
import InquiryForm from "./InquiryForm";

export const metadata = {
  title: "Request a Quote | WEUP Chinese Herbal Ingredients",
  description:
    "Send a B2B inquiry for Chinese herbal raw materials, botanical extracts, herbal powders, slices and OEM private label supply."
};

const trustItems = [
  ["B2B only", "Bulk supply, import, distribution and private label projects."],
  ["Document-ready", "COA, packing list, commercial invoice and export support."],
  ["Clear follow-up", "Product form, quantity and target market help us reply faster."]
];

export default function InquiryPage() {
  return (
    <main className="page inquiry-page">
      <Header />
      <section className="rfq-hero">
        <div className="rfq-hero-copy">
          <span className="section-kicker">B2B RFQ</span>
          <h1>Request pricing for Chinese herbal ingredients.</h1>
          <p>
            Share your product interest, quantity, destination market and document requirements. WEUP will review the
            details and reply with a suitable sourcing or private label path.
          </p>
          <div className="rfq-trust-strip">
            <span><BadgeCheck size={18} /> COA available</span>
            <span><PackageCheck size={18} /> Export packing</span>
            <span><Globe2 size={18} /> Global B2B supply</span>
          </div>
        </div>
        <div className="rfq-hero-image">
          <Image
            src="/assets/weup-export-packing-branded.png"
            alt="WEUP export packing for botanical ingredients"
            width={720}
            height={460}
            priority
          />
        </div>
      </section>

      <section className="rfq-layout">
        <aside className="rfq-sidebar">
          <span className="section-kicker">What To Include</span>
          <h2>Better details help us quote faster.</h2>
          <div className="rfq-checklist">
            <p><FileCheck2 size={18} /> Product name, form or botanical name</p>
            <p><FileCheck2 size={18} /> Estimated order quantity or MOQ target</p>
            <p><FileCheck2 size={18} /> Country / region and required documents</p>
            <p><FileCheck2 size={18} /> Bulk, OEM or private label packaging needs</p>
          </div>
          <div className="rfq-proof-card">
            <strong>Buyer privacy</strong>
            <p>Your inquiry is used only for B2B quotation follow-up and supplier communication.</p>
          </div>
        </aside>
        <div className="rfq-form-card">
          <div className="rfq-form-head">
            <span className="section-kicker">Inquiry Form</span>
            <h2>Tell us what you need.</h2>
            <p>Fields marked with * are required.</p>
          </div>
          <InquiryForm />
        </div>
      </section>

      <section className="integration-note">
        <div>
          <span className="section-kicker">Integration Template</span>
          <h2>Email, CRM or database connection can be added behind the same form.</h2>
        </div>
        <p>
          The included API route validates the same required fields and stores each inquiry as JSONL. In production,
          connect it to email sending, Google Sheets, CRM, MySQL, PostgreSQL, Supabase or another database.
        </p>
      </section>
    </main>
  );
}
