"use client";

import Button from "@/components/button";

export default function Contatos() {

  const phone = "244974636955";
  const message = "Olá! Gostaria de saber mais sobre os serviços da Daxorya.";
  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(
    message,
  )}`;

  return (
    <section id="contato" className="bg-white py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24 lg:items-start">
          {/* Intro */}
          <div>
            <h2 className="text-3xl font-bold leading-tight tracking-tighter text-slate-900 md:text-5xl">
              Vamos conversar sobre o seu{" "}
              <span className="text-blue-700">projeto</span>
            </h2>

            <p className="mt-6 max-w-md text-base leading-relaxed text-slate-600 md:text-lg">
              Conte-nos um pouco sobre o que pretende criar. Vamos analisar as
              suas necessidades e entrar em contacto para definir os próximos
              passos.
            </p>

            <div className="mt-10 border-t border-slate-200 pt-8 flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-blue-700 shadow-sm">
                  <i className="fas fa-envelope text-sm" />
                </div>

                <div>
                  <p className="text-sm font-semibold text-slate-900">Email</p>

                  <a
                    href="mailto:daxorya@gmail.com"
                    className="mt-1 block text-sm text-slate-600 transition-colors hover:text-blue-700"
                  >
                    daxorya@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-blue-700 shadow-sm">
                  <i className="fab fa-whatsapp text-sm" />
                </div>

                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    WhatsApp
                  </p>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 block text-sm text-slate-600 transition-colors hover:text-blue-700"
                  >
                    Falar connosco
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <form className="rounded-2xl border border-slate-200 bg-white p-8 md:p-10 shadow-xl shadow-slate-200/50">
            <div className="mb-8 text-center">
              <h3 className="text-2xl font-bold tracking-tight text-slate-900">
                Envie-nos uma mensagem
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Preencha o formulário e entraremos em contacto consigo.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label
                  htmlFor="nome"
                  className="block text-sm font-semibold text-slate-900"
                >
                  Nome
                </label>

                <input
                  id="nome"
                  name="nome"
                  type="text"
                  placeholder="O seu nome"
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3.5 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-blue-700 focus:bg-white focus:ring-2 focus:ring-blue-700/20"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-slate-900"
                >
                  Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="O seu email"
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3.5 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-blue-700 focus:bg-white focus:ring-2 focus:ring-blue-700/20"
                />
              </div>
            </div>

            <div className="mt-6">
              <label
                htmlFor="empresa"
                className="block text-sm font-semibold text-slate-900"
              >
                Empresa
              </label>

              <input
                id="empresa"
                name="empresa"
                type="text"
                placeholder="Nome da empresa"
                className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3.5 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-blue-700 focus:bg-white focus:ring-2 focus:ring-blue-700/20"
              />
            </div>

            <div className="mt-6">
              <label
                htmlFor="assunto"
                className="block text-sm font-semibold text-slate-900"
              >
                Assunto
              </label>

              <input
                id="assunto"
                name="assunto"
                type="text"
                placeholder="Assunto da mensagem"
                className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3.5 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-blue-700 focus:bg-white focus:ring-2 focus:ring-blue-700/20"
              />
            </div>

            <div className="mt-6">
              <label
                htmlFor="mensagem"
                className="block text-sm font-semibold text-slate-900"
              >
                Mensagem
              </label>

              <textarea
                id="mensagem"
                name="mensagem"
                rows={5}
                placeholder="Descreva brevemente o que pretende criar..."
                className="mt-2 w-full resize-none rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3.5 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-blue-700 focus:bg-white focus:ring-2 focus:ring-blue-700/20"
              />
            </div>

            <div className="mt-8">
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
