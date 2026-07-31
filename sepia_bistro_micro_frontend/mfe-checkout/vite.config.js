import { defineConfig } from "vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";
//Importação do plugin de federação
import { federation } from "@module-federation/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] }),
    //Configuração do Module Federation
    federation({
      // o container usará esse nome
      name: "checkout",
      // nome do arquivo que será gerado no build
      filename: "remoteEntry.js",
      exposes: {
        // expondo o componente "Catalogo"para o container
        "./Checkout": "./src/components/Checkout",
      },
      shared: {
        // compartilhamento de dependências para evitar conflitos de versão
        react: { singleton: true },
        "react-dom": { singleton: true },
      },
      // Desativa a busca por configurações do TypeScript e a geração de tipos
      dts: false,
    }),
  ],
  // definição da porta que será utilizada no servidor local
  server: {
    // define a porta fixa
    port: 3002,
    // se a 3001 estiver ocupada, ele falha em vez de mudar para 3002
    strictPort: true,
  },
  // Configuração de build necessária para habilitar o Top-Level Await do Module Federation. O Vite utiliza o ESbuild originalmente
  build: {
    target: "esnext",
  },
});
