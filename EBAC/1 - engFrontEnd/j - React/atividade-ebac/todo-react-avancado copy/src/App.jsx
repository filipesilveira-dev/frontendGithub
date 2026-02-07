import { useState } from "react";
import ToDoList from "./components/ToDoList";
import { UserContext } from "./contexts/UserContext";
import Login from "./components/Login";

function App() {
  // variável que será provida a componentes filhos sem o prop drilling (passada commo value no <UserContext.provider>)
  const [user, setUser] = useState({ name: null, isLogged: false });

  return (
    // ETAPA 2: utilizar o "UserContext" com o provider, passando os valores que serão providos aos componentes, onde serão consumidos
    <UserContext.Provider value={{ user, setUser }}>
      <div className="bg-slate-500 flex flex-col justify-center gap-4 min-h-screen p-4">
        <main className=" flex flex-col justify-center gap-4 m-auto rounded-sm border border-gray-200 bg-white p-4 shadow-md">
          {/* se user.name for verdadeiro, ou seja, existir, então use o template string. Se não, deixe sem nada. Dessa forma, o " - {user.name}" só aparece quando houver um usuário digitado */}
          <div className="mx-auto space-y-4 pt-7">
            <h1 className="text-3xl text-slate-500 font-bold text-center">
              Lista de Tarefas {user.name ? `- ${user.name}` : ""}
            </h1>
          </div>
          {/* renderização condicional: se user.isLogged for verdade, ou seja, se oi usuário estiver logado, então será renderizado o <ToDoList/>, se for falso, o componente <Login/> que será renderizado */}
          {user.isLogged ? <ToDoList /> : <Login />}
        </main>
      </div>
    </UserContext.Provider>
  );
}

export default App;
