import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import {
  ConceptLinks,
  DownloadBlock,
  ConversionPanel,
  ExportPackingStory,
  FaqFooter,
  Header,
  MetricStrip,
  ProductShowcase,
  QualityStory,
  Strengths
} from "../components";

const buyerPoints = [
  "For importers and distributors",
  "For supplement and herbal product brands",
  "For TCM clinics and herbal wholesalers",
  "For OEM / ODM private label projects"
];

export default function ConceptThree() {
  return (
    <main className="page concept-three">
      <ConceptLinks />
      <Header dark />
      <section className="hero conversion-hero">
        <div className="hero-copy">
          <span className="hero-kicker">Conversion-focused homepage for Ads + SEO</span>
          <h1>Get quote-ready Chinese herbal ingredients for your next bulk order.</h1>
          <p>
            This direction is sharper for Google Ads, LinkedIn Ads and industry traffic. It brings the RFQ form and
            commercial filters higher on the page.
          </p>
          <div className="buyer-points">
            {buyerPoints.map((point) => (
              <span key={point}><CheckCircle2 size={17} /> {point}</span>
            ))}
          </div>
          <div className="hero-actions">
            <button>Request Pricing <ArrowRight size={18} /></button>
            <button className="secondary">Talk About OEM</button>
          </div>
        </div>
        <div className="rfq-panel">
          <strong>Fast RFQ</strong>
          <input placeholder="Product interest" />
          <input placeholder="Order quantity" />
          <input placeholder="Target market" />
          <button>Send Inquiry</button>
          <p>No retail claims. No exaggerated medical promises. B2B supply only.</p>
        </div>
        <Image src="/assets/herbs-lab-quality-ai.png" alt="" fill priority />
      </section>
      <MetricStrip />
      <section className="buyer-map">
        <div>
          <span className="section-kicker">Buyer Journey</span>
          <h2>Homepage flow built around qualification, trust and RFQ conversion.</h2>
        </div>
        <div className="journey-grid">
          <article><strong>1. Understand range</strong><p>Raw materials, slices, extracts, powders, tea and OEM formats.</p></article>
          <article><strong>2. Verify quality</strong><p>Origins, tests, COA, traceability, documents and packaging controls.</p></article>
          <article><strong>3. Submit RFQ</strong><p>Company, country, product, quantity and target market collected early.</p></article>
        </div>
      </section>
      <ProductShowcase />
      <Strengths />
      <ExportPackingStory />
      <QualityStory />
      <DownloadBlock />
      <ConversionPanel />
      <FaqFooter />
    </main>
  );
}
