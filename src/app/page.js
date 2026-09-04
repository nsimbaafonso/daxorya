import Hero from "@/components/home/Hero";
import Servicos from "@/components/home/Servicos";
import PorqueEscolherNos from "@/components/home/PorqueEscolherNos";
import Processo from "@/components/home/Processo";
import Projetos from "@/components/home/Projetos";
import Precos from "@/components/home/Precos";
import Faq from "@/components/home/Faq";
import Cta from "@/components/home/Cta";
import Contatos from "@/components/home/Contatos";

// Configuração de Metadata (SEO Principal)
export const metadata = {
  title: "Daxorya | Desenvolvimento Web e Soluções Digitais em Angola",
  description:
    "A Daxorya desenvolve websites, lojas online e sistemas web personalizados para empresas e negócios em Angola.",
  keywords: [
    "desenvolvimento web em Angola",
    "criação de websites em Angola",
    "empresa de desenvolvimento web em Luanda",
    "websites profissionais",
    "lojas online em Angola",
    "sistemas web",
    "Daxorya",
  ],
  openGraph: {
    title: "Daxorya | Desenvolvimento Web e Soluções Digitais em Angola",
    description:
      "Websites, lojas online e sistemas web personalizados para empresas e negócios em Angola.",
    type: "website",
    locale: "pt_AO",
    siteName: "Daxorya",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <Servicos />
      <PorqueEscolherNos />
      <Processo />
      <Projetos />
      <Precos />
      <Faq />
      <Cta />
      <Contatos />
    </>
  );
}
