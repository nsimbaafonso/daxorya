"use client";

export default function Processo() {
  const steps = [
    {
      title: "Conversa",
      description:
        "Entendemos o seu negócio, os seus objetivos e as necessidades do projeto.",
    },
    {
      title: "Planejamento",
      description:
        "Definimos as funcionalidades, a estrutura, o prazo e o orçamento da solução.",
    },
    {
      title: "Desenvolvimento",
      description:
        "Construímos a solução e realizamos testes para garantir qualidade e bom funcionamento.",
    },
    {
      title: "Entrega",
      description:
        "Publicamos o projeto e oferecemos o suporte inicial para garantir uma transição tranquila.",
    },
  ];

  return (
    <section id="processo" className="bg-white py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-slate-950 md:text-5xl lg:text-6xl">
            Do primeiro contacto à entrega.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600 md:text-lg">
            Um processo simples e transparente para transformar a sua ideia numa
            solução digital.
          </p>
        </div>

        {/* Steps */}
        <div className="mt-16 grid border-t border-slate-200 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.title}
              className="border-b border-slate-200 py-8 md:px-6 md:py-10 lg:border-r lg:px-8 lg:last:border-r-0"
            >
              <h3 className="text-xl font-semibold tracking-tight text-slate-950 md:text-2xl">
                {step.title}
              </h3>

              <p className="mt-4 text-sm leading-6 text-slate-600 md:text-base">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
