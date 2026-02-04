class animal{
    constructor(nome){
        this.nome = nome;
    }

    falar(){
        return console.log(`${this.nome} faz som`)        
    }  
    
    informacao(){
        return console.log (`Animal: ${this.nome}`)
    }
}

class cachorro extends animal{  //herança
    falar(){
        return `${this.nome} late`
    }

    informacao(){
        return `Cachorro: ${this.nome}`;
    }
}

class gato extends animal{
    falar(){
        return console.log(`${this.nome} mia`)
    }

    informacao(){
        return `Gato: ${this.nome}`;
    }
}

function emitirSom(animal){
    animal.falar();
}

console.log(new gato("Tico").informacao());      // Gato: Tico
console.log(new cachorro("Bolt").informacao());  // Cachorro: Bolt
