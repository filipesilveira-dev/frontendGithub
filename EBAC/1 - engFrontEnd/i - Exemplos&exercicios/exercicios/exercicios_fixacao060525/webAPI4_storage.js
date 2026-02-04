
//1. só em adicionar esssa linha de código, a chave "nome" e seu valor "Kléber" já ficam salvos
localStorage.setItem('nome', 'Kléber')

//recuperar e exibir o nome salvo
const p = document.createElement('p');  //inicia acriação de forma dinámica de um parágrafo
p.id = 'paragrafo';                     //acrescenta um id ao parágrafo
p.textContent = localStorage.getItem('nome');   //estabelece que o texto contido no parágrafo será o que estiver aramzenado localmente, no caso 'Kléber', o qual é o valor da chave "nome"
document.body.appendChild(p);   //acrescenta o parágrafo no 'body' (perceba que o arquivo HTML não é alterado)


//2. cria um objeto contendo duas chaves: nome e idade, com seus valores "Filipe" e "32" respectivamente
const user = {nome: "Filipe", idade: 32};
localStorage.setItem ('user', JSON.stringify(user));    //transforma o objeto "user em string json e salva localmente

const recover = JSON.parse(localStorage.getItem('user'));   //pega a string .json, transforma em objeto de volta por meio do "JSON.parse" e salva na variável "recover"
console.log(recover)    //exibe no console a variável "recover" (objeto)

const p2 = document.createElement('p');
p2.textContent = `${recover.nome}`
document.body.appendChild(p2);

//3. salva o número de visitas da página em sessionStorage
let visitas = Number(sessionStorage.getItem('visitas') || 0);   //se não houver nada salvo em 'visitas', ou seja o retorno é "null", então será retornado "0" no lugar (||0). A string retornada é transformada em número
  visitas++;    //soma 1 ao valor anterior
  sessionStorage.setItem('visitas', visitas);   //estabelece a chave 'visitas' com o valor sendo a variável 'visitas' no session storage
  document.getElementById('visitas').textContent = `Visitas nesta sessão: ${visitas}`;

//4. cria um formulário que salve o nome digitado no localStorage e exiba em um tag <p> ao recarregar
  const input = document.getElementById('nomeInput');
  const nomeSalvo = localStorage.getItem('nomeSalvo');
  if (nomeSalvo) {
    document.getElementById('nomeSalvo').textContent = `Olá, ${nomeSalvo}`;
  }

  document.getElementById('salvar').addEventListener('click', () => {
    const nome = input.value;
    localStorage.setItem('nomeSalvo', nome);
    document.getElementById('nomeSalvo').textContent = `Olá, ${nome}`;
  });







