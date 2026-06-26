"use client";

import { useMemo, useState } from "react";
import { ArrowRight, CheckCircle2, Loader2, Mail, ShieldCheck } from "lucide-react";

const initialValues = {
  name: "",
  email: "",
  phone: "",
  company: "",
  country: "",
  productRequirement: "",
  message: "",
  website: ""
};

const requiredLabels = {
  name: "Name",
  email: "Email",
  phone: "Phone"
};

function validateEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value.trim());
}

function validatePhone(value) {
  const normalized = value.replace(/[\s().-]/g, "");
  return /^\+?[0-9]{7,18}$/.test(normalized);
}

function validate(values) {
  const errors = {};

  Object.entries(requiredLabels).forEach(([key, label]) => {
    if (!values[key].trim()) {
      errors[key] = `${label} is required.`;
    }
  });

  if (values.email && !validateEmail(values.email)) {
    errors.email = "Enter a valid business email, e.g. buyer@company.com.";
  }

  if (values.phone && !validatePhone(values.phone)) {
    errors.phone = "Enter a valid international phone number, e.g. +1 555 123 4567.";
  }

  return errors;
}

export default function InquiryForm() {
  const [values, setValues] = useState(initialValues);
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState({ type: "idle", message: "" });

  const errors = useMemo(() => validate(values), [values]);
  const hasErrors = Object.keys(errors).length > 0;

  function updateField(event) {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
  }

  function markTouched(event) {
    setTouched((current) => ({ ...current, [event.target.name]: true }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setTouched({
      name: true,
      email: true,
      phone: true,
      company: true,
      country: true,
      productRequirement: true,
      message: true
    });

    const nextErrors = validate(values);
    if (Object.keys(nextErrors).length > 0) {
      setStatus({ type: "error", message: "Please complete the required fields before submitting." });
      return;
    }

    setStatus({ type: "loading", message: "Sending your inquiry..." });

    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values)
      });
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result?.message || "Submission failed.");
      }

      setStatus({
        type: "success",
        message: "Submitted successfully. WEUP will review your inquiry and contact you soon."
      });
      setValues(initialValues);
      setTouched({});
    } catch (error) {
      setStatus({
        type: "error",
        message: error.message || "Submission failed. Please try again or email us directly."
      });
    }
  }

  function fieldError(name) {
    return touched[name] ? errors[name] : "";
  }

  return (
    <form className="rfq-form-template" onSubmit={handleSubmit} noValidate>
      <input className="hidden-field" name="website" value={values.website} onChange={updateField} tabIndex="-1" autoComplete="off" />

      <div className="form-row">
        <label>
          Name <span>*</span>
          <input
            name="name"
            value={values.name}
            onChange={updateField}
            onBlur={markTouched}
            placeholder="Your full name"
            aria-invalid={Boolean(fieldError("name"))}
          />
          {fieldError("name") && <small>{fieldError("name")}</small>}
        </label>
        <label>
          Email <span>*</span>
          <input
            name="email"
            type="email"
            value={values.email}
            onChange={updateField}
            onBlur={markTouched}
            placeholder="buyer@company.com"
            aria-invalid={Boolean(fieldError("email"))}
          />
          {fieldError("email") && <small>{fieldError("email")}</small>}
        </label>
      </div>

      <div className="form-row">
        <label>
          Phone <span>*</span>
          <input
            name="phone"
            type="tel"
            value={values.phone}
            onChange={updateField}
            onBlur={markTouched}
            placeholder="+1 555 123 4567"
            aria-invalid={Boolean(fieldError("phone"))}
          />
          {fieldError("phone") && <small>{fieldError("phone")}</small>}
        </label>
        <label>
          Company Name
          <input
            name="company"
            value={values.company}
            onChange={updateField}
            placeholder="Company or organization"
          />
        </label>
      </div>

      <div className="form-row">
        <label>
          Country / Region
          <input
            name="country"
            value={values.country}
            onChange={updateField}
            placeholder="United States, Germany, UAE..."
          />
        </label>
        <label>
          Product Requirement
          <input
            name="productRequirement"
            value={values.productRequirement}
            onChange={updateField}
            placeholder="Ginseng extract, goji berry, herbal powder..."
          />
        </label>
      </div>

      <label>
        Message
        <textarea
          name="message"
          value={values.message}
          onChange={updateField}
          placeholder="Tell us product form, quantity, packaging, target market or document requirements."
        />
      </label>

      <div className="form-support">
        <span><ShieldCheck size={16} /> Required fields are marked with *</span>
        <span><Mail size={16} /> Response target: 1 business day</span>
      </div>

      <button className="rfq-submit" type="submit" disabled={status.type === "loading"}>
        {status.type === "loading" ? <Loader2 size={18} className="spin" /> : <ArrowRight size={18} />}
        {status.type === "loading" ? "Submitting..." : "Submit Inquiry"}
      </button>

      {status.type !== "idle" && (
        <div className={`form-status ${status.type}`} role="status">
          {status.type === "success" && <CheckCircle2 size={18} />}
          <span>{status.message}</span>
        </div>
      )}

      {hasErrors && status.type === "error" && (
        <p className="form-hint">Please check Name, Email and Phone before sending.</p>
      )}
    </form>
  );
}
