"use client";

export default function PorqueEscolher() {
  const benefits = [
    {
      icon: "fa-mobile-screen-button",
      title: "Design moderno e responsivo",
      description:
        "Interfaces atuais e adaptadas a computadores, tablets e smartphones para uma experiência consistente em qualquer dispositivo.",
    },
    {
      icon: "fa-sliders",
      title: "Soluções personalizadas",
      description:
        "Cada projeto é desenvolvido de acordo com os objetivos, necessidades e realidade do seu negócio.",
    },
    {
      icon: "fa-code",
      title: "Tecnologias modernas",
      description:
        "Utilizamos tecnologias atuais para criar soluções rápidas, escaláveis e preparadas para acompanhar o crescimento do negócio.",
    },
    {
      icon: "fa-shield-halved",
      title: "Segurança e boas práticas",
      description:
        "Seguimos boas práticas de desenvolvimento para reduzir riscos e construir aplicações mais seguras e confiáveis.",
    },
    {
      icon: "fa-headset",
      title: "Suporte após a entrega",
      description:
        "Continuamos disponíveis para ajustes, manutenção e suporte técnico depois da entrega do projeto.",
    },
    {
      icon: "fa-bullseye",
      title: "Foco nas necessidades do negócio",
      description:
        "Mais do que criar algo visualmente bonito, procuramos desenvolver soluções que realmente façam sentido para o seu negócio.",
    },
  ];

  return (
    <section
      id="porque-escolher-nos"
      className="bg-slate-50 py-24 md:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header padronizado */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold leading-tight tracking-tighter text-slate-900 md:text-5xl lg:text-6xl">
            Por que escolher a <span className="text-blue-700">Daxorya?</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-600 md:text-lg">
            Criamos soluções digitais com atenção ao design, à tecnologia e,
            principalmente, aos objetivos de cada negócio.
          </p>
        </div>

        {/* Benefits (Grid editorial com linhas divisórias limpas) */}
        <div className="mt-20 grid border-t border-slate-200 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="group border-b border-r border-slate-200 p-8 transition-colors duration-300 hover:bg-slate-50/60 md:p-10"
            >
              <div className="flex items-start gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-blue-700 transition-all duration-300 group-hover:border-blue-700/30 group-hover:bg-blue-700 group-hover:text-white">
                  <i
                    className={`fas ${benefit.icon} text-base transition-transform duration-300 group-hover:scale-110`}
                  />
                </div>

                <div>
                  <h3 className="text-lg font-semibold tracking-tight text-slate-900 md:text-xl">
                    {benefit.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-slate-600 md:text-base">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
