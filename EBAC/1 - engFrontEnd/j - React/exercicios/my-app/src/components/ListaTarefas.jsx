import { useContext, useEffect, useState } from "react";
import Tarefa from "./Tarefa"
import { useInput } from "../hooks/useInput";
import { UserContext } from "../contexts/UserContext";

// const criada para receber o endpoint do crudcrud. Foi acrescentado o "/tarefas" ao final pois será criada essa API lá no crudcrud
const API_URL = 'https://crudcrud.com/api/d188d50ca127459bb0a2274d723f9164/tarefas';

// código copiado e colado de APP (antigo nome) vinda do arquivo "App.jsx"
function ListaTarefas() {
  // inicialamente uma array, posteriormente transformada em setState. Perceba que foi passada o que era a array "tarefas" dentro do argumento de useStaete. A transformação foi feita para tornar possível adicionar e remover tarefa de UI.

  // Iniciando como uma array vazia "[]" é possível que ele seja atualizada do zero. Permite cadastrar e recuperar tarefas de uma API
  const [tarefas, setTarefas] = useState([]);

  // variável criada para receber o hook personalizado "useInput" do arquivo "useInput.jsx". Torna desnecessário o useState de "novaTarefa". Tudo o que envolvia o "novaTarefa" será substituído por "tarefa + método"
  const tarefa = useInput();

  // recebe o objeto com o nome do usuário logado
  const{usuario} = useContext(UserContext);

  // const [novaTarefa, setNovaTarefa] = useState('');
  /*

  const [tarefas, setTarefas] = useState([
    // aqui está simulado um pequeno banco de dados, possuindo cada objeto ou item da lista um id único. Dessa forma, a propriedade "key" pode identificar acada um individualemnte. 

    // ao criar essa lista estática, o programa já iniciava com essas três atividades. Iniciando como uma array vazia "[]" é possível que ele seja atualizada do zero
     { id: 1, texto: "Estudar React" },
     { id: 2, texto: "Fazer compras" },
     { id: 3, texto: "Responder e-mails" }
  ]);

  */

  

  // Buscar os dados na API quando o componente for montado
  useEffect(() => {
    //passada como argumento a const com a URL do endpoint do crudcrud
    fetch(API_URL)
      //a resposta que vier da solicitação será transformada em json pela função json()
      .then(res => res.json())
      //caso dê certa a solicitação, os dados obtidos serão de setTarefas
      .then(dados => setTarefas(dados))
      //caso dê algum erro, será retornado para o usuário (tratamento de erros)
      .catch(error => console.error("Erro ao buscar tarefas: ", error))
  }, [])

  // função para receber o submit (evento em questão) do input
  const handleSubmit = (e) => {
    // evita o recarregamento completo da página. Pelo fato do evento (e) ser um "submit", seu comportamento padrão é recarregar a página. Por isso o uso do preventDefault().
    e.preventDefault();

    // trata-se de uma pequena validação. Caso não haja nada escrito para ser feito o "submit" será retornado nada também para o usuário.
    if (tarefa.valor.trim() === '') return;

    // Após feita essa validação básica, é preciso configurar para enviar a tarefa para a API do crudcrud

    // variável criada para receber o objeto literal "novaTarefa". Nele contém a informação do nome da tarefa (introduzido onde tem "Digite uma nova tarefa"). O ID foi removido, pois o crudcrud já gera um ID para cada item
    // o "usuario: usuario.nome" especifica de qual usuário é a tarefa cadastrada
    const nova = { usuario: usuario.nome, texto: tarefa.valor.trim()}
    // por se tratar de um "POST" é preciso acrescentar algumas informações em relação ao "GET"
    fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      // especifica que será a tarefa a ser adicionada, mas convertida em string
      body: JSON.stringify(nova)
    })
      //a resposta que vier da solicitação será transformada em json pela função json()
      .then(res => res.json())
      //caso dê certa a solicitação, a tarefa criada será armazenados em setTarefas
      .then(tarefaCriada => {
        // recupera toda a lista "tarefas" atuais com o spread operator (...) e acrescenta a nova lista. PPrimeiro manda para a API e depois recupera com ID
        setTarefas([...tarefas, tarefaCriada]);
        // apaga o texto do input
        //setNovaTarefa('');
        //utiliza uma função da variável "tarefa" que recebe o hook personalizado "useInput" do arquivo "useInput.jsx"
        tarefa.limpar();
      })
      //caso dê algum erro, será retornado para o usuário (tratamento de erros)
      .catch(error => console.error("Erro ao buscar tarefas: ", error))


    /*
    COMO ESTAVA ANTES DE ENTRAR A API DO CRUDCRUD NO CÓDIGO:
  
    //como os objetos de "tarefas" possuem id e texto {id: valor, texto: valor}, será simulada a criação de um id. Nesse caso, o novo id será o id do último elemento [tarefas.length - 1] da lista mais "1"
  
     const novoId = tarefas[tarefas.length - 1].id + 1;
  
    // função para criar uma nova tarefa
    const nova = {
      // obtido com "const novoId"
      id: novoId,
      texto: novaTarefa.trim()
    }
    // recupera toda a lista "tarefas" atuais com o spread operator (...) e acrescenta a nova lista no final
    setTarefas([...tarefas, nova]);
    // apaga o texto do input
    setNovaTarefa('');
    */

  }

  return (
    <main>
      <h1>{usuario.nome}'s List App</h1>
      {/* atrela o "submeter do formulário à função "handleSubmit" */}
      <form onSubmit={handleSubmit}>
        {/* o uso da propriedade value no input serve para utilizar o setState "novaTarefa" definido como iniciando com duas aspas vazias (''), ou seja, sem nada escrito inicialmente */}
        <input type="text" placeholder="Digite uma nova tarefa" 
        // value referente à variável "tarefa" que recebe o hook personalizado "useInput" do arquivo "useInput.jsx"
        value={tarefa.valor}
        // onChange referente à variável "tarefa" que recebe o hook personalizado "useInput" do arquivo "useInput.jsx"
        onChange={tarefa.onChange} />
        {/* no caso acima em "onChange" o evento (e) será passado como argumento na arrow function na qual será retornado o valor desse evento, ou seja, o que será escrito no input*/}
        <button type="submit">Adicionar</button>
      </form>
      <ul>
        {/* 
          função map() cria, para cada elemento de "tarefas" um componente <Tarefa />, do jsx, passando como argumento do texto o próprio elemento. Importante ressaltar que cada elemento aqui na função está sendo chamado de "tarefe", mas poderia ser substituído por "e" outra forma de se referir.
        */}

        {/* 
          A propriedade "key" é necessária pois funciona como um identificador único de cada elemento. Dessa forma, ao invés de precisar renderizar tudo caso algum texto mude, ele renderiza apenas o texto alterado. Funciona aliado ao "id" que geralmente é utilizado em bancos de dados para identificar cada objeto.
          Para referenciar então os objetos dentro da array tarefas, sendo cada objeto uma "tarefa", será necessário utilizar "tarefa.id" e "tarefa.texto"
        */}
        {/* o ID retornado da API do CRUDCRUD começa com um "_" */}
        {tarefas
        // antes de mostar as tarefas, o filtro "filtra" para que sejam mostaradas apenas as tarefas referentes ao usuário em específico. Ou seja, o nome do usuário cadastrado na tarefa deve ser idêntico ao nome do usuário vindo do useContext (const{usuario})
        .filter(tarefa => tarefa.usuario === usuario.nome)
        .map(tarefa => <Tarefa key={tarefa._id} texto={tarefa.texto} />)}
      </ul>
    </main>
  )
}

/*
1 - Quando for escrita uma nova tarefa no submit e clicado em adicionar, será disparado o evento "onSubmit"
2 - Em seguida, será rodada a função "handleSubmit"
3 - Dentro de "handleSubmit", será prevenido o recarregamento da página e verificado se não está em branco.
4 - Em seguida será pego um "id" provisório
5 - Gera-se um objeto {id: valor, texto: valor} da nova tarefa
6 - Por meio de "setTarefas([...tarefas, nova]);", cria-se um novo array com a tarefa nova
7 - A lista (array) "tarefas é então atualizada com a nova tarefa", o que implica na <ul> na qual foi passada uma função map() para percorrer a lista. Isso renderizará na UI a nova array criada com a nova tarefa
*/
export default ListaTarefas