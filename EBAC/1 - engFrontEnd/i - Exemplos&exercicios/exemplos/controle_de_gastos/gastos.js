//cada valor em cada categoria necessitaria de uma variável. Para não precisar criar várias. Será utilizado um array (vetor)
const matrizGastos =[
    ["Alimentação", 0], // cada elemento do vetor matrizGastos é outro vetor com dois parâmetros ("categoria", valor)
    ["Transporte", 0],
    ["Lazer", 0],
    ["Outros", 0],
    ["Total", 0] // é necessário criar um para cada, pois todos serão manipulados
]

//será comum nesse código pegar elementos por seu id. Para evitar de ficar repetindo vários código, uma função anônima foi criada

//funções utilitárias
const obterElemento = (id) => document.getElementById(id); // o que for utilizado como parâmetro para essa função (id, no caso) será utilizado como parâmetro para a arrow function também. Será possível reaproveitar esse código sempre que precisar pegar um elemento pelo id.
const valorNegativo = (valor) => valor < 0;// função para descobrir se determinado valor é negativo (validação). Se for verdade "valor<0", então significa que s trata de um valor negativo
const somaValor = (total, valor) => total + valor;// função para somar os valores
const limparCampos = () => obterElemento('valor').value=''; // função que limpará o campo com id='valor' para o usuário adicionar um novo valor sem precisar apagar o que foi colocado anteriormente
const formataMoeda = (valor) => valor.toFixed(2).replace('.', ',') /* função para estabelecer o padrão com duas casas decimais (toFixed(2)) separado por vírgula ao invés de ponto 
(replace('.', ','))*/

//obter valores do formulário
const obterValorInformado = () => parseFloat(obterElemento('valor').value); // 'valor' é o id do campo no qual o usuário colocará o valor gasto. Ela obtém o valor, enquanto que a anterior obtém o elemento. Porém é necessário especificar que o que será pego é o valor e transformar esse valor em número com o paeseFloat().
const obterCategoriaInformada = () => obterElemento('categoria').value // para obter a categoria, é preciso do valor escolhido pelo usuário

// obter categoria da matriz
const obterCategoria = (matriz, nomeCategoria) => matriz.find((item) => item[0] === nomeCategoria) // busca a categoria dentro da matrizGastos na primeira posição. O item na primeira posição (item[0]) vai ser o valor "nomeCategoria"

// atualizar valores da matriz
const atualizarValorCategoria = (categoria, valor) => categoria[1] = somaValor(categoria[1], valor)

const atualizarInterface = () => {

    matrizGastos.forEach(([nome, valor]) =>{
        const elemento = obterElemento(nome);
        elemento.textContent = `${nome}: R$ ${formataMoeda(valor)}`

    })        
}

function adicionar(){
    
       // 1. pegar o valor informado
        const valorInformado = obterValorInformado();

        //2. pegar categoria informada
        const categoriaInformada = obterCategoriaInformada();

       // 3. impedir números negativos
        if(valorNegativo(valorInformado)){
            alert("Valor inválido. O valor não pode ser negativo.");
            return; // o "return" implica que nenhum passo é dado na função se o número for negativo
        }

       /* 4. de acordo com a categoria, atualizar o valor
            4.1 criar variáveis para controlar ou armazenar os valores de cada uma das categorias*/
       const categoria = obterCategoria(matrizGastos, categoriaInformada);
       const total = obterCategoria(matrizGastos, "Total");

       atualizarValorCategoria(categoria, valorInformado);
       atualizarValorCategoria(total, valorInformado);
       
        //5. atualizar interface
        atualizarInterface();
        
       // 6. limpar campos
       limparCampos();  
    
}

/*const gasto = document.getElementById('valor').value
    const tipo = document.getElementById('tgasto').value

    if(gasto<0){
        alert('Digite um valor válido')
    } else{

        if(tipo == 'Alimentação'){
            aliment.innerHTML = gasto
        } else if(tipo == 'Transporte'){
            transp.innerHTML = gasto
        } else if(tipo == 'Lazer'){
            lazer.innerHTML = gasto
        } else if(tipo == 'Outros'){
            outros.innerHTML = gasto
        }
    }*/

    

    /*<!--const gasto = document.getElementById('valor').value
    const tipo = document.getElementById('tgasto')

   switch (tipo){
    case Alimentação:
        aliment.innerHTML = `${gasto}`
   }*/