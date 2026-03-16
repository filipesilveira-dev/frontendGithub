import type {Article} from "@/types/types"
import Card from "../Card"
import styles from "./Grid.module.css"

type Props ={
    articles: Article[]
}

const Grid = ({articles} : Props)=>{
    const artigo = articles.find((article) => article.id == "1")
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