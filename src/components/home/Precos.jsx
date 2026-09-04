"use client";

import Button from "@/components/button";

export default function Precos() {
  const plans = [
    {
      name: "START",
      price: "195.000 Kz",
      description: "Para profissionais e pequenos negócios.",
      features: [
        "Até 3 páginas",
        "Design responsivo",
        "WhatsApp e redes sociais",
        "Formulário de contacto",
        "Google Maps",
        "Google Business Profile",
        "Domínio + hospedagem por 1 ano",
        "SSL",
      ],
    },
    {
      name: "BUSINESS",
      price: "350.000 Kz",
      description:
        "Para empresas que precisam de uma presença digital completa.",
      featured: true,
      features: [
        "Até 7 páginas",
        "Design personalizado",
        "Serviços e portfólio",
        "Formulários personalizados",
        "Google Business Profile",
        "SEO básico",
        "Domínio + hospedagem por 1 ano",
        "SSL",
      ],
    },
    {
      name: "PREMIUM",
      price: "450.000 Kz",
      description:
        "Para empresas que procuram uma experiência digital diferenciada.",
      features: [
        "Até 12 páginas",
        "Design totalmente personalizado",
        "UI/UX personalizado",
        "Animações e interações",
        "Funcionalidades personalizadas",
        "Integrações com APIs",
        "Google Business Profile",
        "SEO avançado",
        "Domínio + hospedagem por 1 ano",
        "SSL",
      ],
    },
    {
      name: "PERSONALIZADO",
      price: "Sob consulta",
      description: "Para projetos com necessidades específicas.",
      features: [
        "Número de páginas conforme o projeto",
        "Design e funcionalidades sob medida",
        "Sistemas web",
        "Lojas online",
        "Integrações com APIs",
        "Áreas administrativas",
        "Sistemas de gestão",
        "Outras funcionalidades específicas",
      ],
      note: "Preço definido de acordo com a complexidade do projeto.",
    },
  ];

  return (
    <section id="precos" className="bg-white py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-slate-950 md:text-5xl lg:text-6xl">
            Planos para diferentes necessidades.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600 md:text-lg">
            Escolha a solução que melhor se adapta ao seu negócio ou fale
            connosco para criar um projeto à medida.
          </p>
        </div>

        {/* Plans */}
        <div className="mt-16 grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col overflow-hidden rounded-lg border p-6 md:p-8 ${
                plan.featured
                  ? "border-blue-700 bg-slate-950"
                  : "border-slate-200 bg-white"
              }`}
            >
              {/* Featured */}
              {plan.featured && (
                <div className="absolute inset-x-0 top-0 flex items-center justify-center bg-blue-700 px-4 py-2">
                  <span className="text-xs font-semibold uppercase tracking-[0.12em] text-white">
                    Mais escolhido
                  </span>
                </div>
              )}

              {/* Plan */}
              <div className={plan.featured ? "pt-8" : ""}>
                <h3
                  className={`text-sm font-semibold tracking-wider ${
                    plan.featured ? "text-cyan-400" : "text-blue-700"
                  }`}
                >
                  {plan.name}
                </h3>

                <p
                  className={`mt-6 text-3xl font-bold tracking-tight md:text-4xl ${
                    plan.featured ? "text-white" : "text-slate-950"
                  }`}
                >
                  {plan.price}
                </p>

                <p
                  className={`mt-4 min-h-12 text-sm leading-6 ${
                    plan.featured ? "text-white/60" : "text-slate-600"
                  }`}
                >
                  {plan.description}
                </p>
              </div>

              {/* Features */}
              <div
                className={`mt-8 flex-1 border-t pt-6 ${
                  plan.featured ? "border-white/10" : "border-slate-200"
                }`}
              >
                <div className="flex flex-col gap-4">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <i
                        className={`fas fa-check mt-1 text-xs ${
                          plan.featured ? "text-cyan-400" : "text-blue-700"
                        }`}
                      />

                      <span
                        className={`text-sm leading-5 ${
                          plan.featured ? "text-white/65" : "text-slate-600"
                        }`}
                      >
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="mt-8">
                <Button href="/#contato" variant="primary" className="w-full">
                  {plan.name === "PERSONALIZADO"
                    ? "Falar sobre o projeto"
                    : "Escolher plano"}
                </Button>
              </div>

              {/* Note */}
              {plan.note && (
                <p
                  className={`mt-5 text-xs leading-5 ${
                    plan.featured ? "text-white/40" : "text-slate-500"
                  }`}
                >
                  {plan.note}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
