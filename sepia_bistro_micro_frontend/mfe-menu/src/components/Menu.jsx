import Card from "./Card";
import "./Menu.css";

export default function Menu() {
  const menuItems = [
    {
      id: 1,
      name: "Bruschetta de Cogumelos e Brie",
      description:
        "Pão de fermentação natural tostado, cogumelos salteados na manteiga de ervas, queijo brie derretido e xarope de figo.",
      price: 38.0,
      category: "starter",
    },
    {
      id: 2,
      name: "Dadinhos de Tapioca com Geléia de Pimenta",
      description:
        "Cubos crocantes de tapioca com queijo coalho, acompanhados de geléia artesanal de pimenta agridoce.",
      price: 32.0,
      category: "starter",
    },
    {
      id: 3,
      name: "Carpaccio Clássico com Alcaparras",
      description:
        "Finas lâminas de filé mignon, molho de mostarda dijon e alcaparras, finalizado com lascas de parmesão e rúcula fresca.",
      price: 44.0,
      category: "starter",
    },
    {
      id: 4,
      name: "Croquetes de Costela com Maionese de Alho Negro",
      description:
        "Seis unidades de croquete de costela bovina desfiada lentamente, com casca extremamente crocante e molho especial.",
      price: 42.0,
      category: "starter",
    },
    {
      id: 5,
      name: "Risoto de Burrata e Tomate Confiti",
      description:
        "Arroz arbóreo cremoso ao pesto de manjericão, servido com tomates de rama assados e uma burrata inteira fresca por cima.",
      price: 68.0,
      category: "main",
    },
    {
      id: 6,
      name: "Filé Mignon ao Poivre com Aligot",
      description:
        "Medalhão de filé mignon grelhado ao molho encorpado de pimentas verdes, acompanhado do clássico purê de batata com queijo puxa.",
      price: 84.0,
      category: "main",
    },
    {
      id: 7,
      name: "Salmão Grelhado com Crosta de Ervas",
      description:
        "Posta de salmão grelhada com crosta de ervas finas, servida sobre mousseline de mandioquinha e aspargos salteados.",
      price: 79.0,
      category: "main",
    },
    {
      id: 8,
      name: "Gnocchi de Batata Baroa com Ragu de Cordeiro",
      description:
        "Nhoque artesanal dourado na manteiga de sálvia, coberto com ragu de paleta de cordeiro assada por 12 horas.",
      price: 72.0,
      category: "main",
    },
    {
      id: 9,
      name: "Polvo Grelhado com Batatas Murro",
      description:
        "Tentáculos de polvo macios e grelhados no azeite de alho, acompanhados de batatas ao murro, azeitonas pretas e pimentões assados.",
      price: 96.0,
      category: "main",
    },
    {
      id: 10,
      name: "Bife Ancho com Farofa de Castanhas e Chimichurri",
      description:
        "Corte nobre grelhado na parrilla (300g), servido com farofa crocante de castanha-do-pará e molho chimichurri fresco.",
      price: 84.0,
      category: "main",
    },
    {
      id: 11,
      name: "Fettuccine com Camarões e Limão Siciliano",
      description:
        "Massa fresca artesanal com camarões rosa grandes salteados no azeite, alho, vinho branco e raspas de limão siciliano.",
      price: 78.0,
      category: "main",
    },
    {
      id: 12,
      name: "Strogonoff de Cogumelos Selvagens (Vegano)",
      description:
        "Mix de cogumelos paris, shimeji e portobello em molho aveludado de leite de castanhas, servido com palha de mandioquinha e arroz integral.",
      price: 56.0,
      category: "main",
    },
    {
      id: 13,
      name: "Picanha Suína Grelhada com Geleia de Abacaxi",
      description:
        "Fatias de picanha suína suculentas com redução de abacaxi com pimenta, acompanhadas de purê de mandioca e couve crisp.",
      price: 62.0,
      category: "main",
    },
    {
      id: 14,
      name: "Ravioli de Queijo de Cabra e Nozes",
      description:
        "Massa recheada com queijo de cabra cremoso e nozes picadas, servida ao molho de manteiga de sálvia e peras caramelizadas.",
      price: 66.0,
      category: "main",
    },
    {
      id: 15,
      name: "Moqueca Capixaba de Peixe Branco",
      description:
        "Lombo de peixe fresco cozido lentamente em panela de barro com urucum, tomates, coentro e leite de coco. Acompanha pirão e arroz.",
      price: 74.0,
      category: "main",
    },
    {
      id: 16,
      name: "Burger Sépia Artesanal",
      description:
        "Blend bovino de 180g no pão brioche, queijo cheddar inglês, bacon caramelizado no melaço e maionese da casa. Acompanha rústicas.",
      price: 48.0,
      category: "main",
    },
    {
      id: 17,
      name: "Petit Gâteau de Doce de Leite",
      description:
        "Bolo quente com recheio cremoso de doce de leite artesanal, servido com uma bola de sorvete de fava de baunilha.",
      price: 32.0,
      category: "dessert",
    },
    {
      id: 18,
      name: "Cheesecake de Frutas Vermelhas",
      description:
        "Base crocante de biscoito, creme leve de cream cheese e calda caseira de amoras, framboesas e morangos frescos.",
      price: 28.0,
      category: "dessert",
    },
    {
      id: 19,
      name: "Torta Mousse de Chocolate 70%",
      description:
        "Fatia de torta intensa de chocolate amargo com flor de sal e praliné de avelãs crocantes.",
      price: 28.0,
      category: "dessert",
    },
    {
      id: 20,
      name: "Tiramisù Tradicional",
      description:
        "Sobremesa italiana clássica em camadas de biscoito champagne embebido em café espresso e conhaque, com creme de mascarpone e cacau.",
      price: 34.0,
      category: "dessert",
    },
  ];

  return (
    <div className="menu-container">
      <h2 className="menu-heading">Cardápio</h2>
      <Card menuItems={menuItems} />
    </div>
  );
}
