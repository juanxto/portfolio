import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import { Poppins } from "next/font/google"; // importa a fonte

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // pesos que vamos usar
});

export const metadata: Metadata = {
  title: "Portfólio - Juan",
  description: "Desenvolvedor Full Stack",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={`${poppins.className} bg-[#0F172A] text-[#F8FAFC]`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
