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
      className="bg-slate-50 py-20 md:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-slate-950 md:text-5xl lg:text-6xl">
            Por que escolher a Daxorya?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600 md:text-lg">
            Criamos soluções digitais com atenção ao design, à tecnologia e,
            principalmente, aos objetivos de cada negócio.
          </p>
        </div>

        {/* Benefits */}
        <div className="mt-16 grid border-t border-slate-200 md:grid-cols-2">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="border-b border-slate-200 py-8 md:px-8 md:py-10"
            >
              <div className="flex items-start gap-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-200 text-blue-700">
                  <i className={`fas ${benefit.icon} text-sm`} />
                </div>

                <div>
                  <h3 className="text-lg font-semibold tracking-tight text-slate-950 md:text-xl">
                    {benefit.title}
                  </h3>

                  <p className="mt-3 max-w-lg text-sm leading-6 text-slate-600 md:text-base">
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
