
//funções criadas para realizar a ação (cálculo) especificado
const soma = (n1, n2) => n1 + n2;      
const subracao = (n1, n2) => n1 - n2;
const multiplicacao = (n1, n2) => n1 * n2;
const divisao = (n1, n2) => n2>0? n1 / n2: NaN; // condicional utilizada: se "n2 > 0" for verdade, então executar "n1/n2". Se for falso, Not a Number, pois não é possível dividir por zero.

/*as funções acima poderiam ser escritas da maneira tradicional tomando mais linhas

As funções anônimas simplificam o código

function soma (n1, n2){
    return n1 + n2
}
var add = soma(21,22)

console.log(add)
*/ 

const calculo = (operacao, n1, n2) => operacao(n1, n2);

const resultado = calculo(multiplicacao, 21, 21); //aqui estou chamando, ou associando, "soma" à "operação", "21" a "n1" e "21" a n2

console.log(resultado) // aqui estou chamando a variável "resultado" a qual possui o valor de uma função "calculo". Como na função foram dados os parâmetros soma, 21 e 21, a variável soma será chamada