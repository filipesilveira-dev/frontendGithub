class pessoa{
    constructor(nome,idade){
        this.nome = nome;
        this.idade = idade;
    }
}

const pessoa1 = new pessoa("Filipe", 32)
const pessoa2 = new pessoa("Mariana", 27)

console.log(`Pessoa1 = Nome ${pessoa1.nome}, Idade= ${pessoa1.idade}`)
console.log(`Pessoa2 = Nome ${pessoa2.nome}, Idade= ${pessoa2.idade}`)