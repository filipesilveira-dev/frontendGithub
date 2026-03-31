// Importação da interface “Article” criada no local especificado
import type {Article} from "@/types/types"
// Importação do componente <Card /> que será renderizado dentro de um map() feito no array “articles” passado via props de Home()
import Card from "../Card"
// Importação da estilização
import styles from "./Grid.module.css"

// Tipagem typescript: é esperado um array “articles” tipado de acordo com a interface criada “Article”
type Props ={
    articles: Article[]
}

// Recebe o objeto “articles” via props de Home(): ele será utilizado para criar um card para cada artigo salvo
const Grid = ({articles} : Props)=>{
    return(
        // Local onde aparecerão os filmes. Serão renderizados tantos componentes "Card", que representará cada filme, quanto houver na lista (array) de filmes
        <section className={styles.grid}>
            {/* "key" para identificar da filme da lista e props "filme" passada para filho Card */}
            {articles.map(article=> <Card key={article.id} article={article}/>)}
        </section>
    )
}

// Exporta o componente Grid para page.tsx (componente pai)
export default Grid;