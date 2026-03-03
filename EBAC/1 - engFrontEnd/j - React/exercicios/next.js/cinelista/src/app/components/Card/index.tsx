import type { Filme } from "@/types/types";
import styles from "./Card.module.css"

// Tipagem das props recebidas do componente pai (Grid)
type Props ={

    // "filme" tipado de acordo com a interface criada "Filme"
    filme: Filme;
}

// Componente criado que recebe do componente pai "filme" via props. "Card" representa a estrutura de cada filme
const Card = ({filme}: Props)=>{

    // Desestruturaçã do objeto "filme". Cada propriedade virou uma variável local. Não há, dessa forma, a necessidade de representar como {filme.imagem}, por exemplo
    const {id, title, imagem, description} = filme;

    return(

        // Cada "div" aqui funcionará como um elemento de uma lista. 
        <div className={styles.card}>

            {/* "img" recebe como "src" a propriedade "imagem" do objeto filme. Trata-se do endereço de onde essa imagem virá (string) */}
            <img src={imagem} alt={`Poster do filme ${title}`} width={300} height={200}/>
            
            <div className={styles.card__info}>
                
                {/* Passa o título do filme em questão */}
                <h3 className={styles.card__title}>{title}</h3>

                {/* Passa a desrcição do filme em questão */}
                <p className={styles.card__description}>{description}</p>
            </div>
        </div>
    )
}

// Exporta o componente Grid (componente pai)
export default Card;