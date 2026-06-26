"use client";

import { useState } from "react";

const whatsappHref =
  "https://api.whatsapp.com/send/?phone=13588992567&text=Hello%2C+I+am+interested+in+your+products.+Please+send+me+more+details.&type=phone_number&app_absent=0";

export default function WhatsAppFloatingClient() {
  const [isActive, setIsActive] = useState(false);
  const buttonStyle = {
    position: "fixed",
    right: "22px",
    bottom: "22px",
    zIndex: 120,
    width: "62px",
    height: "62px",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid rgba(255, 255, 255, 0.32)",
    borderRadius: "999px",
    background:
      "radial-gradient(circle at 32% 20%, rgba(255, 255, 255, 0.28), transparent 32%), linear-gradient(135deg, #68b840, #1f8f45)",
    color: "#ffffff",
    boxShadow: isActive
      ? "0 24px 58px rgba(31, 77, 47, 0.34), 0 0 0 10px rgba(104, 184, 64, 0.14)"
      : "0 18px 44px rgba(31, 77, 47, 0.28), 0 0 0 8px rgba(104, 184, 64, 0.1)",
    transform: isActive ? "translateY(-2px) scale(1.06)" : "translateY(0) scale(1)",
    transition: "transform 180ms ease, box-shadow 180ms ease, background 180ms ease"
  };
  const labelStyle = {
    position: "absolute",
    right: "74px",
    minWidth: "max-content",
    padding: "9px 12px",
    border: "1px solid rgba(31, 77, 47, 0.12)",
    borderRadius: "999px",
    background: "rgba(255, 255, 255, 0.92)",
    color: "#1f4d2f",
    fontSize: "12px",
    fontWeight: 900,
    opacity: isActive ? 1 : 0,
    pointerEvents: "none",
    boxShadow: "0 12px 34px rgba(31, 77, 47, 0.14)"
  };

  return (
    <a
      className="whatsapp-float"
      style={buttonStyle}
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
      onFocus={() => setIsActive(true)}
      onBlur={() => setIsActive(false)}
      href={whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with WEUP on WhatsApp"
      title="Chat with us on WhatsApp"
    >
      <svg viewBox="0 0 32 32" aria-hidden="true" style={{ width: "35px", height: "35px", fill: "currentColor" }}>
        <path d="M16.03 4.5c-6.34 0-11.5 5.02-11.5 11.2 0 2.12.62 4.18 1.78 5.95L4.5 27.5l6.07-1.74a11.78 11.78 0 0 0 5.46 1.35c6.34 0 11.5-5.02 11.5-11.2S22.37 4.5 16.03 4.5Zm0 20.7c-1.74 0-3.44-.46-4.92-1.34l-.35-.2-3.6 1.03 1.07-3.46-.23-.36a9.1 9.1 0 0 1-1.56-5.17c0-5.13 4.3-9.3 9.59-9.3s9.59 4.17 9.59 9.3-4.3 9.5-9.59 9.5Z" />
        <path d="M21.56 18.76c-.3-.14-1.76-.85-2.03-.95-.27-.1-.47-.14-.67.14-.2.29-.77.95-.95 1.14-.17.19-.35.21-.65.07-.3-.14-1.26-.45-2.4-1.44-.89-.77-1.49-1.72-1.66-2-.17-.28-.02-.44.13-.58.13-.13.3-.34.45-.51.15-.17.2-.29.3-.48.1-.19.05-.36-.03-.51-.08-.14-.67-1.57-.92-2.16-.24-.56-.49-.49-.67-.5h-.57c-.2 0-.52.07-.8.36-.27.29-1.05 1-1.05 2.44s1.08 2.83 1.23 3.02c.15.19 2.12 3.14 5.14 4.4.72.3 1.28.48 1.72.62.72.22 1.38.19 1.9.12.58-.08 1.76-.7 2.01-1.38.25-.68.25-1.26.18-1.38-.07-.12-.27-.19-.57-.33Z" />
      </svg>
      <span style={labelStyle}>WhatsApp</span>
    </a>
  );
}
