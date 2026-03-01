import type { Metadata } from "next";
// A opção de "alias" perguntada no momento da instalação
import "@/styles/globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  // Refere-se ao title da página (nome na aba)
  title: "Cinelista",
  // Adiciona a descrição ao meta "description" no arquivo HTML
  description:
    "No Cinelista você encontra os títulos mais populares, em alta e melhor avaliados em um só lugar.",
};

// O layout.tsx funciona como um componente pai persistente
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        {/* Componente criado em "components" */}
        <Header />
        {children}
        {/* Componente criado em "components" */}
        <Footer />
      </body>
    </html>
  );
}
