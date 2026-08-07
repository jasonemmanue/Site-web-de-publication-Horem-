"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

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
            <Link
              href="/#fonctionnalites"
              className="text-sm font-medium text-text-secondary hover:text-primary transition-colors"
            >
              Fonctionnalites
            </Link>
            <Link
              href="/#comment-ca-marche"
              className="text-sm font-medium text-text-secondary hover:text-primary transition-colors"
            >
              Comment ca marche
            </Link>
            <Link
              href="/#screenshots"
              className="text-sm font-medium text-text-secondary hover:text-primary transition-colors"
            >
              Captures
            </Link>
            <Link
              href="/confidentialite"
              className="text-sm font-medium text-text-secondary hover:text-primary transition-colors"
            >
              Confidentialite
            </Link>
            <Link
              href="/conditions"
              className="text-sm font-medium text-text-secondary hover:text-primary transition-colors"
            >
              CGU
            </Link>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="#telecharger"
              className="px-5 py-2.5 bg-primary text-white text-sm font-semibold rounded-full hover:bg-primary-dark transition-colors"
            >
              Telecharger
            </a>
          </div>

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
            <Link
              href="/#fonctionnalites"
              className="block text-sm font-medium text-text-secondary hover:text-primary"
              onClick={() => setMenuOpen(false)}
            >
              Fonctionnalites
            </Link>
            <Link
              href="/#comment-ca-marche"
              className="block text-sm font-medium text-text-secondary hover:text-primary"
              onClick={() => setMenuOpen(false)}
            >
              Comment ca marche
            </Link>
            <Link
              href="/#screenshots"
              className="block text-sm font-medium text-text-secondary hover:text-primary"
              onClick={() => setMenuOpen(false)}
            >
              Captures
            </Link>
            <Link
              href="/confidentialite"
              className="block text-sm font-medium text-text-secondary hover:text-primary"
              onClick={() => setMenuOpen(false)}
            >
              Confidentialite
            </Link>
            <Link
              href="/conditions"
              className="block text-sm font-medium text-text-secondary hover:text-primary"
              onClick={() => setMenuOpen(false)}
            >
              CGU
            </Link>
            <a
              href="#telecharger"
              className="inline-block mt-2 px-5 py-2.5 bg-primary text-white text-sm font-semibold rounded-full"
              onClick={() => setMenuOpen(false)}
            >
              Telecharger
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
