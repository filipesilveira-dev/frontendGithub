function realizarOperacao (n1,n2,operacao){
    return operacao(n1,n2)
}

function soma(n1,n2){
    return n1+n2;
}

//OU

let multiplicacao = (n1,n2)=>n1*n2
let subtracao = (n1,n2)=>n1-n2
let divisao = (n1,n2)=> n2>0? n1/n2 : NaN//operedor ternário (condição ? expVerdade : expFalsa)

console.log(realizarOperacao(10,20,divisao))