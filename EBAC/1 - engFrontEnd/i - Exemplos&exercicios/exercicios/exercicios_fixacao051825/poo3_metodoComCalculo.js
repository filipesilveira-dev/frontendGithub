class produto{
    constructor(nome,preco,quantidade){
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }
    calcularTotal(){
    return this.preco*this.quantidade;    
    }
} 

const produto1 = new produto("Camisa", 50, 3)
console.log(`Total: R$ ${produto1.calcularTotal()}`);