class produto{
    constructor(nome,preco,estoque){ //como está estabelecido, o estoque precisa ser dado
        this.nome = nome;
        this.preco = preco;
        this.estoque = estoque;
    }  
    
    detalhesProduto(){
        return console.log(`Nome do produto: ${this.nome} || Preço: R$ ${this.preco.toFixed(2).replace('.',',')}`)
    }

    exibirEstoque(){
        return console.log(`${this.estoque} unidades em estoque.`)
    }

    
    vender(qtd) {
        if (qtd > this.estoque) {
            throw new Error("Estoque insuficiente")
        }
        this.estoque -= qtd;
        console.log(`${qtd} unidades vendidas. Estoque restante: ${this.estoque}`);       
    }
    
}

const produto1 = new produto("Camiseta", 29.9, 5)   //estoque dado
try{
    produto1.vender(6);
} catch (e){
    console.error(e.message)
}
