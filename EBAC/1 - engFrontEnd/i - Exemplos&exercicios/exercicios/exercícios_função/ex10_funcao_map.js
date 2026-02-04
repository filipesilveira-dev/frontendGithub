//Use o método `map` com uma arrow function para criar um novo array onde cada número do array original é elevado ao quadrado.

const numeros = [1, 2, 3, 4, 5];
const quadrados = numeros.map(function(numero){
    return numero*numero
}); //diferente do "forEach" o "map" cria e retorna um array

/*
o "map" vai executar a função dentro dele para cada elemento da array "numeros". Ou seja:

function(1){
console.log(1*2)
}

function(2){
console.log(2*2)
}

function(3){
console.log(3*2)
}

function(4){
console.log(4*2)
}
*/

console.log(quadrados); // [1, 4, 9, 16, 25]

/*
utilizando arrow function ficaria:

const numeros = [1, 2, 3, 4, 5];
const quadrados = numeros.map((numero)=>numero*numero)

console.log(quadrados)
 
 */