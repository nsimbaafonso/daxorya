"use client";

import Button from "@/components/button";

export default function Politicas() {
  return (
    <section className="bg-slate-950 pt-36 pb-24 md:pt-44 md:pb-32 lg:pb-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-bold leading-tight tracking-tighter text-white md:text-5xl lg:text-6xl">
            Política de <span className="text-cyan-400">Privacidade</span>
          </h1>

          <p className="mt-6 text-base leading-relaxed text-white/60 md:text-lg">
            Saiba como recolhemos, utilizamos e protegemos os seus dados
            pessoais ao utilizar os nossos serviços.
          </p>
        </div>

        {/* Content */}
        <div className="mx-auto mt-20 max-w-4xl">
          <div className="space-y-16">
            <section className="border-b border-white/10 pb-12">
              <h2 className="text-2xl font-bold tracking-tight text-white md:text-3xl">
                Dados que recolhemos
              </h2>

              <div className="mt-6 space-y-4 text-sm leading-relaxed text-white/70 md:text-base">
                <p>
                  Quando entra em contacto connosco ou solicita informações
                  sobre os nossos serviços, podemos recolher dados como o seu
                  nome, endereço de email, empresa e outras informações que
                  decida fornecer.
                </p>

                <p>
                  Também podemos recolher determinadas informações técnicas
                  relacionadas com a utilização do nosso website, como o tipo de
                  dispositivo, navegador e informações de navegação.
                </p>
              </div>
            </section>

            <section className="border-b border-white/10 pb-12">
              <h2 className="text-2xl font-bold tracking-tight text-white md:text-3xl">
                Como utilizamos os seus dados
              </h2>

              <div className="mt-6 space-y-4 text-sm leading-relaxed text-white/70 md:text-base">
                <p>
                  Utilizamos os dados fornecidos para responder aos seus
                  pedidos, preparar propostas, prestar os nossos serviços e
                  comunicar consigo sobre os projetos solicitados.
                </p>

                <p>
                  As informações também podem ser utilizadas para melhorar a
                  experiência de utilização do website e a qualidade dos nossos
                  serviços.
                </p>
              </div>
            </section>

            <section className="border-b border-white/10 pb-12">
              <h2 className="text-2xl font-bold tracking-tight text-white md:text-3xl">
                Proteção dos dados
              </h2>

              <p className="mt-6 text-sm leading-relaxed text-white/70 md:text-base">
                Adotamos medidas técnicas e organizacionais adequadas para
                proteger os dados pessoais contra acesso não autorizado,
                alteração, divulgação ou destruição.
              </p>
            </section>

            <section className="border-b border-white/10 pb-12">
              <h2 className="text-2xl font-bold tracking-tight text-white md:text-3xl">
                Partilha de dados
              </h2>

              <p className="mt-6 text-sm leading-relaxed text-white/70 md:text-base">
                Não vendemos os seus dados pessoais. As informações poderão ser
                partilhadas apenas quando necessário para prestar um serviço
                solicitado, cumprir obrigações legais ou proteger os nossos
                direitos.
              </p>
            </section>

            <section className="border-b border-white/10 pb-12">
              <h2 className="text-2xl font-bold tracking-tight text-white md:text-3xl">
                Os seus direitos
              </h2>

              <div className="mt-6 space-y-4 text-sm leading-relaxed text-white/70 md:text-base">
                <p>
                  Poderá solicitar informações sobre os dados pessoais que
                  mantemos sobre si e, quando aplicável, pedir a sua correção,
                  atualização ou eliminação.
                </p>

                <p>
                  Para exercer os seus direitos ou esclarecer alguma questão
                  relacionada com a privacidade, entre em contacto connosco.
                </p>
              </div>
            </section>

            <section className="pt-4">
              <h2 className="text-2xl font-extrabold tracking-tight text-white md:text-3xl">
                Contacto
              </h2>

              <p className="mt-6 text-sm leading-relaxed text-white/70 md:text-base">
                Se tiver alguma dúvida sobre esta Política de Privacidade ou
                sobre a forma como tratamos os seus dados, estamos disponíveis
                para ajudar.
              </p>

              <div className="mt-8">
                <Button
                  href="/#contato"
                  variant="primary"
                >
                  Entrar em contacto
                </Button>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
