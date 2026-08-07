"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/#fonctionnalites", label: "Fonctionnalites", match: "/#fonctionnalites" },
    { href: "/#comment-ca-marche", label: "Comment ca marche", match: "/#comment-ca-marche" },
    { href: "/#screenshots", label: "Captures", match: "/#screenshots" },
    { href: "/confidentialite", label: "Confidentialite", match: "/confidentialite" },
    { href: "/conditions", label: "CGU", match: "/conditions" },
    { href: "/support", label: "Support", match: "/support" },
  ];

  const isActive = (match: string) => {
    if (match.startsWith("/#")) return pathname === "/";
    return pathname === match;
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/logo.png"
              alt="Horem+"
              width={36}
              height={36}
              className="rounded-lg"
            />
            <span className="text-xl font-bold text-primary-dark">
              Horem<span className="text-accent">+</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  isActive(link.match)
                    ? "text-primary border-b-2 border-primary pb-0.5"
                    : "text-text-secondary hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <button
            className="md:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <svg
              className="w-6 h-6 text-foreground"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden pb-4 border-t border-border mt-2 pt-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block text-sm font-medium ${
                  isActive(link.match)
                    ? "text-primary font-semibold"
                    : "text-text-secondary hover:text-primary"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
