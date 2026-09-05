"use client";

import Button from "@/components/button";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

import HeroBg1 from "@/assets/img/home1.jpg";
import HeroBg2 from "@/assets/img/home2.jpg";
import HeroBg3 from "@/assets/img/home3.jpg";

export default function Hero() {
  const slides = [
    {
      image: HeroBg1,
      title: "Uma presença digital à altura do seu negócio",
    },
    {
      image: HeroBg2,
      title: "Sites pensados para apresentar o seu negócio",
    },
    {
      image: HeroBg3,
      title: "Transformamos ideias em experiências digitais",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-slate-950">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        fadeEffect={{
          crossFade: true,
        }}
        autoplay={{
          delay: 6500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        speed={1400} // Transição suave entre as fotos
        pagination={{
          clickable: true,
        }}
        loop
        grabCursor={true}
        className="hero-swiper h-dvh min-h-150 w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative flex h-full w-full items-center">
              {/* Imagem com Efeito Ken Burns (Zoom Lento) */}
              <div className="absolute inset-0 h-full w-full overflow-hidden">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  priority={index === 0}
                  sizes="100vw"
                  className="hero-image object-cover"
                />
              </div>

              {/* Overlays (Fundo Premium) */}
              <div className="absolute inset-0 bg-linear-to-r from-slate-950 via-slate-950/80 to-slate-950/30" />
              <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-transparent to-transparent opacity-90" />

              {/* Conteúdo com Efeito Reveal */}
              <div className="hero-content relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-8">
                <div className="max-w-3xl">
                  <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold leading-[1.1] tracking-tighter text-white drop-shadow-md">
                    {slide.title}
                  </h1>

                  <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70 md:text-xl">
                    Criamos sites modernos, funcionais e pensados para ajudar
                    empresas a comunicar melhor o seu valor online
                  </p>

                  <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                    <Button href="/#contato">Falar sobre um projeto</Button>

                    <Button href="/#projetos" variant="secondary">
                      Ver projetos
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Estilos customizados e Animações */}
      <style jsx global>{`
        /* Animação do Texto (Reveal Effect) */
        .swiper-slide .hero-content {
          opacity: 0;
          transform: translateY(30px);
          transition: none; /* Reseta quando não está ativo */
        }
        .swiper-slide-active .hero-content {
          opacity: 1;
          transform: translateY(0);
          transition:
            opacity 1s cubic-bezier(0.16, 1, 0.3, 1) 0.4s,
            transform 1s cubic-bezier(0.16, 1, 0.3, 1) 0.4s;
        }

        /* Efeito Ken Burns na Imagem (Zoom muito lento) */
        .swiper-slide .hero-image {
          transform: scale(1);
          transition: transform 10s ease-out;
        }
        .swiper-slide-active .hero-image {
          transform: scale(1.08);
          transition: transform 10s ease-out;
        }

        /* Paginação Customizada Premium */
        .hero-swiper .swiper-pagination {
          bottom: 40px !important;
          left: 50% !important;
          width: auto !important;
          transform: translateX(-50%);
          display: flex;
          align-items: center;
          gap: 8px;
          z-index: 20;
        }

        .hero-swiper .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          margin: 0 !important;
          opacity: 0.3;
          background: #ffffff;
          border-radius: 999px;
          transition: all 400ms cubic-bezier(0.4, 0, 0.2, 1);
        }

        .hero-swiper .swiper-pagination-bullet:hover {
          opacity: 0.6;
        }

        .hero-swiper .swiper-pagination-bullet-active {
          width: 32px;
          opacity: 1;
          background: #22d3ee; /* cyan-400 */
          box-shadow: 0 0 12px rgba(34, 211, 238, 0.6); /* Glow premium */
        }
      `}</style>
    </section>
  );
}
