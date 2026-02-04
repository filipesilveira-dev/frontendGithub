//seleciona a <ul> com a lista de tarefas do HTML 
const tarefas = document.getElementById("listaTarefas");

//obs: "descricao" é a chave e seu valor é "Tarefa 1"

//utilizar o fecth para pegar (GET) as tarefas criadas no Crudcrud no exercício com postman. Por utilizar o "fetch", o "GET" não precisa ser especificado como nos outros casos.
fetch("https://crudcrud.com/api/7b56a48d0dcc4226a1bafae91f098b3f/tarefas")
    //caso a requisição dê certo, ou seja, a resposta venha, visa-se buscar o json dela
    .then((response) => response.json())
    //se der certo pegar o json da resposta, será retornada uma array com várias tarefas
    .then((listaDeTarefas) => {

        //itera sobre cada tarefa do array. Para cada elemento (tarefa) de listaDeTarefas será executada o que está na arrow function
        listaDeTarefas.forEach(tarefa => {

            //cria um novo elemento de lista (<li>) para cada tarefa
            const item = document.createElement("li");
            //define o conteúdo HTML do item, incluindo descrição e botão (o json se ordena "descricao":"valor". Nesse caso, está agindo na descrição, na chave). Adiciona-se também um botão
            item.innerHTML = `${tarefa.descricao} <button data-id="${tarefa._id}" onclick="remove('${tarefa._id}')">X</button>`;
            //adiciona o novo item à constante "tarefas" a qual recebe o elemento HTML com id = "listaTarefas"
            tarefas.appendChild(item);
        });
    })
    .catch(error => console.error("Erro ao adicionar tarefa: ", error));

//criar o evento de cadastrar um nova atrefa
document.getElementById("add").addEventListener("click", () => {

    //seleciona o elemento HTML (id="terefa") de onde será recebido o valor ou informação que será acrescentada na lista de tarefas 
    const descricao = document.getElementById("tarefa").value;

    //a URL será a mesma utilizada anteriormente no método GET, porém ao final será acrecentado um objeto e suas informações que serão acrescidas
    fetch("https://crudcrud.com/api/7b56a48d0dcc4226a1bafae91f098b3f/tarefas", {

        method: "POST", //método de acrescentar
        headers: {
            //objeto informa que o tipo de conteúdo que será passado é do tipo JSON
            "Content-Type": "application/json"
        },
        //no body é o que será enviado, no caso um arquivo JSON. Dessa forma é utilizado o parâmetro estabelecido no postman (descricao) que fica na primeira posição dos parâmetros passados e, no segundo parâmetro, será passada a variável "description" criada para receber o valor do que há no elemento HTML com id="tarefa". Como se trata de um objeto em javascript, é necessário transformá-lo em JSON por meio do JSON.stringify().
        body: JSON.stringify({ descricao: descricao })

    })
        .then(response => response.json())
        .then((tarefa) => {

            //cria um novo elemento de lista (<li>) para cada tarefa
            const item = document.createElement("li");
            //define o conteúdo HTML do item, incluindo descrição e botão
            item.innerHTML = `${tarefa.descricao} <button data-id="${tarefa._id}" onclick="remove('${tarefa._id}')">X</button>`;
            //adiciona o novo item à lista de tarefas no HTML
            tarefas.appendChild(item);
        })
    limparCampo()
    
})

function limparCampo() {
    const tarefa = document.getElementById('tarefa')
    tarefa.value = ''
    tarefa.focus();
}

function remove(tarefaId) {
    fetch(`https://crudcrud.com/api/7b56a48d0dcc4226a1bafae91f098b3f/tarefas/${tarefaId}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },
    })

        .then(response => {
            // Verifica se deu certo para depois chamar a função para remover da tela
            if (response.ok) {
                console.log(`Item com ID ${tarefaId} foi deletado com sucesso!`);
                removerItemDaTela(tarefaId);
            } else {
                console.log('Erro ao deletar item:', response.status);
                alert('Erro ao deletar tarefa');
            }
        })
        .catch(error => {
            console.error('Erro na requisição de delete:', error);
            alert('Erro ao conectar com o servidor');
        });
}

function removerItemDaTela(tarefaId) {
    const button = document.querySelector(`button[data-id="${tarefaId}"]`);
    // se tiver um elemento com id='button'
    if (button) {
        // Remove o elemento pai (li) do botão encontrado
        button.parentElement.remove();
        console.log(`Item com ID ${tarefaId} removido da tela`);
    } else {
        console.error(`Botão com ID ${tarefaId} não encontrado na tela`);
    }
}
