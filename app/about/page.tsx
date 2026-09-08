import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about Valle Digital.",
};

export default function AboutPage() {
  return (
    <section className="page-section">
      <div className="container">
        <p className="eyebrow">About</p>
        <h1>About Valle Digital</h1>
        <p className="page-copy">
          This page is ready for the company story, mission, team and positioning.
        </p>
      </div>
    </section>
  );
}
