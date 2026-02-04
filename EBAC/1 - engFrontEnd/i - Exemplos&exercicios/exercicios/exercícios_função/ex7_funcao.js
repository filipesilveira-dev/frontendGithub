//Crie uma função chamada executar que aceita uma função como argumento e a executa.

const executar = function (funcao){
    funcao(); // executa a função dada como argumento, no caso a arrow function
} 

//o trecho de código acima indica que a função anônima, ao receber outra função, representada por "funcao", deverá executá-la. No trecho abaixo, é dado como argumento a arrow function. Logo significa que a arrow function deverá ser executada, retornando seu "return" que é a mensagem.

executar(()=> console.log("Função executada como argumento"))// a arrow function argumento de executar possui apenas uma instrução: mostrar a mensagem "Função executada como argumento"

//o parâmetro de "executar" é ()=>{console.log("Função executada como argumento")}. "console.log("Função executada como argumento")" é o return da função anônima. A função anônima retorna para executar e então o retorno de "executar" é mostrar, via console.log, a mensagem.