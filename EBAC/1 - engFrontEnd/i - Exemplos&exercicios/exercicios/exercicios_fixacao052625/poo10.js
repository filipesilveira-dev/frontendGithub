class cliente{
    #saldo;
    constructor(nome, saldo){
        this.nome = nome;
        this.#saldo = saldo;
    }

    verSaldo(){
        return console.log(`O saldo é de R$ ${this.#saldo.toFixed(2).replace ('.',',')} reais`)
    }
}

const cliente1 = new cliente("Filipe", 300)
cliente1.verSaldo();