const Card = ({menuItems})=>{
    
    return(
        <ul>
            {
                menuItems.map((item)=>(
                    <li key={item.id}>
                        <div>
                            <img src="https://placehold.co/300x200" alt="" />
                            <h3>{item.name}</h3>
                            <p>{item.description}</p>
                            <p>{item.price}</p>
                        </div>
                    </li>
                ))
            }
        </ul>
    )
}

export default Card