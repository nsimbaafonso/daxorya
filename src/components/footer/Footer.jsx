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
    <footer className="border-t border-white/5 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[2fr_1fr_1fr_1.2fr]">
          {/* Brand */}
          <div className="max-w-sm">
            <Link href="/" className="inline-flex items-center">
              <span className="text-2xl font-bold tracking-tight text-white">
                Dax<span className="text-cyan-400">orya</span>
              </span>
            </Link>

            <p className="mt-5 text-sm leading-6 text-white/50">
              Criamos experiências digitais modernas para empresas que querem
              crescer, destacar-se e ter uma presença profissional na internet.
            </p>

            <div className="mt-6 flex items-center gap-4">
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-white/50 transition-all duration-300 hover:border-cyan-400/40 hover:text-cyan-400"
              >
                <i className="fab fa-instagram text-sm" />
              </a>

              <a
                href="#"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-white/50 transition-all duration-300 hover:border-cyan-400/40 hover:text-cyan-400"
              >
                <i className="fab fa-facebook-f text-sm" />
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-white/50 transition-all duration-300 hover:border-cyan-400/40 hover:text-cyan-400"
              >
                <i className="fab fa-linkedin-in text-sm" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-white">Navegação</h3>

            <div className="mt-5 flex flex-col gap-3">
              {navigation.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/50 transition-colors duration-300 hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-white">Serviços</h3>

            <div className="mt-5 flex flex-col gap-3">
              {services.map((service) => (
                <span key={service} className="text-sm text-white/50">
                  {service}
                </span>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-white">
              Vamos conversar
            </h3>

            <p className="mt-5 text-sm leading-6 text-white/50">
              Tem um projeto em mente? Fale connosco e vamos transformar a sua
              ideia numa experiência digital.
            </p>

            <Link
              href="/#contato"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 transition-colors duration-300 hover:text-cyan-300"
            >
              Entrar em contacto
              <i className="fas fa-arrow-up text-xs" />
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 flex flex-col gap-4 border-t border-white/5 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} Daxorya. Todos os direitos reservados.
          </p>

          <div className="flex gap-6">
            <Link
              href="/politica-de-privacidade"
              className="text-xs text-white/40 transition-colors hover:text-white"
            >
              Política de Privacidade
            </Link>

            <Link
              href="/termos"
              className="text-xs text-white/40 transition-colors hover:text-white"
            >
              Termos
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
