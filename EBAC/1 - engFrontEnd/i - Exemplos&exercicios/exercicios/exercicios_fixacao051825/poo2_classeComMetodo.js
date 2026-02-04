class pessoa{
    constructor(nome,idade){
        this.nome = nome;
        this.idade = idade;        
    }
    apresentar(){
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`)
    }    
}

const pessoa1 = new pessoa("Filipe", 32)
pessoa1.apresentar();//esse comando já chama o método estabelecido em "pessoa"

const pessoa2 = new pessoa("Mariana", 27)
pessoa2.apresentar();