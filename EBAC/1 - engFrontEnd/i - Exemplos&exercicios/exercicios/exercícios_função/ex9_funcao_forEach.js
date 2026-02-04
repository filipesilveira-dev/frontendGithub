//Crie um array de números e use `forEach` com uma função anônima para exibir cada número multiplicado por 2.

const num = [1, 2, 3, 4]

num.forEach(function(numero){ 
    console.log(numero*2)
})

/*
o "forEach" vai executar a função dentro dele para cada elemento da array "num". Ou seja:

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

//utilizando arrow function ficaria: num.forEach((numero) => console.log(numero*2))