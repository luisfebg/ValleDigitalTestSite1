import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <p className="footer-brand">{siteConfig.name}</p>
          <p className="footer-tagline">{siteConfig.tagline}</p>
        </div>
        <div className="footer-links" aria-label="Footer navigation">
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}
