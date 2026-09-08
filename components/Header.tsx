import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand" aria-label="Valle Digital home">
          <Image
            className="brand-logo"
            src="/logo/valle-digital-logo.svg"
            alt="Valle Digital"
            width={300}
            height={146}
            priority
            unoptimized
          />
        </Link>
        <nav className="main-nav" aria-label="Main navigation">
          <ul className="nav-list">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
          <Link className="button nav-cta" href="/contact">
            Talk to us
          </Link>
        </nav>
      </div>
    </header>
  );
}
