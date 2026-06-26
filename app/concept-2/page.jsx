import Image from "next/image";
import { ArrowRight, Leaf, PackageCheck } from "lucide-react";
import {
  ConceptLinks,
  ConversionPanel,
  ExportPackingStory,
  FaqFooter,
  FloatingKeywords,
  Header,
  Pillars,
  ProductShowcase,
  QualityStory,
  Strengths
} from "../components";

export default function ConceptTwo() {
  return (
    <main className="page concept-two">
      <ConceptLinks />
      <Header />
      <section className="hero nature-hero">
        <div className="nature-backdrop">
          <Image src="/assets/herbs-hero.jpg" alt="Bulk Chinese herbal ingredients" fill priority />
        </div>
        <div className="hero-copy">
          <span className="hero-kicker">Natural Origin · Export Quality · B2B Supply</span>
          <h1>Source authentic Chinese herbs with a cleaner global supply story.</h1>
          <p>
            A calmer, more organic homepage route for buyers who care about authentic origins, food-grade handling,
            flexible packing and long-term supply stability.
          </p>
          <div className="hero-actions">
            <button>Start Sourcing <ArrowRight size={18} /></button>
            <button className="secondary">View Product Range</button>
          </div>
        </div>
        <FloatingKeywords />
      </section>
      <Pillars />
      <section className="split-feature">
        <div>
          <span className="section-kicker">Supply Categories</span>
          <h2>From raw herbs to branded retail-ready formats.</h2>
          <p>
            This concept makes product origin and category clarity the core buying experience, with warm natural
            visuals and simple conversion routes.
          </p>
          <div className="mini-list">
            <span><Leaf size={18} /> Chinese herbal raw materials</span>
            <span><PackageCheck size={18} /> Private label herbal products</span>
          </div>
        </div>
        <Image src="/assets/herbs-oem-packaging-ai.png" alt="" width={620} height={460} />
      </section>
      <ProductShowcase />
      <Strengths variant="soft" />
      <ExportPackingStory />
      <QualityStory />
      <ConversionPanel />
      <FaqFooter />
    </main>
  );
}
