import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Valle Digital.",
};

export default function ContactPage() {
  return (
    <section className="page-section">
      <div className="container">
        <p className="eyebrow">Contact</p>
        <h1>Let&apos;s talk</h1>
        <p className="page-copy">
          This page is ready for the final contact details, enquiry form and business information.
        </p>
      </div>
    </section>
  );
}
