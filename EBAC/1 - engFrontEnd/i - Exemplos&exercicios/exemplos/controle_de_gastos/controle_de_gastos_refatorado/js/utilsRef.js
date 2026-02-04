//funções utilitárias
const obterElemento = (id) => document.getElementById(id); // o que for utilizado como parâmetro para essa função (id, no caso) será utilizado como parâmetro para a arrow function também. Será possível reaproveitar esse código sempre que precisar pegar um elemento pelo id.

//funções puras
export const valorNegativo = (valor) => valor < 0;// função para descobrir se determinado valor é negativo (validação). Se for verdade "valor<0", então significa que s trata de um valor negativo

export const formataMoeda = (valor) => valor.toFixed(2).replace('.', ',') /* função para estabelecer o padrão com duas casas decimais (toFixed(2)) separado por vírgula ao invés de ponto 
(replace('.', ','))*/

export const atualizarInterface = (gastosPorCategoria) => {

    const categorias = gastosPorCategoria.categorias;
    categorias.forEach(({nome, valor}) =>{
        const elemento = obterElemento(nome);
        elemento.textContent = `${nome}: R$ ${formataMoeda(valor)}`
    })   
    
    const elementoTotal = obterElemento("Total");
    elementoTotal.textContent = `Total: R$ ${formataMoeda(gastosPorCategoria.obterTotal())}`
}