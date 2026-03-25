// Importação de articles.js para ser utilizado no endpoint
import { articles } from "@/lib/articles";

// Simulação de um endpoint de GET() de uma API buscando as informações contidas em articles. O cliente, por meio de axios solicitará a intformação daqui
export async function GET() {
  return Response.json(articles);
}

// Possibilidade de simulação de outros endpoints