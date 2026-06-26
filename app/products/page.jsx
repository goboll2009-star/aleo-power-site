import { Header, Inquiry, ProductGrid, ProductShowcase, Strengths } from "../components";

export const metadata = {
  title: "Product Range | WEUP Chinese Herbal Ingredients",
  description:
    "Explore WEUP Chinese herbal raw materials, herbal slices, botanical extracts, powders, herbal tea cuts and private label OEM supply."
};

export default function ProductsPage() {
  return (
    <main className="page products-page">
      <Header />
      <section className="section product-page-hero">
        <span className="section-kicker">Product Range</span>
        <div className="section-head">
          <h1>Chinese herbal ingredients organized for global B2B procurement.</h1>
          <p>
            Review core supply categories across raw herbs, slices, extracts, powders, herbal tea cuts and OEM formats,
            then send an RFQ with product form, quantity and target market.
          </p>
        </div>
      </section>
      <ProductGrid />
      <ProductShowcase />
      <Strengths />
      <Inquiry dense />
    </main>
  );
}
