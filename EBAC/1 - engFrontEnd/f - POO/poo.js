//objeto literal: geralmente utilizado em casos em que a estrutura não será reutilizada
const pessoa={nome:"Carlos", idade: 20}

//classes: quando a estrutura será reutilizada
class veiculo{

    //método construtor
    constructor(marca,modelo,ano){ //parâmetros para o construtor
        this.marca = marca;//"this" informa que "marca" está no escopo de "veiculo"
        this.modelo = modelo;//"this" informa que "modelo" está no escopo de "veiculo"
        this.ano = ano;//"this" informa que "ano" está no escopo de "veiculo"

        //atributo privado para indicar se o veículo está ligado
        this._ligado=false;
        /*
        o underline indica que é privado, ou seja, só será acessado pela própria classe. Não será preciso, ao criar um veículo, indicar se ele está ligado ou não, pois ele não está declarado no constructor
        */
    }

    //Métodos: declarados fora do construtor
    //atribui um comportamento alterando um atributo interno à classe veículo, no caso, o "this._ligado"
    ligar(){ 
        this._ligado=true;
        console.log("O veículo foi ligado")
    }

    desligar(){
        this._ligado=false;
        console.log("O veículo foi desligado")
    }

    //método getter para obter valor do atributo privado (this._ligado())
    get ligado(){
        return this._ligado//por meio desse método será retornado o estado interno do objeto veiculo
    }

}

//herança: nessa declaração está dizendo que a classe "moto" criada vai herdar todas as características de veiculo (ela vai ter uma marca, um modelo e um ano). O "extends" referencia de qual objeto ela herdará os atributos.
class moto extends veiculo{ 
    constructor(marca,modelo,ano){  //refere os atributos de "veiculos" que serão herdados
        super(marca,modelo,ano)     //faz a referência de "moto", que receberá a própria marca, modelo e ano, para o construtor do "veiculo"
    }
}

class carro extends veiculo{
    constructor(marca,modelo,ano,numeroPortas){ //acrescenta um novo atributo em "carros"
        super(marca,modelo,ano)
        this.numeroPortas = numeroPortas;       //novo atributo criado apenas em "carros"
    }

    abrirPortas(){
        console.log("As portas do carro foram abertas");    //novo método acrescentado apenas em "carros"
    }
}

const motoNova = new moto("Yamaha","MT-07",2025)
console.log(motoNova)//prototype: veiculo (herdou do objeto "veiculo"). Herda também os comportamentos do veículo, como ligar() e desligar()
motoNova.ligar();
console.log("A moto está ligada?",motoNova.ligado)//perceba que motoNova está ligada, apesar de "veiculo" está desligado

const carroNovo = new carro("Fiat","Idea", 2009, 4)//já com o novo atributo criado (não altera nem "moto" nem "veiculo")
console.log(carroNovo);
carroNovo.ligar();
carroNovo.desligar();
carroNovo.abrirPortas();
console.log("O carro está ligado?", carroNovo.ligado)

const veiculoNovo = new veiculo("Honda", "Civic", 2025)//todo objeto criado a partir da classe veículo vai ter obrigatoriamente (marca,modelo,ano). O "new" cria um novo objeto da classe "veiculo" na variável "veiculoNovo"

console.log(veiculoNovo);// prototype: object
veiculoNovo.ligar();//acessa o método "ligar()" no objeto veiculoNovo
veiculoNovo.desligar();
console.log("O carro está ligado?", veiculoNovo.ligado);//utiliza o ligado como se fosse a propriedade, sem usar os parênteses. Vai retornar true (se estiver ligado) ou false (se estiver desligado)