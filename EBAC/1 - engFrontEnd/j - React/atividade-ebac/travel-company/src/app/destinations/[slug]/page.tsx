// Página dinâmica 

// Importa o componente reutilizável Title
import Title from "@/components/Title";
// Importa a estilização
import styles from "./cityDetails.module.css";
// Importa o array de mock dados (será substituído por servidor de API)
import { destinations } from "@/lib/destinations";
// Importa a função nativa do Next.js notFound()
import { notFound } from "next/navigation";

// Tipagem de params: é esperado uma promise de um slug tipado como string. Params sempre é assíncrono nessa versão de next.js
type Props = {
  // Por sempre ser assíncrono, sempre é esperada uma promise em params
  params: Promise<{
    // Esperado receber a propriedade slug em formato de string
    slug: string;
  }>;
};

// Declaração do componente: uma arrow function assíncrona que recebe params como argumento tipado como Props
const CityDetails = async ({ params }: Props) => {
  // criada uma variável local, por meio de desetruturação, que recebe a propriedade "slug" contida em params
  const { slug } = await params;

  // Busca no array mock dados "destinations" o destino que apresenta o mesmo id do recebido de params
  const details = destinations.find((destination) => destination.slug === slug);

  // Caso não ache o "id" no array, logo não exite tal destino
  if(!details){
    // Caso nçao seja achado o destino, será retornada a função nativa do next "notFound()" que exibe ao em tela (pode ser uma outra página)
    return notFound();
  }

  // Desestruturação das propriedades do objeto contido em "details", que nessa altura do fluxo é esperado que sejam as propriedades de "destination"
  const {title, img, longDescription} = details;

  return (
    <>
      <Title title={title} />
      <div className={styles.cityDetails__container}>
        <p className={styles.cityDetails__text}>
          {longDescription}
        </p>
        <img className={styles.cityDetails__img} src={img} alt={`Imagem da cidade de ${title}`}/>
      </div>
    </>
  );
};

export default CityDetails;
