let opcao = 2;
let n1 = 10;
let n2 = 5;

function soma(){     
    return n1+n2
}

function subtracao(){
    return n1-n2
    
}

function multiplicacao(){    
    return n1*n2
}


function menu(){

    console.log('Escolha opção')
    console.log(`Opção escolhida: ${opcao}`)
    switch(opcao){
        case 1:
        return soma()
        break;

        case 2:
        return subtracao()
        break;

        case 3:
        return multiplicacao()
        break;

        default:
        console.log('Opção inválida')
    }    


 }


 console.log(menu())