import "./styles.css";
import WhatsAppFloatingClient from "./WhatsAppFloatingClient";

export const metadata = {
  title: "WEUP Chinese Herbal Ingredients",
  description:
    "B2B supplier of Chinese herbal raw materials, botanical extracts, TCM ingredients and OEM private label herbal products."
};

export const viewport = {
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <WhatsAppFloatingClient />
      </body>
    </html>
  );
}
