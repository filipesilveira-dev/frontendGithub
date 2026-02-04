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


const dog = new cachorro("Táuba")
dog.falar();

const cat = new  gato("Paixão")
cat.falar();

