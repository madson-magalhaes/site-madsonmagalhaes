"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-brand-dark-primary/50 border-b border-brand-orange/30">
      <div className="container-safe">
        <nav className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10">
              <Image
                src="/outsider-m.png"
                alt="Outsider M."
                fill
                className="object-contain"
              />
            </div>
            <span className="hidden sm:block text-brand-text-primary font-semibold">
              Madson Magalhães - Inteligência Artificial para negócios
            </span>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-8 items-center">
            <li>
              <a
                href="#como-funciona"
                className="text-brand-text-secondary hover:text-brand-orange transition"
              >
                Como Funciona
              </a>
            </li>
            <li>
              <a
                href="#servicos"
                className="text-brand-text-secondary hover:text-brand-orange transition"
              >
                Serviços
              </a>
            </li>
            <li>
              <a
                href="#contato"
                className="button-primary text-sm"
              >
                Conversar
              </a>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-brand-orange/10 rounded-lg transition"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
          >
            <svg
              className="w-6 h-6 text-brand-orange"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <ul className="md:hidden pb-4 space-y-2">
            <li>
              <a
                href="#como-funciona"
                className="block px-4 py-2 text-brand-text-secondary hover:text-brand-orange transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                Como Funciona
              </a>
            </li>
            <li>
              <a
                href="#servicos"
                className="block px-4 py-2 text-brand-text-secondary hover:text-brand-orange transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                Serviços
              </a>
            </li>
            <li>
              <a
                href="#contato"
                className="block px-4 py-2 button-primary text-sm w-fit"
                onClick={() => setMobileMenuOpen(false)}
              >
                Conversar
              </a>
            </li>
          </ul>
        )}
      </div>
    </header>
  );
}
