//Crie uma função criarSaudacao que recebe um parâmetro saudacao e retorna uma função que aceita um nome e retorna a saudação completa.

//função que retorna função (closures)
function criarSaudacao(saudacao){ //função externa (não executa nenhuma ação diretamente, apenas retorna outra função)
    return function(nome){
        return `${saudacao}, ${nome}!` //retorna a string concatenando a saudação e o nome
    }
}

const bomDia = criarSaudacao("Bom dia")// função anônima. poderia ser "function criarSaudação{return "Bom dia"}""
/*
 criarSaudacao irá retornar a função interna. Logo quando em seguida é solicitada a exibição da função bomDia, o que está retornando é:

    function(nome){
        return `Bom dia, ${nome}`
    }
*/
console.log(bomDia("Filipe"))// então o "Filipe" aparece como parâmetro da função interna completando a saudação "Bom dia, Filipe".
