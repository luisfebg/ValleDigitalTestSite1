import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore Valle Digital consulting and technology focus areas.",
};

const focusAreas = [
  {
    number: "01",
    title: "Strategy & direction",
    copy: "Clarify the problem, define priorities and create a practical path from the current state to the outcome you want.",
  },
  {
    number: "02",
    title: "Technology delivery",
    copy: "Turn decisions into well-structured digital solutions with an emphasis on quality, usability and maintainability.",
  },
  {
    number: "03",
    title: "Growth & optimisation",
    copy: "Improve what already exists and create stronger foundations for the next stage of digital growth.",
  },
];

export default function ServicesPage() {
  return (
    <section className="page-section">
      <div className="container">
        <div className="page-intro">
          <p className="eyebrow">What we do</p>
          <h1>Digital consulting and technology support, shaped around what you actually need.</h1>
          <p className="page-copy">
            We focus on clear decisions, practical delivery and digital foundations that can grow with the organisation.
          </p>
        </div>

        <div className="page-grid">
          {focusAreas.map((area) => (
            <article className="service-card" key={area.number}>
              <span className="card-number">{area.number}</span>
              <h3>{area.title}</h3>
              <p>{area.copy}</p>
            </article>
          ))}
        </div>

        <div className="contact-panel">
          <h2>Not sure where your challenge fits?</h2>
          <p>Start with the outcome you need. We can work backwards from there and identify the right approach.</p>
          <Link className="button button-primary" href="/contact">Start a conversation</Link>
        </div>
      </div>
    </section>
  );
}
