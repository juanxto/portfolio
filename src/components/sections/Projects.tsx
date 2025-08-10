"use client";

import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "GreenPrint",
    description:
      "Calculadora de pegada de carbono para ajudar usuários a entenderem seu impacto ambiental.",
    tech: ["Next.js", "TypeScript", "TailwindCSS"],
    github: "https://github.com/seuusuario/greenprint",
    demo: "https://greenprint.vercel.app",
  },
  {
    title: "Marmota Mobilidade",
    description:
      "Sistema web para gestão de falhas em mobilidade urbana.",
    tech: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/seuusuario/marmota",
    demo: "https://m-mobilidade-32i4.vercel.app/dashboard",
  },
  {
    title: "Meu Portfólio",
    description:
      "Portfólio pessoal feito com Next.js, TypeScript e animações.",
    tech: ["Next.js", "Framer Motion", "TailwindCSS"],
    github: "https://github.com/seuusuario/portfolio",
    demo: "/",
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
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#38BDF8] hover:underline"
                >
                  <FaExternalLinkAlt /> Demo
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
