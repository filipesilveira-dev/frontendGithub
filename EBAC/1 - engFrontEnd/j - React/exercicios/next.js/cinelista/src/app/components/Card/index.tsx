import { Filme } from "@/types/types";

// Tipagem das props recebidas do componente pai (Grid)
type Props ={

    // "filme" tipado de acordo com a interface criada "Filme"
    filme: Filme;
}

// Componente criado que recebe do componente pai "filme" via props. "Card" representa a estrutura de cada filme
const Card = ({filme}: Props)=>{

    // Desestruturaçã do objeto "filme". Cada propriedade virou uma variável. Não há, dessa forma, a necessidade de representar como {filme.imagem}, por exemplo
    const {id, title, imagem, description} = filme;

    return(

        // Cada "div" aqui funcionará como um elemento de uma lista. Por isso o "id" do filme é passado como "key" (necessário para o React em listas para identificar o componente a ser atualizado)
        <div key={id}>

            {/* "img" recebe como "src" a propriedade "imagem" do objeto filme. Trata-se do endereço de onde essa imagem virá (string) */}
            <img src={imagem} alt={`Poster do filme ${title}`} width={300} height={200}/>
            
            <div>
                
                {/* Passa o título do filme em questão */}
                <h3>{title}</h3>

                {/* Passa a desrcição do filme em questão */}
                <p>{description}</p>
            </div>
        </div>
    )
}

// Exporta o componente Card (componente pai)
export default Card;