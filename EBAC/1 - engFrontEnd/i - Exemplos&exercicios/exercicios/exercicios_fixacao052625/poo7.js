class produto{
    constructor(nome,preco){
        this.nome = nome;
        this.preco = preco;
    }  
    
    detalhesProduto(){
        return console.log(`Nome do produto: ${this.nome} || Preço: R$ ${this.preco.toFixed(2).replace('.',',')}`)
    }
}

const produto1 = new produto("Camiseta", 29.9)
produto1.detalhesProduto();