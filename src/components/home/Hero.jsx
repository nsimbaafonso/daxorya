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
      title: "Uma presença digital à altura do seu negócio.",
    },
    {
      image: HeroBg2,
      title: "Sites pensados para apresentar o seu negócio.",
    },
    {
      image: HeroBg3,
      title: "Transformamos ideias em experiências digitais.",
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
        speed={1400}
        pagination={{
          clickable: true,
        }}
        loop
        grabCursor={true}
        className="hero-swiper h-[calc(100vh-80px)] min-h-170"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative flex h-full min-h-170 items-center">
              {/* Image */}
              <Image
                src={slide.image}
                alt=""
                fill
                priority={index === 0}
                sizes="100vw"
                className="object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-linear-to-r from-slate-950 via-slate-950/80 to-slate-950/40" />

              {/* Content */}
              <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-8">
                <div className="max-w-3xl">
                  <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold leading-tight tracking-tight text-white">
                    {slide.title}
                  </h1>

                  <p className="mt-6 max-w-xl text-base leading-7 text-white/65 md:text-lg">
                    Criamos sites modernos, funcionais e pensados para ajudar
                    empresas a comunicar melhor o seu valor online.
                  </p>

                  <div className="mt-9 flex flex-col gap-3 sm:flex-row">
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

      {/* Swiper customization */}
      <style jsx global>{`
        .hero-swiper .swiper-pagination {
          bottom: 36px;
          left: 50%;
          width: auto;
          transform: translateX(-50%);
          display: flex;
          align-items: center;
          gap: 7px;
        }

        .hero-swiper .swiper-pagination-bullet {
          width: 6px;
          height: 6px;
          margin: 0 !important;
          opacity: 0.35;
          background: #ffffff;
          transition:
            width 400ms ease,
            opacity 400ms ease;
        }

        .hero-swiper .swiper-pagination-bullet-active {
          width: 24px;
          border-radius: 999px;
          opacity: 1;
          background: #03befd;
        }
      `}</style>
    </section>
  );
}
