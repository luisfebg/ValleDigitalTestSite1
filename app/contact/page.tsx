import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Start a conversation with Valle Digital.",
};

export default function ContactPage() {
  return (
    <section className="page-section">
      <div className="container">
        <div className="page-intro">
          <p className="eyebrow">Contact</p>
          <h1>Start with a clear conversation.</h1>
          <p className="page-copy">
            Tell us what you are working on, what is getting in the way and what a good outcome would look like. We can take it from there.
          </p>
        </div>

        <div className="contact-panel">
          <p className="card-kicker">Valle Digital</p>
          <h2>Contact details are being prepared.</h2>
          <p>
            This test site is ready for the final company email, enquiry form and business contact information once those details are confirmed.
          </p>
        </div>
      </div>
    </section>
  );
}
