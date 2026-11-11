"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { underlineStroke } from "./looseleaf/ink";
import { PenBox } from "./looseleaf/paper";

const navItems = [
  { href: "#about", label: "About", homeOnly: true },
  { href: "#experience", label: "Experience", homeOnly: true },
  { href: "#projects", label: "Projects", homeOnly: true },
  { href: "https://tools.nilanjandeb.com", label: "Tools ↗", isExternal: true },
  { href: "#contact", label: "Contact", homeOnly: true },
] as const;

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const pendingSection = useRef<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // After a route change the target may not be mounted yet, so retry briefly.
  const scrollTo = (sectionId: string, tries = 0) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({ top: element.getBoundingClientRect().top + window.scrollY - 80, behavior: "smooth" });
    } else if (tries < 30) {
      setTimeout(() => scrollTo(sectionId, tries + 1), 100);
    }
  };

  // Home sections: scroll if we're on "/", otherwise go home first and scroll once it has mounted
  // (the router resets scroll to the top on navigation, so scrolling any earlier gets undone).
  const handleSectionNavigation = (sectionId: string) => {
    if (pathname === "/") {
      scrollTo(sectionId);
    } else {
      pendingSection.current = sectionId;
      router.push("/");
    }
  };

  useEffect(() => {
    if (pathname === "/" && pendingSection.current) {
      const id = pendingSection.current;
      pendingSection.current = null;
      setTimeout(() => scrollTo(id), 80);
    }
  }, [pathname]);

  const links = (onPick?: () => void) =>
    navItems.map((item) => (
      <li key={item.href}>
        {"isExternal" in item ? (
          <Link href={item.href} className="ll-navlink" target="_blank" rel="noopener noreferrer" onClick={onPick}>
            {item.label}
          </Link>
        ) : (
          <button
            type="button"
            className="ll-navlink"
            onClick={() => {
              handleSectionNavigation(item.href.slice(1));
              onPick?.();
            }}
          >
            {item.label}
          </button>
        )}
      </li>
    ));

  return (
    <nav className="ll-nav" data-scrolled={isScrolled || isOpen ? "true" : "false"} aria-label="Primary">
      <div className="ll-nav-paper" aria-hidden="true">
        <svg viewBox="0 0 1200 12" preserveAspectRatio="none" className="ll-nav-line" focusable="false">
          <path
            d={underlineStroke("nav-line", 1200, 12, 1.4)}
            fill="none"
            stroke="var(--ll-pen)"
            strokeWidth={1.6}
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      </div>

      <div className="ll-nav-inner">
        <Link href="/" className="ll-nav-logo" onClick={() => setIsOpen(false)}>
          Nilanjan Deb
        </Link>

        <ul className="ll-nav-links">{links()}</ul>

        <div className="ll-nav-actions">
          <ThemeToggle />
          <button
            type="button"
            className="ll-iconbtn ll-nav-burger"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((v) => !v)}
          >
            <PenBox seed="nav-burger" w={40} h={40} fill="var(--ll-slip)" strokeWidth={1.5} amp={0.7} sketch={false} />
            <span className="ll-iconbtn-glyph">
              {isOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
            </span>
          </button>
        </div>
      </div>

      {isOpen ? <ul className="ll-nav-menu">{links(() => setIsOpen(false))}</ul> : null}
    </nav>
  );
}
