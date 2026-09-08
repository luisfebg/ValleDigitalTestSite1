import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Valle Digital, our roots and the principles behind how we work.",
};

export default function AboutPage() {
  return (
    <section className="page-section">
      <div className="container">
        <div className="page-intro">
          <p className="eyebrow">About Valle Digital</p>
          <h1>Colombian roots. International consulting and technology experience.</h1>
          <p className="page-copy">
            Valle Digital is built around a simple idea: digital work should bring clarity, create confidence and support meaningful growth.
          </p>
        </div>

        <div className="page-grid">
          <article className="service-card">
            <span className="card-number">01</span>
            <h3>Rooted in clarity</h3>
            <p>We make complex choices easier to understand, with direct communication and a clear view of what matters.</p>
          </article>
          <article className="service-card">
            <span className="card-number">02</span>
            <h3>International perspective</h3>
            <p>Our identity brings Colombian roots together with experience shaped by international consulting and technology work.</p>
          </article>
          <article className="service-card">
            <span className="card-number">03</span>
            <h3>Designed for growth</h3>
            <p>We favour practical foundations and thoughtful decisions that can evolve as the organisation grows.</p>
          </article>
        </div>

        <div className="contact-panel">
          <h2>Want to learn more about how we work?</h2>
          <p>Tell us what you are trying to achieve and we can start with a clear conversation.</p>
          <Link className="button button-primary" href="/contact">Talk to us</Link>
        </div>
      </div>
    </section>
  );
}
