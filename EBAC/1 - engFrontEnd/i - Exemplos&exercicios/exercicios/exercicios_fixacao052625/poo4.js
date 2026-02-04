class carro{
    constructor(marca,modelo,ano){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    descrever(){
        return console.log(`Carro da marca ${this.marca}, modelo ${this.modelo} e do ano de ${this.ano}.`)
    }
}

const carro1 = new carro("Honda", "Civic","2025");
carro1.descrever();