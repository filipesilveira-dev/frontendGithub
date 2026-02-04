//função anônima (sem nome) declarada e atribuída a uma variável (divisao)
const divisao = function (dividendo, divisor){
    if(divisor <=0){
        return "Não é possível dividir";
    }

    if(divisor == 1){
        return dividendo;
    }

    return dividendo/divisor
}

console.log(divisao(42,7)) //no caso, a variável é chamada juntamente com os parâmetros da função anônima