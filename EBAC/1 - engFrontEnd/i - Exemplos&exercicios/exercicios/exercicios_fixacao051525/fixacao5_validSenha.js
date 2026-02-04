const senha = 2580
const n=2580

function validacao(){
    if(n!==senha){
        return 'Tente novamente'
    } else {
        return 'Validação realizada com sucesso!'
    }
}

console.log(validacao())