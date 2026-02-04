import { useContext } from "react";
import { useInput } from "../hooks/useInput";
import { UserContext } from "../contexts/UserContext";

function Login(){

    // reutiliza o tratamento com inputs do useInput
    const nomeDoUsuario = useInput();

    const {setUsuario}=useContext(UserContext)

    // como a um "submit", é necessário um "handleSubmit" ou no caso "handleLogin"
    const handleLogin = (e)=>{{
        e.preventDefault();

        //validar: o valor de "nomeDoUsuario" vem lá do "useInput" que no caso é o que é escrito no input com valor de "nomeDoUsuario"
        setUsuario({ nome: nomeDoUsuario.valor, estaLogado: true })
        //gravar o nome do usuário
    }}


    return(
        
        <div>
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <input type="text"
                placeholder="Digite seu nome"
                // o que está aqui será usado para estabelecer o valor de setUsuario
                value={nomeDoUsuario.valor}
                onChange={nomeDoUsuario.onChange} />
                <button type="submit">Entrar</button>
            </form>
        </div>
    )
}

export default Login;