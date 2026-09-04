"use client";

import Button from "@/components/button";

export default function Cta() {
  return (
    <section className="bg-slate-950 py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-8 rounded-lg border border-white/10 bg-white/5 px-6 py-8 md:flex-row md:items-center md:px-10 md:py-10">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold tracking-tight text-white md:text-3xl">
              Tem um projeto em mente?
            </h2>

            <p className="mt-3 text-sm leading-6 text-white/55 md:text-base">
              Vamos transformar a sua ideia em uma solução digital profissional.
            </p>
          </div>

          <Button href="/#contato" variant="primary" className="shrink-0">
            Solicitar orçamento
          </Button>
        </div>
      </div>
    </section>
  );
}
