"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detecta o scroll da página e ajusta o fundo do header
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);

    // VERIFICAÇÃO IMEDIATA:
    // Executa a função assim que o componente monta, para caso a página seja recarregada já com scroll.
    handleScroll();

    // Adiciona o listener para os próximos scrolls
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Trava o scroll do site quando o menu mobile estiver aberto
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Limpeza caso o componente seja desmontado
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  const links = [
    { label: "Início", href: "/" },
    { label: "Serviços", href: "/#servicos" },
    { label: "Projetos", href: "/#projetos" },
    { label: "Processo", href: "/#processo" },
    { label: "Preços", href: "/#precos" },
    { label: "Contato", href: "/#contato" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ${
        scrolled || menuOpen
          ? "bg-slate-950/90 backdrop-blur-md border-b border-white/5 py-4 shadow-lg shadow-black/40"
          : "bg-transparent border-transparent py-6"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          onClick={() => setMenuOpen(false)}
          className="group relative z-50 flex items-center gap-1"
        >
          <span className="text-2xl font-bold tracking-tighter text-white transition-transform duration-300 group-hover:scale-105">
            Dax
            <span className="text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.4)]">
              orya
            </span>
          </span>
        </Link>

        {/* Navegação */}
        <nav
          className={`
            fixed top-0 left-0 z-40 flex h-dvh w-full flex-col items-center justify-center gap-8
            bg-slate-950/95 backdrop-blur-2xl
            transition-all duration-500 ease-in-out
            lg:static lg:flex lg:h-auto lg:w-auto lg:flex-row lg:justify-end lg:gap-8
            lg:bg-transparent lg:backdrop-blur-none lg:p-0
            ${
              menuOpen
                ? "visible translate-y-0 opacity-100"
                : "invisible -translate-y-8 opacity-0 lg:visible lg:translate-y-0 lg:opacity-100"
            }
          `}
        >
          {links.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`
                group relative py-2 text-2xl font-medium tracking-wide text-white/80
                transition-colors duration-300
                hover:text-white
                lg:py-0 lg:text-sm lg:text-white/70
                ${index === 0 ? "text-white" : ""}
              `}
            >
              {link.label}
              {/* Underline animado - Escondido no mobile, ativo no desktop */}
              <span className="absolute -bottom-1 left-0 hidden h-0.5 w-0 rounded-full bg-cyan-400 transition-all duration-300 group-hover:w-full shadow-[0_0_10px_rgba(34,211,238,0.5)] lg:block"></span>
            </Link>
          ))}
        </nav>

        {/* Botão Menu Mobile */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          className="relative z-50 flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white transition-all duration-300 hover:bg-white/10 hover:text-cyan-400 lg:hidden"
        >
          <i
            className={`fas ${
              menuOpen ? "fa-xmark" : "fa-bars"
            } text-lg transition-transform duration-300 ${
              menuOpen ? "rotate-90 scale-110" : "rotate-0"
            }`}
          />
        </button>
      </div>
    </header>
  );
}
