const soma = (n1, n2)=> n1 + n2;
const subtracao = (n1, n2)=> n1 - n2;
const multiplicacao = (n1, n2)=> n1 * n2
const divisao = (n1, n2)=> n2>0? n1/n2: NaN;

const resultado = (operacao, n1, n2)=>operacao(n1, n2);

console.log(resultado(divisao, 10, 0))