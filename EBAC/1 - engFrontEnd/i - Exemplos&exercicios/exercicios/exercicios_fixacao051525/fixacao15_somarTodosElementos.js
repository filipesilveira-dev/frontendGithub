let valores = [1, 2, 3, 4];
let soma = valores.reduce((acum, val) => acum + val, 0);
/*
function(acum, val){
    return acum + val
}

o 0(zero) ao final do reduce indica o valor inicial de acum. Se ele não for passado, o reduce vai utilizar o primeiro item do array como valor inicial, mas pode gerar erro se o array estiver vazio.

Outra forma de escrever o código:

function somar(acum, val) {
  return acum + val;
}

let valores = [1, 2, 3, 4];
let soma = valores.reduce(somar, 0);

console.log("Soma:", soma);

*/
console.log("Soma:", soma);