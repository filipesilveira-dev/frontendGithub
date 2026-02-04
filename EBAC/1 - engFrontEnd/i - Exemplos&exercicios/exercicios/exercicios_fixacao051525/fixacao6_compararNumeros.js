const n1=20; n2=20

function comparacao(){
    if(n1==n2){
        return 'São iguais'
    } else if (n1>n2){
        return `${n1} é maior que ${n2}`        
    } else if(n1<n2){
        return `${n1} é menor que ${n2}`
    }
}

console.log(comparacao())