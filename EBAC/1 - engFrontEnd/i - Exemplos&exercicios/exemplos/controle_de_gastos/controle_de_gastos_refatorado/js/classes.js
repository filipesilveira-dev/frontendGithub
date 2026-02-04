// permite exportar essa classe para outro código
export class Categoria{
    //encapsulamento com campos privados
    #nome;
    #valor;
    constructor(nome){
        this.#nome = nome;
        this.#valor = 0;
    }
    //uso de Gettes
    get valor(){
        return this.#valor;
    }

    get nome(){
        return this.#nome;
    }
    //manipulação do estado
    adicionarValor(valor){
        //garante que sempre será um valor numérico, fazendo a transformação para float
        this.#valor += parseFloat(valor);
    }
}

export class ListaGastosPorCategoria{
    #categorias;
    //Rest Operator: permite receber a quantidade de critérios sem precisar especificar quantos
    constructor(...categorias){
        this.#categorias = categorias;
    }

    get categorias(){
        return this.#categorias;
    }

    obterCategoriaPorNome(nome){
        //Programação Funcional: função criada para substiruir a "const obterCategoria", a qual percorria a matriz em busca da categoria por meio da posição. Nessa nova função (método), basta receber o nome da categoria.
        // find() faz o filtro do valor que deseja obter de determinada lista. Cada categoria de lista "categorias" passará pela arrow function de find(). Será selecionada (retornada) a categoria com o mesmo nome (obtido por meio do getter "nome") da categoria selecionada.
        return this.#categorias.find((categoria)=> categoria.nome == nome);
    }

    obterTotal(){
        //Redução de dados com reduce
        return this.#categorias.reduce((total, categoria) => total + categoria.valor, 0);
    }
}