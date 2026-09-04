import Politicas from "@/components/privacidade/Politicas";

// Configuração de Metadata (SEO)
export const metadata = {
  title: "Política de Privacidade | Daxorya",
  description:
    "Saiba como a Daxorya recolhe, utiliza, protege e trata os dados pessoais dos seus utilizadores e clientes.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function PoliticaPrivacidade() {
  return (
    <>
      <Politicas />
    </>
  );
}
