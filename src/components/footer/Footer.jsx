"use client";

import Link from "next/link";

export default function Footer() {
  const navigation = [
    { label: "Início", href: "/" },
    { label: "Serviços", href: "/#servicos" },
    { label: "Projetos", href: "/#projetos" },
    { label: "Processo", href: "/#processo" },
    { label: "Preços", href: "/#precos" },
    { label: "Contato", href: "/#contato" },
  ];

  const services = [
    "Desenvolvimento Web",
    "Landing Pages",
    "Sistemas Web",
    "Manutenção de Sites",
  ];

  return (
    <footer className="relative overflow-hidden bg-slate-950 pt-16 lg:pt-24">
      {/* Detalhe Premium: Linha de brilho superior sutil em gradiente */}
      <div className="absolute inset-x-0 top-0 h-px w-full bg-linear-to-r from-transparent via-cyan-400/20 to-transparent"></div>

      <div className="mx-auto max-w-7xl px-6 pb-8 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[2fr_1fr_1fr_1.2fr]">
          {/* Brand & Socials */}
          <div className="max-w-sm">
            <Link href="/" className="group inline-flex items-center gap-1">
              <span className="text-2xl font-bold tracking-tighter text-white transition-transform duration-300 group-hover:scale-105">
                Dax
                <span className="text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.4)]">
                  orya
                </span>
              </span>
            </Link>

            <p className="mt-6 text-sm leading-relaxed text-white/60">
              Criamos experiências digitais modernas para empresas que querem
              crescer, destacar-se e ter uma presença profissional na internet.
            </p>

            <div className="mt-8 flex items-center gap-4">
              {[
                { icon: "fa-instagram", href: "#", label: "Instagram" },
                { icon: "fa-facebook-f", href: "#", label: "Facebook" },
                { icon: "fa-linkedin-in", href: "#", label: "LinkedIn" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="group flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white/50 transition-all duration-300 hover:bg-white/10 hover:text-cyan-400 hover:shadow-[0_0_15px_rgba(34,211,238,0.15)]"
                >
                  <i
                    className={`fab ${social.icon} text-sm transition-transform duration-300 group-hover:scale-110`}
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Navegação */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider text-white">
              Navegação
            </h3>
            <div className="mt-6 flex flex-col gap-4">
              {navigation.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group flex items-center text-sm text-white/60 transition-colors duration-300 hover:text-cyan-400"
                >
                  <span className="transform transition-transform duration-300 group-hover:translate-x-1">
                    {link.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Serviços */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider text-white">
              Serviços
            </h3>
            <div className="mt-6 flex flex-col gap-4">
              {services.map((service) => (
                <span
                  key={service}
                  className="text-sm text-white/60 transition-colors duration-300 hover:text-white cursor-default"
                >
                  {service}
                </span>
              ))}
            </div>
          </div>

          {/* Contato (CTA Menor) */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider text-white">
              Vamos conversar
            </h3>
            <p className="mt-6 text-sm leading-relaxed text-white/60">
              Tem um projeto em mente? Fale connosco e vamos transformar a sua
              ideia numa experiência digital.
            </p>
            <Link
              href="/#contato"
              className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 transition-all duration-300 hover:text-cyan-300 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]"
            >
              Entrar em contacto
              <i className="fas fa-arrow-right -rotate-45 text-xs transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </div>
        </div>

        {/* Linha Inferior (Direitos Autorais) */}
        <div className="mt-16 flex flex-col items-center gap-4 border-t border-white/10 pt-8 sm:flex-row sm:justify-between">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} Daxorya. Todos os direitos
            reservados.
          </p>

          <div className="flex gap-6">
            <Link
              href="/politica-de-privacidade"
              className="text-xs text-white/40 transition-colors duration-300 hover:text-white"
            >
              Política de Privacidade
            </Link>
            <Link
              href="/termos"
              className="text-xs text-white/40 transition-colors duration-300 hover:text-white"
            >
              Termos
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
