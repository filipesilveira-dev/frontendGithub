type Props ={
    title: string;
}

const Title = ({title}: Props) =>{
    return(
        // O título será dinâmico. Virá via props do componente pai e será utilizado em page.tsx (componente pai)
        <h2>{title}</h2>
    );
}

// Exporta para page.tsx (componente pai)
export default Title;