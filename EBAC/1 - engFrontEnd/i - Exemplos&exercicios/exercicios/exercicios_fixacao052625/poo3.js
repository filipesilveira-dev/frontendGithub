class livro{
    constructor(titulo, autor){
        this.titulo = titulo;
        this.autor = autor;
    }
    exibirDetalhes(){
        return console.log(`Título: ${this.titulo} || Autor: ${this.autor}.`)
    }
}

const livro1 = new livro ("O nevoeiro", "Stephen King");
livro1.exibirDetalhes();