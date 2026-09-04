"use client";

import Button from "@/components/button";

export default function Contatos() {
  return (
    <section id="contato" className="bg-white py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          {/* Intro */}
          <div>
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-slate-950 md:text-5xl">
              Vamos conversar sobre o seu projeto.
            </h2>

            <p className="mt-6 max-w-md text-base leading-7 text-slate-600 md:text-lg">
              Conte-nos um pouco sobre o que pretende criar. Vamos analisar as
              suas necessidades e entrar em contacto para definir os próximos
              passos.
            </p>

            <div className="mt-10 border-t border-slate-200 pt-8">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-slate-200 text-blue-700">
                  <i className="fas fa-envelope text-sm" />
                </div>

                <div>
                  <p className="text-sm font-semibold text-slate-950">Email</p>

                  <a
                    href="mailto:contacto@daxorya.com"
                    className="mt-1 block text-sm text-slate-600 transition-colors hover:text-blue-700"
                  >
                    contacto@daxorya.com
                  </a>
                </div>
              </div>

              <div className="mt-6 flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-slate-200 text-blue-700">
                  <i className="fab fa-whatsapp text-sm" />
                </div>

                <div>
                  <p className="text-sm font-semibold text-slate-950">
                    WhatsApp
                  </p>

                  <a
                    href="#"
                    className="mt-1 block text-sm text-slate-600 transition-colors hover:text-blue-700"
                  >
                    Falar connosco
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <form className="rounded-lg border border-slate-200 p-6 md:p-8">
            <div className="mb-8 text-center">
              <h3 className="text-2xl font-bold tracking-tight text-slate-950">
                Envie-nos uma mensagem
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Preencha o formulário e entraremos em contacto consigo.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label
                  htmlFor="nome"
                  className="text-sm font-semibold text-slate-950"
                >
                  Nome
                </label>

                <input
                  id="nome"
                  name="nome"
                  type="text"
                  placeholder="O seu nome"
                  className="mt-2 w-full rounded-md border border-slate-200 bg-white px-4 py-3 text-sm text-slate-950 outline-none transition-colors placeholder:text-slate-400 focus:border-blue-700 focus:ring-1 focus:ring-blue-700"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="text-sm font-semibold text-slate-950"
                >
                  Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="O seu email"
                  className="mt-2 w-full rounded-md border border-slate-200 bg-white px-4 py-3 text-sm text-slate-950 outline-none transition-colors placeholder:text-slate-400 focus:border-blue-700 focus:ring-1 focus:ring-blue-700"
                />
              </div>
            </div>

            <div className="mt-6">
              <label
                htmlFor="empresa"
                className="text-sm font-semibold text-slate-950"
              >
                Empresa
              </label>

              <input
                id="empresa"
                name="empresa"
                type="text"
                placeholder="Nome da empresa"
                className="mt-2 w-full rounded-md border border-slate-200 bg-white px-4 py-3 text-sm text-slate-950 outline-none transition-colors placeholder:text-slate-400 focus:border-blue-700 focus:ring-1 focus:ring-blue-700"
              />
            </div>

            <div className="mt-6">
              <label
                htmlFor="assunto"
                className="text-sm font-semibold text-slate-950"
              >
                Assunto
              </label>

              <input
                id="assunto"
                name="assunto"
                type="text"
                placeholder="Assunto da mensagem"
                className="mt-2 w-full rounded-md border border-slate-200 bg-white px-4 py-3 text-sm text-slate-950 outline-none transition-colors placeholder:text-slate-400 focus:border-blue-700 focus:ring-1 focus:ring-blue-700"
              />
            </div>

            <div className="mt-6">
              <label
                htmlFor="mensagem"
                className="text-sm font-semibold text-slate-950"
              >
                Mensagem
              </label>

              <textarea
                id="mensagem"
                name="mensagem"
                rows={5}
                placeholder="Descreva brevemente o que pretende criar..."
                className="mt-2 w-full resize-none rounded-md border border-slate-200 bg-white px-4 py-3 text-sm text-slate-950 outline-none transition-colors placeholder:text-slate-400 focus:border-blue-700 focus:ring-1 focus:ring-blue-700"
              />
            </div>

            <div className="mt-7">
              <Button type="submit" variant="primary" fullWidth>
                Enviar mensagem
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
