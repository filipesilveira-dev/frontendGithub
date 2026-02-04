class cliente{
    #saldo;
    constructor(nome, saldo){
        this.nome = nome;
        this.#saldo = saldo;
    }

    depositarValor(valor){
        if(valor<=0){
            return console.log("Insira um valor para depositar")
        } else{
            this.#saldo += valor;
            //console.log(`Seu saldo é de R$ ${this.#saldo.toFixed(2).replace('.',',')}.`) 
        }
    }

    sacarValor(valor){
        if(valor<=this.#saldo){
            this.#saldo -= valor;
        } else {
            return console.log("Saldo insuficiente")
        }
    }

    verSaldo(){
        return console.log(`O saldo é de R$ ${this.#saldo.toFixed(2).replace ('.',',')} reais`)
    }
}

const cliente1 = new cliente("Filipe", 300)
cliente1.depositarValor(200);
cliente1.sacarValor(400)
cliente1.verSaldo();