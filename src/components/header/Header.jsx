"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { label: "Início", href: "/" },
    { label: "Serviços", href: "/#servicos" },
    { label: "Projetos", href: "/#projetos" },
    { label: "Processo", href: "/#processo" },
    { label: "Preços", href: "/#precos" },
    { label: "Contato", href: "/#contato" },
  ];

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/5 bg-slate-950">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          onClick={() => setMenuOpen(false)}
          className="group flex items-center"
        >
          <span className="text-2xl font-bold tracking-tight text-white">
            Dax<span className="text-cyan-400">orya</span>
          </span>
        </Link>

        {/* Navigation */}
        <nav
          className={`
            fixed inset-0 z-40 flex flex-col items-center justify-center
            bg-slate-950 px-8
            transition-all duration-300
            lg:static lg:flex lg:flex-row lg:justify-end
            lg:gap-8 lg:bg-transparent lg:p-0
            ${
              menuOpen
                ? "visible opacity-100"
                : "invisible opacity-0 lg:visible lg:opacity-100"
            }
          `}
        >
          {links.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`
                py-4 text-lg font-medium text-white/60
                transition-colors duration-300
                hover:text-white
                lg:py-0 lg:text-sm
                ${index === 0 ? "text-white lg:text-cyan-400" : ""}
              `}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          className="relative z-50 flex items-center justify-center text-white transition-colors duration-300 hover:text-cyan-400 lg:hidden"
        >
          <i className={`fas ${menuOpen ? "fa-xmark" : "fa-bars"} text-lg`} />
        </button>
      </div>
    </header>
  );
}
