let idades =[2,3,5,6,10,12,15,18,19,20,21,22]

let maiores=idades.filter(function(idade){
    return idade>=18
})

console.log(maiores)