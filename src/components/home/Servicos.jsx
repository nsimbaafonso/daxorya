"use client";

export default function Servicos() {
  const services = [
    {
      title: "Websites profissionais",
      description:
        "Sites modernos e responsivos para apresentar a sua empresa, serviços e fortalecer a sua presença online.",
      icon: "fa-laptop-code",
    },
    {
      title: "Lojas online",
      description:
        "E-commerces pensados para apresentar os seus produtos e proporcionar uma experiência simples de compra.",
      icon: "fa-bag-shopping",
    },
    {
      title: "Sistemas web",
      description:
        "Aplicações web personalizadas para organizar processos, gerir informações e facilitar o dia a dia do seu negócio.",
      icon: "fa-network-wired",
    },
    {
      title: "Manutenção e suporte",
      description:
        "Acompanhamento técnico para manter o seu site ou sistema atualizado, seguro e funcionando corretamente.",
      icon: "fa-shield-halved",
    },
  ];

  return (
    <section id="servicos" className="bg-white py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header da Seção */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold leading-tight tracking-tighter text-slate-900 md:text-5xl lg:text-6xl">
            Soluções digitais para o{" "}
            <span className="text-blue-700">seu negócio</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-600 md:text-lg">
            Desenvolvemos soluções pensadas para ajudar empresas a apresentar-se
            melhor, melhorar os seus processos e crescer no ambiente digital.
          </p>
        </div>

        {/* Grid de Serviços */}
        <div className="mt-20 grid border-t border-slate-200 md:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.title}
              className="group border-b border-r border-slate-200 p-8 transition-colors duration-300 hover:bg-slate-50/60 md:p-12"
            >
              <div className="flex items-start gap-5">
                {/* Ícone com o mesmo padrão refinado */}
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-blue-700 transition-all duration-300 group-hover:border-blue-700/30 group-hover:bg-blue-700 group-hover:text-white">
                  <i
                    className={`fas ${service.icon} text-base transition-transform duration-300 group-hover:scale-110`}
                  />
                </div>

                <div>
                  <h3 className="text-lg font-semibold tracking-tight text-slate-900 md:text-xl">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-slate-600 md:text-base">
                    {service.description}
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
