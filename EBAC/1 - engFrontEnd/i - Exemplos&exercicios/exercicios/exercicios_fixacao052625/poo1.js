class pessoa{
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
}

const pessoa1 = new pessoa("Filipe", 32)

console.log(`Meu nome é ${pessoa1.nome} e tenho ${pessoa1.idade} anos`)