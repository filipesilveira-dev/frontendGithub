// função 'divisao' trabalha com dois parâmetros: 'dividendo' e 'divisor'
function divisao (dividendo, divisor){

    //validação com 'if' para não ser possível dividir por zero
    if(divisor <= 0){
        return "Não é possível dividir por esse número" //especifica o que será retornado caso a condicional seja verdadeira
    }

    //validação para retornar o prórpio dividendo numa divisão por '1'
    if(divisor == 1){
        return dividendo //especifica que será retornado o próprio dividendo caso o usuário escolha como parâmetro para o 'divisor' o número '1'
    }

    return dividendo/divisor //retorno que será trazido caso as duas condicionais sejam falsas. Se alguma delas for verdadeira, a função se encerra no 'return' dela
}

console.log(divisao(42,7)) //comando chamando a função divisao e seus parâmetros no Node.js (F8)