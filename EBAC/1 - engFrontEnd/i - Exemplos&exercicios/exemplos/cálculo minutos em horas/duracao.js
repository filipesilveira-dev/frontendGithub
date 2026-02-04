const duracaoFilme = function(minutos){
    const horas = Math.floor(minutos/60); // math.floor vai pegar o cálculo feito e arredondar para baixo
    const min = minutos%60; // pega o resto da divisão por 60, ou seja, os minutos

    console.log(`A duração do filme é de ${horas} hora(s) e ${min} minuto(s).`)
}

duracaoFilme(125)

let total=5
total += 10; // relembrando: o "+=" pega o valor da vriável (5) e soma com o que está depois (10)

console.log(total)