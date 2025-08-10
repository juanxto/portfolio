"use client";

import Link from "next/link";
import { useState } from "react";

const sections = [
  { id: "home", label: "Início" },
  { id: "about", label: "Sobre" },
  { id: "projects", label: "Projetos" },
  { id: "contact", label: "Contato" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed w-full bg-[#0F172A]/90 backdrop-blur-md border-b border-[#1E293B] z-50">
      <nav className="container mx-auto flex justify-between items-center px-4 py-3">
        <Link href="#home" className="text-lg font-bold text-[#3B82F6]">
          Juan.dev
        </Link>
        <div className="hidden md:flex gap-6">
          {sections.map((sec) => (
            <a
              key={sec.id}
              href={`#${sec.id}`}
              className="hover:text-[#3B82F6] transition"
            >
              {sec.label}
            </a>
          ))}
        </div>
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          ☰
        </button>
        {open && (
          <div className="absolute top-14 right-4 bg-[#1E293B] border border-[#334155] rounded p-4 flex flex-col gap-3 md:hidden">
            {sections.map((sec) => (
              <a
                key={sec.id}
                href={`#${sec.id}`}
                className="hover:text-[#3B82F6]"
                onClick={() => setOpen(false)}
              >
                {sec.label}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
