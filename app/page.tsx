import Link from "next/link";

export default function HomePage() {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <p className="eyebrow">Valle Digital</p>
        <h1>A clean foundation for the new Valle Digital website.</h1>
        <p className="hero-copy">
          This is the starter homepage. We can now replace this content with the final brand, services, imagery and design.
        </p>
        <div className="hero-actions">
          <Link className="button button-primary" href="/services">Explore services</Link>
          <Link className="button button-secondary" href="/contact">Contact us</Link>
        </div>
      </div>
    </section>
  );
}
