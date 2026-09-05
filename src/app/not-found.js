import Button from "@/components/button";

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
    <main className="relative flex min-h-screen items-center justify-center bg-slate-950 px-6 overflow-hidden">
      
      {/* Background Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl pointer-events-none" />

      <section className="relative z-10 w-full max-w-2xl text-center">
        <p className="text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-linear-to-b from-white to-white/40 md:text-9xl">
          404
        </p>

        <div className="mx-auto mt-6 max-w-lg">
          <h1 className="text-2xl font-extrabold tracking-tight text-white md:text-3xl">
            Página não <span className="text-cyan-400">encontrada</span>
          </h1>

          <p className="mt-4 text-sm leading-relaxed text-white/60 md:text-base">
            A página que procura não existe, foi movida ou o endereço pode
            estar incorreto.
          </p>
        </div>

        <div className="mt-10 flex justify-center">
          <Button href="/" variant="primary">
            Voltar ao início
          </Button>
        </div>
      </section>
    </main>
  );
}