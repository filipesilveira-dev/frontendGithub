class contaBancaria{
    constructor(numeroConta, saldo){
        this.numeroConta = numeroConta;
        this.saldo = saldo;
    }

    exibirSaldo(){
        return console.log(`O saldo de sua conta de número ${this.numeroConta} é R$ ${this.saldo.toFixed(2).replace('.',',')}.`)
    }
}

const conta1 = new contaBancaria(1234,450)
conta1.exibirSaldo();