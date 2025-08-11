// src/components/Skills.tsx
"use client";

import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaPython,
  FaJava,
} from "react-icons/fa";
import { FaJar } from "react-icons/fa6";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiPostgresql,
  SiPython,
  SiCashapp,
} from "react-icons/si";
import { TbBrandCSharp, TbBrandReactNative } from "react-icons/tb";

export default function Skills() {
  const skills = [
    { name: "React", icon: <FaReact className="text-sky-400" /> },
    { name: "React Native", icon: <TbBrandReactNative className="text-sky-400" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-gray-800 dark:text-white" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
    { name: "TailwindCSS", icon: <SiTailwindcss className="text-teal-400" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-600" /> },
    { name: "Git", icon: <FaGitAlt className="text-orange-400" /> },
    { name: "Python", icon: <FaPython className="text-orange-400" /> },
    { name: "Java", icon: <FaJava className="text-blue-300" /> },
    { name: "C#", icon: <TbBrandCSharp className="text-purple-400" /> },
  ];

  return (
    <section className="py-20 bg-[#1E293B] bg-gradient-to-b from-[#1E293B] to-[#0F172A]" id="skills">
      <div className="max-w-6xl mx-auto px-4 text-center ">
        <motion.h2
          className="text-3xl font-bold mb-14"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          💻 Skills & Ferramentas
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-white dark:bg-gray-900 shadow-md hover:shadow-lg transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-5xl">{skill.icon}</div>
              <p className="font-medium">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}