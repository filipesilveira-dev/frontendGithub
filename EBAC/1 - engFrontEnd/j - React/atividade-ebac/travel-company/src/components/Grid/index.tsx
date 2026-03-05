import { Destination } from "@/types/types";
import styles from "@/components/Grid/Grid.module.css"
import Card from "../CardDestino";

type Props ={
    destinations: Destination[],
}

const Grid = ({destinations}: Props)=>{
    return(
        <section className={styles.grid}>
            {destinations.map(destination => <Card key={destination.id} destination={destination}/>)}
        </section>
    )
}

export default Grid;