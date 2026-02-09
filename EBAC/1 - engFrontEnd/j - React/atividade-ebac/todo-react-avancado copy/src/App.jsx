import ToDoList from "./components/ToDoList";
import Login from "./components/Login";
import { useRecoilValue } from "recoil";
import {userState} from './state/user';
import { tasksCountSelector } from "./state/tasks";

function App() {

  // utilizado o átomo "userState" e lido seu valor para adicionar o nome ao título
  const user = useRecoilValue(userState);
  // utilizado o selector derivado de "tasksState" que retorna o tamanho desse state (quantidade de tarefas)
  const tasksCount = useRecoilValue(tasksCountSelector);

  return (
  
      <div className="bg-slate-500 flex flex-col justify-center gap-4 min-h-screen p-4">
        <main className=" flex flex-col justify-center gap-4 m-auto rounded-sm border border-gray-200 bg-white p-4 shadow-md">
          {/* se user.name for verdadeiro, ou seja, existir, então use o template string. Se não, deixe sem nada. Dessa forma, o " - {user.name}" só aparece quando houver um usuário digitado */}
          <div className="mx-auto space-y-4 pt-7">
            <h1 className="text-3xl text-slate-500 font-bold text-center">
              Lista de Tarefas {user.name ? `- ${user.name} (${tasksCount})` : ""}
            </h1>
          </div>
          {/* renderização condicional: se user.isLogged for verdade, ou seja, se oi usuário estiver logado, então será renderizado o <ToDoList/>, se for falso, o componente <Login/> que será renderizado */}
          {user.isLogged ? <ToDoList /> : <Login />}
        </main>
      </div>
  );
}

export default App;
