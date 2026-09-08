import Link from "next/link";

const principles = [
  {
    number: "01",
    title: "Clarity first",
    copy: "Start with the real problem, make the options understandable and choose a direction with purpose.",
  },
  {
    number: "02",
    title: "Thoughtful technology",
    copy: "Use technology where it adds value, with practical delivery and decisions that stand up over time.",
  },
  {
    number: "03",
    title: "Built for growth",
    copy: "Create foundations that can evolve with the organisation instead of solving only for today.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-content">
            <p className="eyebrow">Digital consulting &amp; technology</p>
            <h1>Rooted in clarity. <span>Built for growth.</span></h1>
            <p className="hero-copy">
              Valle Digital connects Colombian roots with international consulting and technology experience to help organisations make clearer digital decisions and move forward with confidence.
            </p>
            <div className="hero-actions">
              <Link className="button button-primary" href="/contact">Talk to us</Link>
              <Link className="button button-secondary" href="/services">Explore what we do</Link>
            </div>
          </div>

          <aside className="hero-card" aria-label="Valle Digital approach">
            <p className="card-kicker">The Valle approach</p>
            <h2>Clear thinking. Practical delivery.</h2>
            <div className="hero-card-list">
              <div><span>01</span><p>Understand what matters.</p></div>
              <div><span>02</span><p>Choose the right path.</p></div>
              <div><span>03</span><p>Build with the future in mind.</p></div>
            </div>
          </aside>
        </div>
      </section>

      <section className="section section-sage">
        <div className="container section-heading">
          <p className="eyebrow">How we work</p>
          <h2>A calm, practical approach to digital change.</h2>
          <p className="section-lead">
            We believe good digital work should make things clearer, not more complicated. That principle shapes how we think, communicate and deliver.
          </p>
        </div>
        <div className="container card-grid">
          {principles.map((item) => (
            <article className="principle-card" key={item.number}>
              <span className="card-number">{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container split-section">
          <div>
            <p className="eyebrow">About Valle Digital</p>
            <h2>Colombian roots. International perspective.</h2>
          </div>
          <div className="split-copy">
            <p>
              Valle Digital is a professional digital consulting and technology partner shaped by Colombian roots and international experience.
            </p>
            <p>
              The aim is simple: bring clarity to complex decisions and create digital foundations that support meaningful, sustainable growth.
            </p>
            <Link className="text-link" href="/about">Our story <span>→</span></Link>
          </div>
        </div>
      </section>

      <section className="section section-cta">
        <div className="container cta-panel">
          <div>
            <p className="eyebrow eyebrow-light">Start a conversation</p>
            <h2>Have a digital challenge you want to make clearer?</h2>
          </div>
          <Link className="button button-primary" href="/contact">Talk to Valle Digital</Link>
        </div>
      </section>
    </>
  );
}
