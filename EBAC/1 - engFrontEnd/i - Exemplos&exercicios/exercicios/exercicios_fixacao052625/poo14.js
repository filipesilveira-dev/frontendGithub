class animal{
    constructor(nome){
        this.nome = nome;
    }

    falar(){
        return console.log(`${this.nome} faz som`)        
    }    
}

class cachorro extends animal{  //herança
    falar(){
        return console.log(`${this.nome} late`)
    }
}

class gato extends animal{
    falar(){
        return console.log(`${this.nome} mia`)
    }
}

function emitirSom(animal){
    animal.falar();
}

emitirSom(new cachorro ("Táuba"));  //sem declarar variável dog
emitirSom(new gato ("Paixão"));     //sem declarar variável cat