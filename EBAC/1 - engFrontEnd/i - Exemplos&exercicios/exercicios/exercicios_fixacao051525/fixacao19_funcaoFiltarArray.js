let matriz=[1,2,3,4,5,6,7,8,9,10]

let numPar = matriz.filter((par)=>par%2===0)

console.log(numPar)

//OU

/*
function numPar(matriz){
    return matriz.filter((par)=>par%2===0)
}

console.log(numPar(matriz))
*/
