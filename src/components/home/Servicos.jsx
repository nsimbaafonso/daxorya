"use client";

export default function Servicos() {
  const services = [
    {
      title: "Websites profissionais",
      description:
        "Sites modernos e responsivos para apresentar a sua empresa, serviços e fortalecer a sua presença online.",
    },
    {
      title: "Lojas online",
      description:
        "E-commerces pensados para apresentar os seus produtos e proporcionar uma experiência simples de compra.",
    },
    {
      title: "Sistemas web",
      description:
        "Aplicações web personalizadas para organizar processos, gerir informações e facilitar o dia a dia do seu negócio.",
    },
    {
      title: "Manutenção e suporte",
      description:
        "Acompanhamento técnico para manter o seu site ou sistema atualizado, seguro e funcionando corretamente.",
    },
  ];

  return (
    <section id="servicos" className="bg-white py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-slate-950 md:text-5xl lg:text-6xl">
            Soluções digitais para o seu negócio.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600 md:text-lg">
            Desenvolvemos soluções pensadas para ajudar empresas a apresentar-se
            melhor, melhorar os seus processos e crescer no ambiente digital.
          </p>
        </div>

        {/* Services */}
        <div className="mt-16 grid border-t border-slate-200 md:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.title}
              className="border-b border-slate-200 px-0 py-8 md:px-8 md:py-10"
            >
              <h3 className="text-xl font-semibold tracking-tight text-slate-950 md:text-2xl">
                {service.title}
              </h3>

              <p className="mt-4 max-w-md text-sm leading-6 text-slate-600 md:text-base">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
