"use client";

import LightGallery from "lightgallery/react";

import Projeto1 from "@/assets/img/construção-proangola.png";
import Projeto2 from "@/assets/img/restaurante-mesa-angola.png";
import Projeto3 from "@/assets/img/salão-aura.png";

import "lightgallery/css/lightgallery.css";

export default function Projetos() {
  const projects = [
    {
      image: Projeto1,
      title: "Construção ProAngola",
      description:
        "Website empresarial desenvolvido para apresentar os serviços e projetos da empresa.",
      url: "#",
    },
    {
      image: Projeto2,
      title: "Restaurante Mesa Angola",
      description:
        "Website para restaurante com foco na apresentação do espaço, menu e experiência do cliente.",
      url: "#",
    },
    {
      image: Projeto3,
      title: "Salão Aura",
      description:
        "Website moderno para salão de beleza, pensado para apresentar os serviços e facilitar o contacto.",
      url: "#",
    },
  ];

  return (
    <section id="projetos" className="bg-slate-50 py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header padronizado */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold leading-tight tracking-tighter text-slate-900 md:text-5xl lg:text-6xl">
            Projetos que falam por <span className="text-blue-700">nós</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-600 md:text-lg">
            Conheça alguns dos projetos que desenvolvemos para criar
            experiências digitais modernas e profissionais.
          </p>
        </div>

        {/* Projects */}
        <LightGallery
          speed={500}
          selector=".project-gallery"
          elementClassNames="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <div
              key={project.title}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:border-blue-700/30 hover:shadow-xl hover:shadow-slate-200/50"
            >
              {/* Image / LightGallery */}
              <a
                href={project.image.src}
                className="project-gallery group block"
                data-sub-html={`
                  <h4>${project.title}</h4>
                  <p>${project.description}</p>
                `}
              >
                <div className="relative aspect-16/10 overflow-hidden bg-slate-100">
                  <img
                    src={project.image.src}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 flex items-center justify-center bg-slate-950/0 transition-colors duration-300 group-hover:bg-slate-950/40">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-slate-900 opacity-0 transition-opacity duration-300 group-hover:opacity-100 shadow-lg">
                      <i className="fas fa-expand text-sm" />
                    </span>
                  </div>
                </div>
              </a>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-xl font-semibold tracking-tight text-slate-900 md:text-2xl">
                  {project.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-slate-600 md:text-base">
                  {project.description}
                </p>

                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-700 transition-colors duration-300 hover:text-blue-800"
                >
                  Ver projeto
                  <i className="fas fa-arrow-up-right-from-square text-xs" />
                </a>
              </div>
            </div>
          ))}
        </LightGallery>
      </div>
    </section>
  );
}
