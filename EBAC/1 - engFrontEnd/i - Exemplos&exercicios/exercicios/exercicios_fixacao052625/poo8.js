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

    /*
    vender(qtd) {
        if (qtd <= this.estoque) {
        this.estoque -= qtd;
        console.log(`${qtd} unidades vendidas. Estoque restante: ${this.estoque}`);
        } else {
        console.log("Estoque insuficiente.");
        }
    }
    */
    vender(qtd){    //"qtd" precisa ser informado quanto chamar o método
        if(qtd > this.estoque || this.estoque === 0){
            console.log ("Quantidade insuficiente em estoque.")
        } else{
            return console.log(`${qtd} unidade(s) vendida(s). Ainda resta(m) ${this.estoque - qtd} em estoque.`); 
        }
    }
}

const produto1 = new produto("Camiseta", 29.9, 5)   //estoque dado
produto1.detalhesProduto();
produto1.exibirEstoque();
produto1.vender(3); //quantidade vendida dada
