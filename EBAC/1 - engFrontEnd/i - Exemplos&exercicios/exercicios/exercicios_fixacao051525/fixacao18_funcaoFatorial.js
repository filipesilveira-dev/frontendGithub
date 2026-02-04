function fatorial(num){
    let fat =1 //estabelece uma variável para retornar o resultado do fatorial
    for(let c = num; c > 1; c--){//o contador começa no número e decresce até 2 (>1)
       fat *= c//fat então será o contador vezes o próprio valor de fat. O contador começa com o valor do número dado como argumento e vai decrescendo. Ex.: (5*1)*(4*1)*(3*1)*(2*1) = 120        
    }

    return fat//retorna o valor de fat APÓS o contador se encerrar
}

console.log(fatorial(5))

//OU

/*
function fatorial(num) {
  let fat = 1;
  for (let c = 1; c <= n; c++) {
    fat *= i;
  }
  return fat;
}
console.log(fatorial(5));
*/