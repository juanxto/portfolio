"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Linkedin, Github, Send, Check } from "lucide-react";

type FormData = { name: string; email: string; message: string };

const containerVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.12, when: "beforeChildren" },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({ name: "", email: "", message: "" });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setSubmitting(true);

  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setSuccess(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSuccess(false), 3000);
    } else {
      const data = await res.json();
      alert(data.error || "Erro ao enviar mensagem.");
    }
  } catch (error) {
    alert("Erro de conexão.");
  } finally {
    setSubmitting(false);
  }
};


  return (
    <section id="contact" className="py-20 bg-[#0F172A] text-[#F8FAFC]">
      <motion.div
        className="max-w-5xl mx-auto px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={containerVariants}
      >
        {/* Cabeçalho */}
        <motion.div variants={itemVariants} className="text-center mb-10">
          <h2 className="text-4xl font-bold">Entre em Contato</h2>
          <p className="mt-2 text-[#94A3B8]">
            Vamos conversar sobre projetos, vagas ou parcerias. Escolha uma das opções abaixo ou
            me mande uma mensagem diretamente.
          </p>
        </motion.div>

        {/* Cards de contato */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center mb-12"
        >
          <motion.a
            href="mailto:juanprcoelho@gmail.com"
            className="flex flex-col items-center gap-2 p-6 rounded-2xl bg-[#1E293B] border border-[#334155] hover:shadow-lg transition"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="p-2 rounded-full bg-[#0F172A]">
              <Mail size={28} className="text-[#3B82F6]" />
            </span>
            <span className="font-medium">E-mail</span>
            <span className="text-sm text-[#94A3B8]">juanprcoelho@gmail.com</span>
          </motion.a>

          <motion.a
            href="https://linkedin.com/in/juanprcoelho"
            className="flex flex-col items-center gap-2 p-6 rounded-2xl bg-[#1E293B] border border-[#334155] hover:shadow-lg transition"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="p-2 rounded-full bg-[#0F172A]">
              <Linkedin size={28} className="text-[#3B82F6]" />
            </span>
            <span className="font-medium">LinkedIn</span>
            <span className="text-sm text-[#94A3B8]">/in/juanprcoelho</span>
          </motion.a>

          <motion.a
            href="https://github.com/juanxto"
            className="flex flex-col items-center gap-2 p-6 rounded-2xl bg-[#1E293B] border border-[#334155] hover:shadow-lg transition"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="p-2 rounded-full bg-[#0F172A]">
              <Github size={28} className="text-[#3B82F6]" />
            </span>
            <span className="font-medium">GitHub</span>
            <span className="text-sm text-[#94A3B8]">/juanxto</span>
          </motion.a>
        </motion.div>

        {/* Formulário + imagem/ilustração opcional */}
        <motion.div variants={itemVariants} className="gap-8 items-start">
          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            variants={containerVariants}
            className="bg-[#111827] p-8 rounded-2xl shadow-lg space-y-5 border border-[#1f2937]"
          >
            <motion.div variants={itemVariants}>
              <label htmlFor="name" className="block mb-1 text-sm text-[#94A3B8]">Nome</label>
              <input
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-[#0B1220] border border-[#263244] outline-none focus:ring-2 focus:ring-[#3B82F6] transition"
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <label htmlFor="email" className="block mb-1 text-sm text-[#94A3B8]">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-[#0B1220] border border-[#263244] outline-none focus:ring-2 focus:ring-[#3B82F6] transition"
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <label htmlFor="message" className="block mb-1 text-sm text-[#94A3B8]">Mensagem</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-[#0B1220] border border-[#263244] outline-none focus:ring-2 focus:ring-[#3B82F6] transition"
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <motion.button
                type="submit"
                disabled={submitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-3 px-4 py-3 bg-[#3B82F6] hover:bg-[#2563eb] text-white rounded-lg font-semibold transition disabled:opacity-60"
              >
                <Send size={18} />
                {submitting ? "Enviando..." : "Enviar Mensagem"}
              </motion.button>
            </motion.div>
          </motion.form>
        </motion.div>
      </motion.div>

      {/* Toast de sucesso */}
      <AnimatePresence>
        {success && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="fixed right-6 bottom-6 z-50"
          >
            <div className="flex items-center gap-3 bg-[#0b1220] text-[#F8FAFC] border border-[#234] px-4 py-3 rounded-lg shadow-lg">
              <Check size={20} className="text-green-400" />
              <div className="text-sm">
                <strong>Mensagem enviada!</strong>
                <div className="text-xs text-[#94A3B8]">Responderei em breve ✨</div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
