import Button from "@/components/button";

// SEO Simples para página 404
export const metadata = {
  title: "Página não encontrada | Daxorya",
  description: "A página que você procura não existe ou foi movida.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6">
      <section className="w-full max-w-2xl text-center">
        <p className="text-8xl font-bold tracking-tight text-white md:text-9xl">
          404
        </p>

        <div className="mx-auto mt-8 max-w-lg">
          <h1 className="text-2xl font-bold tracking-tight text-white md:text-3xl">
            Página não encontrada
          </h1>

          <p className="mt-4 text-sm leading-6 text-white/55 md:text-base">
            A página que procura não existe, foi movida ou o endereço pode
            estar incorreto.
          </p>
        </div>

        <div className="mt-8 flex justify-center">
          <Button href="/" variant="primary">
            Voltar ao início
          </Button>
        </div>
      </section>
    </main>
  );
}