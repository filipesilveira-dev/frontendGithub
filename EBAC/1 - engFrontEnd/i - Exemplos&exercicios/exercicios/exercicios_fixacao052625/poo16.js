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

const animais = [
    new gato ("Tobias"),    //extensão de "animal"
    new cachorro ("Táuba"), //extensão de "animal"
    new gato ("Miau"),      //extensão de "animal"
];

animais.forEach((animal)=>animal.falar())   //vai ao objeto "animais" e percorre cada "animal"