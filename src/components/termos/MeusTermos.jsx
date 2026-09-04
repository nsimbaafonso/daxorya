"use client";

import Button from "@/components/button";

export default function MeusTermos() {
  return (
    <section className="bg-white pt-32 pb-20 md:pt-40 md:pb-28 lg:pb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-bold leading-tight tracking-tight text-slate-950 md:text-5xl lg:text-6xl">
            Termos e Condições
          </h1>

          <p className="mt-6 text-base leading-7 text-slate-600 md:text-lg">
            Conheça as condições que regulam a utilização do nosso website e dos
            serviços disponibilizados pela Daxorya.
          </p>
        </div>

        {/* Content */}
        <div className="mx-auto mt-16 max-w-4xl">
          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-bold tracking-tight text-slate-950 md:text-3xl">
                Aceitação dos termos
              </h2>

              <p className="mt-5 text-sm leading-7 text-slate-600 md:text-base">
                Ao utilizar este website ou solicitar os nossos serviços,
                concorda com os presentes Termos e Condições. Caso não concorde
                com alguma das condições apresentadas, recomendamos que não
                utilize os nossos serviços.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-tight text-slate-950 md:text-3xl">
                Os nossos serviços
              </h2>

              <div className="mt-5 space-y-4 text-sm leading-7 text-slate-600 md:text-base">
                <p>
                  A Daxorya presta serviços de desenvolvimento de websites,
                  lojas online, sistemas web e outras soluções digitais
                  personalizadas.
                </p>

                <p>
                  As características, funcionalidades, prazos e valores de cada
                  projeto são definidos de acordo com as necessidades do cliente
                  e apresentados antes do início do desenvolvimento.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-tight text-slate-950 md:text-3xl">
                Orçamentos e pagamentos
              </h2>

              <div className="mt-5 space-y-4 text-sm leading-7 text-slate-600 md:text-base">
                <p>
                  Os valores apresentados no website servem como referência para
                  os serviços e planos disponíveis. Projetos com necessidades
                  específicas poderão ter um orçamento personalizado.
                </p>

                <p>
                  As condições e prazos de pagamento são definidos e acordados
                  com o cliente antes do início do projeto.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-tight text-slate-950 md:text-3xl">
                Desenvolvimento e entrega
              </h2>

              <p className="mt-5 text-sm leading-7 text-slate-600 md:text-base">
                O desenvolvimento é realizado de acordo com o escopo definido
                para cada projeto. Alterações ou funcionalidades adicionais que
                não façam parte do acordo inicial poderão implicar custos e
                prazos adicionais.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-tight text-slate-950 md:text-3xl">
                Responsabilidades do cliente
              </h2>

              <p className="mt-5 text-sm leading-7 text-slate-600 md:text-base">
                O cliente é responsável por fornecer informações, conteúdos,
                imagens, logótipos e outros materiais necessários para a
                realização do projeto, bem como garantir que possui os direitos
                necessários para a sua utilização.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-tight text-slate-950 md:text-3xl">
                Propriedade intelectual
              </h2>

              <p className="mt-5 text-sm leading-7 text-slate-600 md:text-base">
                Os direitos relacionados com o projeto final, conteúdos, código,
                recursos gráficos e outros elementos são tratados de acordo com
                as condições acordadas entre a Daxorya e o cliente.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-tight text-slate-950 md:text-3xl">
                Limitação de responsabilidade
              </h2>

              <p className="mt-5 text-sm leading-7 text-slate-600 md:text-base">
                A Daxorya procura garantir a qualidade e o correto funcionamento
                das soluções desenvolvidas. No entanto, não poderá ser
                responsabilizada por problemas causados por terceiros, serviços
                externos, alterações realizadas sem autorização ou situações
                fora do seu controlo.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-tight text-slate-950 md:text-3xl">
                Alterações aos termos
              </h2>

              <p className="mt-5 text-sm leading-7 text-slate-600 md:text-base">
                A Daxorya poderá atualizar estes Termos e Condições sempre que
                necessário. A versão mais recente estará disponível nesta
                página.
              </p>
            </section>

            <section className="border-t border-slate-200 pt-10">
              <h2 className="text-2xl font-bold tracking-tight text-slate-950 md:text-3xl">
                Contacto
              </h2>

              <p className="mt-5 text-sm leading-7 text-slate-600 md:text-base">
                Se tiver alguma dúvida sobre estes Termos e Condições ou sobre
                os nossos serviços, entre em contacto connosco.
              </p>

              <div className="mt-7">
                <Button href="/#contato" variant="primary">
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
