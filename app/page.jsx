import Image from "next/image";
import { ArrowRight, Boxes, FlaskConical, Globe2, ShieldCheck } from "lucide-react";
import {
  ConceptLinks,
  ConversionPanel,
  ExportPackingStory,
  FaqFooter,
  Header,
  MetricStrip,
  ProductShowcase,
  QualityStory,
  Strengths
} from "./components";
import { company } from "./data";

export default function ConceptOne() {
  return (
    <main className="page concept-one">
      <ConceptLinks />
      <Header />
      <section className="hero pharma-hero frosted-hero">
        <Image
          className="hero-bg-image"
          src="/assets/herbs-banner-wide.jpg"
          alt="Chinese herbal ingredients in wooden bowls"
          fill
          priority
        />
        <div className="hero-bg-overlay" />
        <div className="hero-copy">
          <span className="hero-kicker">WEUP · Chinese Herbal Ingredient Supply</span>
          <h1>
            Chinese herbal raw materials and botanical extracts
            <span>for global B2B buyers.</span>
          </h1>
          <p>
            {company.positioning}. Built for importers, distributors, supplement brands, TCM clinics and OEM partners
            who need reliable sourcing, quality documents and export-ready supply.
          </p>
          <div className="hero-actions">
            <button>Get a Quote <ArrowRight size={18} /></button>
            <button className="secondary">Download Catalog</button>
          </div>
          <div className="hero-proof">
            <span><ShieldCheck size={18} /> COA Available</span>
            <span><Boxes size={18} /> Bulk Supply</span>
            <span><FlaskConical size={18} /> Botanical Extracts</span>
            <span><Globe2 size={18} /> Export Support</span>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-card">
            <strong>Procurement Focus</strong>
            <p>Raw herbs · Slices · Extracts · Powders · Herbal tea · OEM</p>
          </div>
          <div className="hero-supply-note">
            <span>For importers</span>
            <span>For supplement brands</span>
            <span>For OEM partners</span>
          </div>
        </div>
      </section>
      <MetricStrip />
      <ProductShowcase />
      <Strengths />
      <ExportPackingStory />
      <QualityStory />
      <ConversionPanel />
      <FaqFooter />
    </main>
  );
}
