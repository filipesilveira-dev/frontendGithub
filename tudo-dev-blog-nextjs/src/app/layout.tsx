import type { Metadata } from "next";
import "./globals.css";
// Importação do commmponenten reutilizável Header
import Header from "../components/Header";
// Importação do componente reutilizável Footer
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Tudo Dev",
  description: "Blog voltado para quem está aprendendo a desenvolver",
  icons: {
    icon: "./favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
