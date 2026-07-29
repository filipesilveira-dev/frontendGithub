import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
//Importação do plugin de federação
import { federation } from '@module-federation/vite' 

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] }),
    //Configuração do Module Federation
    federation({
      // o container usará esse nome
      name: 'catalogo', 
      // nome do arquivo que será gerado no build
      filename: 'remoteEntry.js', 
      exposes: {
        // expondo o componente "Catalogo"para o container
         './Catalogo': './src/components/Catalogo', 
      },
      shared: {
        // compartilhamento de dependências para evitar conflitos de versão
        react: { singleton: true },
        'react-dom': { singleton: true }
      },
      // Desativa a busca por configurações do TypeScript e a geração de tipos
      dts: false
    })
  ],
  // Configuração de build necessária para habilitar o Top-Level Await do Module Federation. O Vite utiliza o ESbuild originalmente
  build: {
    target: 'esnext',
  },
})
