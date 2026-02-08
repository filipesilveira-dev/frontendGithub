import useInput from "../hooks/useInput";
import { useSetRecoilState } from "recoil";
import userState from '../state/user'

export default function Login() {
  const userName = useInput();

// Informação sobre o estado do usuário obtida lá do átomo criado em "user.js". O "setState" anterior foir removido. Foi utilizada a mesma nomenclatura anterior
const setUser = useSetRecoilState(userState);

  // Função chamada com "onSubmit" para lidar com o submit do input do login
  const handleLogin = (e) => {
    e.preventDefault();
    //validar
    //gravar usuário: recebe o nome de usuário digitado e altera o estado de "isLogged" de false para true. O modelo de objeto desestruturado é o mesmo lá da origem, mas aqui ele receberá os valores inseridos nesse input
    //      userName.value = useInput utilizado mais uma vez no projeto para para tratar um input
    //      isLogged: true = mudança para o estado de loggado
    setUser({ name: userName.value, isLogged: true });
  };

  return (
    <form
      onSubmit={handleLogin}
      className="flex flex-col justify-center items-center gap-4"
    >
      <input
        className="m-2 w-full
                  rounded-lg
                  border border-gray-300
                  px-3 py-2
                  focus:outline-none
                  focus:ring-2
                focus:ring-blue-500
                focus:border-blue-500"
        type="text"
        placeholder="Digite seu nome"
        value={userName.value}
        onChange={userName.onChange}
      />
      <button
        className="cursor-pointer mb-4 p-3 bg-gray-600 rounded-sm text-white hover:bg-gray-400"
        type="submit"
      >
        Entrar
      </button>
    </form>
  );
}
