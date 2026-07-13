interface ButtonProps{
    text: string
    onClick: ()=> void
}

const Button = ({text, onClick}: ButtonProps)=>{
    return(
        <button onClick={onClick} type="submit" className = "cursor-pointer mt-2 p-3 bg-gray-600 rounded-sm text-white hover:bg-gray-400">{text}</button>
    )
}

export default Button;