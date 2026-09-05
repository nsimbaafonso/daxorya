"use client";

import { useState, useRef } from "react";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);
  const contentRefs = useRef([]);

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

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-slate-50 py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        {/* Header padronizado */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold leading-tight tracking-tighter text-slate-900 md:text-5xl lg:text-6xl">
            Perguntas <span className="text-blue-700">frequentes</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-600 md:text-lg">
            Algumas respostas para as dúvidas mais comuns antes de começar um
            projeto connosco.
          </p>
        </div>

        {/* FAQ com transição suave */}
        <div className="mx-auto mt-20 max-w-3xl border-t border-slate-200">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={faq.question} className="border-b border-slate-200">
                <button
                  onClick={() => toggleFaq(index)}
                  className="group flex w-full cursor-pointer items-center justify-between gap-6 py-6 text-left text-base font-semibold text-slate-900 transition-colors duration-300 hover:text-blue-700 md:py-7 md:text-lg"
                >
                  <span>{faq.question}</span>

                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 transition-all duration-300 ${
                      isOpen
                        ? "border-blue-700 bg-blue-700 text-white"
                        : "group-hover:border-blue-700/50"
                    }`}
                  >
                    <i
                      className={`fas fa-plus text-xs transition-transform duration-300 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    />
                  </span>
                </button>

                <div
                  ref={(el) => (contentRefs.current[index] = el)}
                  style={{
                    maxHeight: isOpen
                      ? `${contentRefs.current[index]?.scrollHeight || 200}px`
                      : "0px",
                  }}
                  className="overflow-hidden transition-all duration-300 ease-in-out"
                >
                  <div className="max-w-2xl pb-6 pr-12 text-sm leading-relaxed text-slate-600 md:pb-7 md:text-base">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
