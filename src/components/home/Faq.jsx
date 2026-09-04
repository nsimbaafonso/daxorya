"use client";

export default function Faq() {
  const faqs = [
    {
      question: "O que está incluído nos serviços?",
      answer:
        "Os serviços incluem desenvolvimento de websites, lojas online e sistemas web, de acordo com o projeto contratado. Cada plano apresenta um conjunto específico de funcionalidades e recursos.",
    },
    {
      question: "Quanto tempo demora um projeto?",
      answer:
        "O prazo depende da dimensão e complexidade do projeto. Após entendermos as necessidades, definimos um prazo estimado antes do início do desenvolvimento.",
    },
    {
      question: "O domínio e hospedagem estão incluídos?",
      answer:
        "Sim. Nos planos de website, o domínio e a hospedagem estão incluídos por 1 ano, juntamente com o certificado SSL.",
    },
    {
      question: "Como funciona o pagamento?",
      answer:
        "O pagamento é definido de acordo com o projeto e pode ser dividido em etapas. As condições de pagamento são apresentadas e acordadas antes do início do desenvolvimento.",
    },
    {
      question: "Vocês oferecem manutenção após a entrega?",
      answer:
        "Sim. Oferecemos suporte, manutenção e ajustes após a entrega para garantir que o seu website ou sistema continue funcionando corretamente.",
    },
  ];

  return (
    <section id="faq" className="bg-slate-50 py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-slate-950 md:text-5xl lg:text-6xl">
            Perguntas frequentes.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600 md:text-lg">
            Algumas respostas para as dúvidas mais comuns antes de começar um
            projeto connosco.
          </p>
        </div>

        {/* FAQ */}
        <div className="mx-auto mt-16 max-w-3xl border-t border-slate-200">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group border-b border-slate-200"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-left text-base font-semibold text-slate-950 md:py-7 md:text-lg">
                <span>{faq.question}</span>

                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-slate-200 text-slate-500 transition-colors duration-300 group-open:border-blue-700 group-open:text-blue-700">
                  <i className="fas fa-plus text-xs transition-transform duration-300 group-open:rotate-45" />
                </span>
              </summary>

              <div className="max-w-2xl pb-6 pr-12 text-sm leading-6 text-slate-600 md:pb-7 md:text-base">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
