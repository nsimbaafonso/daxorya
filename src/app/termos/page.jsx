import MeusTermos from "@/components/termos/MeusTermos";

// Configuração de Metadata (SEO)
export const metadata = {
  title: "Termos e Condições | Daxorya",
  description:
    "Conheça os termos e condições que regulam a utilização do website e dos serviços da Daxorya.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function Termos() {
  return (
    <>
      <MeusTermos />
    </>
  );
}
