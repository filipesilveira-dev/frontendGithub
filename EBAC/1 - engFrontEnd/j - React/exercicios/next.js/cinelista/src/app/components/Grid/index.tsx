import {Filme} from "@/types/types"
import Card from "../Card"

type Props ={
    filmes: Filme[]
}

const Grid = ({filmes} : Props)=>{
    return(
        // Local onde aparecerão os filmes. Serão renderizados tantos componentes "Card", que representará cada filme, quanto houver na lista (array) de filmes
        <section>
            {/* "key" para identificar da filme da lista e props "filme" passada para filho Card */}
            {filmes.map(filme=> <Card key={filme.id} filme={filme}/>)}
        </section>
    )
}

// Exporta o componente Grid para page.tsx (componente pai)
export default Grid;