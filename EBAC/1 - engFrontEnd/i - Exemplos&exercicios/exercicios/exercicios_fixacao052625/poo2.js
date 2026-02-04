class pessoa{
    constructor(nome,idade){
        this.nome = nome;
        this.idade = idade;
    }

    falar(){
        return console.log (`Meu nome é ${this.nome}`)
    }
}

const pessoa1 = new pessoa("Filipe", 32)
pessoa1.falar();