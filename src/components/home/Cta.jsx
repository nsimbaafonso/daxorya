"use client";

import Button from "@/components/button";

export default function Cta() {
  return (
    <section className="bg-slate-950 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-linear-to-br from-white/[0.07] to-white/2 p-8 md:p-14 lg:p-16">
          {/* Subtle background glow effect */}
          <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-blue-700/10 blur-3xl pointer-events-none" />
          <div className="absolute -left-24 -bottom-24 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl lg:text-5xl">
                Tem um projeto em <span className="text-cyan-400">mente?</span>
              </h2>

              <p className="mt-4 text-base leading-relaxed text-white/60 md:text-lg">
                Vamos transformar a sua ideia em uma solução digital
                profissional, moderna e focada em resultados.
              </p>
            </div>

            <div className="shrink-0">
              <Button
                href="/#contato"
                variant="primary"
                className="px-8 py-4 text-base"
              >
                Solicitar orçamento
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
