import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore Valle Digital services.",
};

export default function ServicesPage() {
  return (
    <section className="page-section">
      <div className="container">
        <p className="eyebrow">Services</p>
        <h1>What we do</h1>
        <p className="page-copy">
          This page is ready for the final Valle Digital service offering, case studies and calls to action.
        </p>
      </div>
    </section>
  );
}
