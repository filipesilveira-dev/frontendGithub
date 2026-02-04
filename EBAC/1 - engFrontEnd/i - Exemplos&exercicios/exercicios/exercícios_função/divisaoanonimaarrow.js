//nesse forma de função anônima a palavra reservada 'function' também é suprimida, sendo colocado um "=>"
const divisao = (dividendo, divisor) =>{ //por conter múltiplas linhas, é necessário o uso de chaves e de um 'return' explícito

    if(divisor <=0){
        return "Não é possível dividir.";
    }

    if(divisor == 1){
        return dividendo;
    }

    return dividendo/divisor; //return explícito
}

console.log(divisao(42,7))

///////////////////////////////////////////////////////////////////////////////

// método tradicional
const nomes = ['Pedro', 'Wally', 'Bino'];

const wally = nomes.find(function(nome){
    return nome === "Wally"
})

console.log(wally)

//ou com a arow function

const names = ['Pedro', 'Wally', 'Bino']; //matriz com os nomes

const bino = names.find((nome)=>nome ==="Bino"); // "find" em "names (vetor)" um nome idêntico à Bino

console.log(bino)