class produto{
    constructor(nome,preco,quantidade){
        this.nome = nome;
        this._preco = preco;
        this._quantidade = quantidade;
    }

    get preco(){
        return this._preco
    }
}