import Image from "next/image";
import {
  ArrowRight,
  BadgeCheck,
  Beaker,
  Boxes,
  Download,
  Factory,
  FileCheck2,
  Globe2,
  Leaf,
  Mail,
  ShieldCheck,
  Sparkles
} from "lucide-react";
import { company, faqs, process, products, strengths } from "./data";

const icons = [Leaf, Beaker, Boxes, Factory, FileCheck2, ShieldCheck];
const whatsappHref =
  "https://wa.me/13588992567?text=Hello%2C%20I%20am%20interested%20in%20your%20products.%20Please%20send%20me%20more%20details.";

export function Header({ dark = false }) {
  return (
    <header className={`site-header ${dark ? "dark" : ""}`}>
      <a className="brand" href="/">
        <Image
          src={dark ? "/assets/weup-wordmark-white-transparent.png" : "/assets/weup-wordmark.png"}
          alt="WEUP logo"
          width={152}
          height={36}
          priority
        />
      </a>
      <nav>
        <div className="mega-trigger">
          <button type="button">Products <ArrowRight size={13} /></button>
          <div className="mega-menu">
            <div className="mega-panel">
              <div className="mega-intro">
                <span>Product Range</span>
                <h3>Herbal ingredient supply for global B2B buyers.</h3>
                <p>Raw herbs, slices, extracts, powders, tea cuts and OEM formats organized for procurement teams.</p>
              </div>
              <div className="mega-links">
                {products.slice(0, 6).map((product, index) => {
                  const Icon = icons[index % icons.length];
                  return (
                    <a key={product.name}>
                      <Icon size={18} />
                      <span>
                        <strong>{product.name}</strong>
                        <small>{product.items.split(",").slice(0, 3).join(", ")}</small>
                      </span>
                    </a>
                  );
                })}
              </div>
              <div className="mega-aside">
                <strong>Procurement path</strong>
                <p>Share product interest, target market and order quantity. WEUP can discuss bulk supply, documents and private label options.</p>
                <button type="button">Request Product List</button>
              </div>
            </div>
          </div>
        </div>
        <a>Private Label</a>
        <a>Quality</a>
        <a>Resources</a>
        <a>Contact</a>
      </nav>
      <a className="nav-cta" href="/inquiry">Get a Quote</a>
    </header>
  );
}

export function WhatsAppButton() {
  return (
    <a
      className="whatsapp-float"
      href={whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with WEUP on WhatsApp"
      title="Chat with us on WhatsApp"
    >
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path d="M16.03 4.5c-6.34 0-11.5 5.02-11.5 11.2 0 2.12.62 4.18 1.78 5.95L4.5 27.5l6.07-1.74a11.78 11.78 0 0 0 5.46 1.35c6.34 0 11.5-5.02 11.5-11.2S22.37 4.5 16.03 4.5Zm0 20.7c-1.74 0-3.44-.46-4.92-1.34l-.35-.2-3.6 1.03 1.07-3.46-.23-.36a9.1 9.1 0 0 1-1.56-5.17c0-5.13 4.3-9.3 9.59-9.3s9.59 4.17 9.59 9.3-4.3 9.5-9.59 9.5Z" />
        <path d="M21.56 18.76c-.3-.14-1.76-.85-2.03-.95-.27-.1-.47-.14-.67.14-.2.29-.77.95-.95 1.14-.17.19-.35.21-.65.07-.3-.14-1.26-.45-2.4-1.44-.89-.77-1.49-1.72-1.66-2-.17-.28-.02-.44.13-.58.13-.13.3-.34.45-.51.15-.17.2-.29.3-.48.1-.19.05-.36-.03-.51-.08-.14-.67-1.57-.92-2.16-.24-.56-.49-.49-.67-.5h-.57c-.2 0-.52.07-.8.36-.27.29-1.05 1-1.05 2.44s1.08 2.83 1.23 3.02c.15.19 2.12 3.14 5.14 4.4.72.3 1.28.48 1.72.62.72.22 1.38.19 1.9.12.58-.08 1.76-.7 2.01-1.38.25-.68.25-1.26.18-1.38-.07-.12-.27-.19-.57-.33Z" />
      </svg>
      <span>WhatsApp</span>
    </a>
  );
}

export function ProductGrid({ compact = false }) {
  return (
    <section className={`section product-section ${compact ? "compact" : ""}`}>
      <div className="section-kicker">Product System</div>
      <div className="section-head">
        <h2>One supply partner for raw herbs, extracts, powders and private label formats.</h2>
        <p>
          Build product pages around clear specifications, batch documents and procurement value instead of
          vague wellness claims.
        </p>
      </div>
      <div className="product-grid">
        {products.map((product, index) => {
          const Icon = icons[index % icons.length];
          return (
            <article className="product-card" key={product.name}>
              <Image src={product.image} alt="" width={420} height={260} />
              <div className="product-card-body">
                <Icon size={22} />
                <h3>{product.name}</h3>
                <p>{product.items}</p>
                <span>View category <ArrowRight size={15} /></span>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export function ProductShowcase() {
  const featured = products.slice(0, 3);
  const secondary = products.slice(3);

  return (
    <section className="section product-showcase">
      <div className="section-kicker">Product Portfolio</div>
      <div className="section-head editorial-head">
        <h2>Built around the way overseas buyers source herbal ingredients.</h2>
        <p>
          Clear categories, procurement language, batch documents and private-label paths give the site a stronger
          B2B buying logic than a generic product gallery.
        </p>
      </div>
      <div className="showcase-grid">
        {featured.map((product, index) => {
          const Icon = icons[index % icons.length];
          return (
            <article className="showcase-card" key={product.name}>
              <Image src={product.image} alt="" width={720} height={430} />
              <div>
                <Icon size={22} />
                <span>0{index + 1}</span>
              </div>
              <h3>{product.name}</h3>
              <p>{product.items}</p>
            </article>
          );
        })}
      </div>
      <div className="secondary-products">
        {secondary.map((product) => (
          <div key={product.name}>
            <strong>{product.name}</strong>
            <p>{product.items}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Strengths({ variant = "cards" }) {
  return (
    <section className={`section strengths ${variant}`}>
      <div className="section-kicker">Why WEUP</div>
      <div className="section-head">
        <h2>Designed for overseas buyers who need stable supply and clear documentation.</h2>
        <p>
          The trust layer should be factual: origins, testing, traceability, specifications, packaging and export
          support.
        </p>
      </div>
      <div className="strength-grid">
        {strengths.map((item, index) => (
          <div className="strength-item" key={item}>
            <BadgeCheck size={22} />
            <strong>{String(index + 1).padStart(2, "0")}</strong>
            <p>{item}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function ProcessBand() {
  return (
    <section className="process-band">
      <div>
        <span className="section-kicker">Quality Flow</span>
        <h2>From herb origin to export-ready batch.</h2>
      </div>
      <div className="process-steps">
        {process.map((step, index) => (
          <div key={step}>
            <span>{index + 1}</span>
            <p>{step}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function QualityStory() {
  return (
    <section className="quality-story">
      <div className="quality-copy">
        <span className="section-kicker">Quality & Documentation</span>
        <h2>Make the trust proof visual, specific and procurement-ready.</h2>
        <p>
          For European and North American B2B buyers, the strongest homepage proof is not decoration. It is sourcing
          clarity, batch control, COA availability, traceability and export documentation.
        </p>
        <div className="quality-points">
          {process.map((item, index) => (
            <span key={item}>{index + 1}. {item}</span>
          ))}
        </div>
      </div>
      <div className="quality-image">
        <Image src="/assets/weup-lab-qc-branded.png" alt="WEUP herbal quality control laboratory" width={760} height={520} />
      </div>
    </section>
  );
}

export function ExportPackingStory() {
  return (
    <section className="export-story">
      <div className="export-image">
        <Image src="/assets/weup-export-packing-branded.png" alt="WEUP export packing and warehouse preparation" width={720} height={460} />
      </div>
      <div className="export-copy">
        <span className="section-kicker">Export-Ready Supply</span>
        <h2>Packaging, labels and documents prepared for international buyers.</h2>
        <p>
          Show buyers that WEUP can move beyond raw ingredient sourcing into real export execution: batch labels,
          packing lists, carton preparation, pallets and shipment-ready documentation.
        </p>
        <div className="export-tags">
          <span>Bulk bags</span>
          <span>Private label packs</span>
          <span>Packing list</span>
          <span>Export cartons</span>
        </div>
      </div>
    </section>
  );
}

export function FounderBlock({ editorial = false }) {
  return (
    <section className={`section founder ${editorial ? "editorial" : ""}`}>
      <div className="founder-copy">
        <span className="section-kicker">Founder Profile</span>
        <h2>A visible founder profile strengthens buyer trust and GEO signals.</h2>
        <p>
          Use the founder section to explain sourcing standards, export experience and quality philosophy. Keep it
          professional and avoid unsupported medical authority claims.
        </p>
        <div className="quote">
          “We help overseas buyers source Chinese herbal ingredients with clearer specifications, stable supply and
          responsible documentation.”
        </div>
      </div>
      <div className="founder-photo">
        <Image src="/assets/founder.jpg" alt="WEUP founder portrait" width={430} height={450} />
      </div>
    </section>
  );
}

export function Inquiry({ dense = false }) {
  return (
    <section className={`inquiry ${dense ? "dense" : ""}`}>
      <div>
        <span className="section-kicker">RFQ Path</span>
        <h2>Ready to discuss bulk supply or private label?</h2>
        <p>
          The final site should collect company, country, product interest, order quantity and target market to
          filter low-quality consumer inquiries.
        </p>
      </div>
      <form>
        <input placeholder="Name" />
        <input placeholder="Email" />
        <input placeholder="Country" />
        <input placeholder="Product requirement" />
        <textarea placeholder="Message, order quantity, target market" />
        <button type="button">Request a Quote <Mail size={16} /></button>
      </form>
    </section>
  );
}

export function ConversionPanel() {
  return (
    <section className="conversion-panel">
      <div className="conversion-founder">
        <Image src="/assets/weup-business-meeting-branded.png" alt="WEUP business meeting with herbal ingredient samples" width={300} height={210} />
        <div>
          <span className="section-kicker">Founder-Led Trust</span>
          <h2>Source responsibly, document clearly, ship reliably.</h2>
          <p>
            Use the founder story as a trust signal for sourcing philosophy and export discipline, not as a medical
            authority claim.
          </p>
        </div>
      </div>
      <form className="conversion-form">
        <strong>Request a Quote</strong>
        <input placeholder="Name" />
        <input placeholder="Email" />
        <input placeholder="Country" />
        <input placeholder="Product requirement" />
        <textarea placeholder="Message, order quantity, target market" />
        <button type="button">Send Inquiry <Mail size={16} /></button>
      </form>
    </section>
  );
}

export function FaqFooter() {
  return (
    <>
      <section className="section faq">
        <div className="section-head">
          <span className="section-kicker">Buyer FAQ</span>
          <h2>Answers that help both buyers and AI search engines understand the business.</h2>
        </div>
        <div className="faq-grid">
          {faqs.map(([q, a]) => (
            <div key={q}>
              <h3>{q}</h3>
              <p>{a}</p>
            </div>
          ))}
        </div>
      </section>
      <footer>
        <div>
          <Image src="/assets/weup-logo-square.jpg" alt="WEUP square logo" width={92} height={92} />
          <p>{company.name}</p>
        </div>
        <div>
          <strong>Markets</strong>
          <p>{company.markets}</p>
        </div>
        <div>
          <strong>Primary CTA</strong>
          <p>Get a Quote / Download Catalog / Discuss Private Label</p>
        </div>
      </footer>
    </>
  );
}

export function MetricStrip() {
  return (
    <div className="metric-strip">
      <div><strong>2015</strong><span>Founded</span></div>
      <div><strong>25,600m²+</strong><span>Factory area</span></div>
      <div><strong>80+</strong><span>Team members</span></div>
      <div><strong>6</strong><span>Product systems</span></div>
    </div>
  );
}

export function FloatingKeywords() {
  return (
    <div className="keyword-cloud">
      {["Chinese Herbs", "Botanical Extracts", "TCM Ingredients", "Bulk Supply", "Private Label", "COA", "Traceability"].map((item) => (
        <span key={item}>{item}</span>
      ))}
    </div>
  );
}

export function ConceptLinks() {
  return (
    <div className="concept-links">
      <a href="/">Concept 1</a>
      <a href="/concept-2">Concept 2</a>
      <a href="/concept-3">Concept 3</a>
    </div>
  );
}

export function Pillars() {
  return (
    <section className="pillars">
      <div><Leaf /><strong>Natural origins</strong><p>Authentic Chinese herb-growing regions and direct sourcing logic.</p></div>
      <div><ShieldCheck /><strong>Quality proof</strong><p>Batch testing, COA, traceability and export documentation.</p></div>
      <div><Globe2 /><strong>Global supply</strong><p>Built for importers, wholesalers, clinics, brands and OEM partners.</p></div>
      <div><Sparkles /><strong>Custom formats</strong><p>Powders, extracts, slices, tea cuts, capsules, tablets and packaging.</p></div>
    </section>
  );
}

export function DownloadBlock() {
  return (
    <section className="download-block">
      <div>
        <span className="section-kicker">Catalog Gate</span>
        <h2>Turn catalog download into a qualified lead capture point.</h2>
        <p>
          When the English product catalog is ready, gate it with a short form and send the PDF after email capture.
        </p>
      </div>
      <button>Download Product Catalog <Download size={18} /></button>
    </section>
  );
}
