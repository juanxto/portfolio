"use client";

import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
  {
<<<<<<< HEAD
    title: "Disparador de Mensagens",
    description:
      "Sistema automatizado para envio de mensagens no WhatsApp usando Python, Supabase e Z-API.",
    tech: ["Python", "Z-API", "Supabase"],
=======
    title: "Disparador De Mensagens",
    description:
      "Sistema automatizado para envio de mensagens no WhatsApp usando Python, Supabase e Z-API.",
    tech: ["Python 3", "requests", "Z-API", "Supabase"],
>>>>>>> cb16851a214e79ff0b4db1145424849306daf3c0
    github: "https://github.com/juanxto/disparadorDeMensagens",
  },
  {
    title: "Marmota Mobilidade",
    description:
      "Projeto em Next.js e TypeScript que implementa um sistema de relatórios e gestão de falhas, com autenticação simples, filtros por data/tipo e design responsivo, utilizando TailwindCSS.",
    tech: ["Next.js", "TypeScript", "TailwindCSS"],
    github: "https://github.com/juanxto/MMobilidade",
    demo: "https://m-mobilidade-32i4.vercel.app/dashboard",
  },
  {
    title: "Web Scraper – Represent CLO",
    description:
      "Projeto em Python que coleta dados da seção “Mens New Arrivals” do site Represent CLO usando BeautifulSoup, salvando em arquivo estruturado.",
    tech: ["Python 3", "requests", "BeautifulSoup"],
    github: "https://github.com/juanxto/representWebScrap",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-[#0F172A] text-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Meus Projetos
        </motion.h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-[#1E293B] rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-[#38BDF8] text-black text-sm px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-4 mt-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#38BDF8] hover:underline"
                >
                  <FaGithub /> GitHub
                </a>

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[#38BDF8] hover:underline"
                  >
                    <FaExternalLinkAlt /> Demo
                  </a>
                )}
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
