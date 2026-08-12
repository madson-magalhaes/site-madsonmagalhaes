"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-gray-900 border-b border-brand-orange/30 backdrop-blur">
      <div className="container-safe">
        <nav className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-lg bg-brand-orange/20 flex items-center justify-center group-hover:bg-brand-orange/30 transition">
              <span className="text-brand-orange text-xl font-bold">AI</span>
            </div>
            <span className="hidden sm:block text-white font-semibold">
              Consultoria
            </span>
          </Link>

          <ul className="hidden md:flex gap-8 items-center text-sm">
            <li>
              <a
                href="#servicos"
                className="text-gray-300 hover:text-brand-orange transition"
              >
                Serviços
              </a>
            </li>
            <li>
              <a
                href="#cases"
                className="text-gray-300 hover:text-brand-orange transition"
              >
                Casos
              </a>
            </li>
            <li>
              <a
                href="#contato"
                className="button-primary"
              >
                Agendar Auditoria
              </a>
            </li>
          </ul>

          <button
            className="md:hidden p-2 hover:bg-white/10 rounded-lg transition"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
          >
            <svg
              className="w-6 h-6 text-white"
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

        {mobileMenuOpen && (
          <ul className="md:hidden pb-4 space-y-2 border-t border-brand-orange/30 pt-4">
            <li>
              <a
                href="#servicos"
                className="block px-4 py-2 text-gray-300 hover:text-brand-orange transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                Serviços
              </a>
            </li>
            <li>
              <a
                href="#cases"
                className="block px-4 py-2 text-gray-300 hover:text-brand-orange transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                Casos
              </a>
            </li>
            <li>
              <a
                href="#contato"
                className="block px-4 py-2 button-primary w-fit"
                onClick={() => setMobileMenuOpen(false)}
              >
                Agendar Auditoria
              </a>
            </li>
          </ul>
        )}
      </div>
    </header>
  );
}
