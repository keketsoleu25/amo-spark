import Image from "next/image";
import amoSparkLogo from "./assets/images/amo_spark.png";

const whatsappCatalogue = "https://wa.me/c/27633194640";

const products = [
  { name: "Multi-Purpose Cleaner", category: "Cleaning", size: "Size placeholder", price: "R --" },
  { name: "Dishwashing Liquid", category: "Cleaning", size: "Size placeholder", price: "R --" },
  { name: "Floor Cleaner", category: "Cleaning", size: "Size placeholder", price: "R --" },
  { name: "Room Diffuser", category: "Home Fragrance", size: "Scent placeholder", price: "R --" },
  { name: "Room Diffuser", category: "Home Fragrance", size: "Scent placeholder", price: "R --" },
  { name: "Room Diffuser", category: "Home Fragrance", size: "Scent placeholder", price: "R --" },
];

function Logo({ footer = false }: { footer?: boolean }) {
  return <Image src={amoSparkLogo} alt="Amo Spark and Scent Solutions" priority={!footer} className={footer ? "brand-logo footer-logo" : "brand-logo"} />;
}

function ProductImage({ label }: { label: string }) {
  return <div className="product-image" aria-label={`${label} image placeholder`}><span>Product image</span></div>;
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a href="#top" className="brand" aria-label="Amo Spark home"><Logo /></a>
        <nav className="desktop-nav" aria-label="Main navigation"><a href="#shop">Shop</a><a href="#about">About</a><a href="#contact">Contact</a></nav>
        <a href={whatsappCatalogue} target="_blank" rel="noopener noreferrer" className="button button-small desktop-shop">View catalogue</a>
        <details className="mobile-menu"><summary aria-label="Open navigation menu"><span></span><span></span><span></span></summary><nav className="mobile-nav" aria-label="Mobile navigation"><a href="#shop">Shop</a><a href="#cleaning">Cleaning products</a><a href="#diffusers">Room diffusers</a><a href="#about">About</a><a href={whatsappCatalogue} target="_blank" rel="noopener noreferrer" className="mobile-order">WhatsApp catalogue</a></nav></details>
      </header>

      <section className="hero" id="top"><div className="hero-copy"><p className="eyebrow">Cleaning essentials · Home fragrance</p><h1>A fresh home starts with <em>Amo Spark.</em></h1><p className="hero-text">Everyday cleaning products and room diffusers made to keep your space clean, fresh and welcoming.</p><div className="hero-actions"><a href="#cleaning" className="button">Shop cleaning</a><a href={whatsappCatalogue} target="_blank" rel="noopener noreferrer" className="button button-ghost">WhatsApp catalogue</a></div><div className="trust-row"><span>Locally owned</span><span>Everyday freshness</span><span>Easy ordering</span></div></div><div className="hero-visual"><div className="hero-placeholder"><span>Hero product / lifestyle image</span></div><div className="spark-badge">Clean.<br/>Fresh.<br/>Welcoming.</div></div></section>

      <section className="section categories" id="shop"><div className="section-heading"><p className="eyebrow">Shop by category</p><h2>Freshness for every room.</h2></div><div className="category-grid"><a className="category-card cleaning-card" href="#cleaning"><div className="category-placeholder">Cleaning category image</div><div><p>Cleaning products</p><span>For the everyday clean →</span></div></a><a className="category-card scent-card" href="#diffusers"><div className="category-placeholder">Diffuser category image</div><div><p>Room diffusers</p><span>For a space that smells beautiful →</span></div></a></div></section>

      <section className="section products" id="cleaning"><div className="section-heading split-heading"><div><p className="eyebrow">Cleaning products</p><h2>The everyday clean.</h2></div><p>Browse the current Amo Spark range and order directly through WhatsApp.</p></div><div className="product-grid">{products.slice(0, 3).map((product, index) => <article className="product-card" key={`${product.name}-${index}`}><ProductImage label={product.name}/><div className="product-meta"><span>{product.category}</span><span>{product.price}</span></div><h3>{product.name}</h3><p>{product.size}</p><a href={whatsappCatalogue} target="_blank" rel="noopener noreferrer" className="text-link">View in catalogue →</a></article>)}</div></section>

      <section className="section products scent-section" id="diffusers"><div className="section-heading split-heading"><div><p className="eyebrow orange">Room diffusers</p><h2>Make home smell like home.</h2></div><p>Explore Amo Spark's room fragrance range in the WhatsApp catalogue.</p></div><div className="product-grid">{products.slice(3).map((product, index) => <article className="product-card" key={`${product.name}-${index}`}><ProductImage label={product.name}/><div className="product-meta"><span>{product.category}</span><span>{product.price}</span></div><h3>{product.name}</h3><p>{product.size}</p><a href={whatsappCatalogue} target="_blank" rel="noopener noreferrer" className="text-link">View in catalogue →</a></article>)}</div></section>

      <section className="story" id="about"><div className="story-image">Brand / founder image placeholder</div><div className="story-copy"><p className="eyebrow">About Amo Spark</p><h2>Clean spaces. Beautiful scents. Simple joy.</h2><p>Amo Spark & Scent Solutions brings together practical cleaning essentials and home fragrance products for people who want their spaces to feel cared for.</p><p className="note">Replace this copy with Amo's real story when ready.</p></div></section>

      <section className="contact" id="contact"><p className="eyebrow orange">Ready to order?</p><h2>Browse. Choose. Order on WhatsApp.</h2><p>View the latest Amo Spark products in our WhatsApp catalogue and contact us directly to place your order.</p><a className="button button-orange" href={whatsappCatalogue} target="_blank" rel="noopener noreferrer">View WhatsApp catalogue</a></section>

      <footer><div className="footer-brand"><Logo footer /></div><p>Cleaning products · Room diffusers · Fresh spaces</p><div><p>© {new Date().getFullYear()} Amo Spark & Scent Solutions</p><p className="builder-credit">Built by <a href="https://the-tech-alchemy-lab.vercel.app" target="_blank" rel="noopener noreferrer">Tech Alchemy Lab</a></p></div></footer>
    </main>
  );
}
