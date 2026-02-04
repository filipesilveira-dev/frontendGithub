//definir classe contaBancaria

class contaBancaria{    //responsável pelas operações financeiras
    #saldo; //impede o acesso, ou sua modificação, fora da classe
    constructor(){
        this.#saldo = 0;    //toda e qual conta criada a partir de "contaBancaria" começará com #saldo = 0
    }

    //métodos
    depositar(valor){   //adiciona o valor digitado ao saldo
        this.#saldo += valor;
    }

    sacar(valor){    //subtrai o valor digitado de #saldo
        this.#saldo -= valor;
    }

    temSaldoParaSacar(valor){   //validação para saber se tem saldo para determinado valor de saque
        if(valor <= this.#saldo){   //se o valor do saque for igual ou menor que o saldo, retorna verdadeiro (true). Caso contrário, retorna falso (false)
            return true;
        } else {
            return false;
        }
    }

    get saldo(){    //método getter para acessar o saldo, por se tratar de um atributo privado, e mostrar na tela
        return this.#saldo; //permite ler o valor do saldo de forma controlada, sem permitir modificá-lo diretamente
    }
}

//em uma situação real, seria necessário um sistema de login. Porém, para simplificar, foi utilizado o atributo "this.conta"
class caixaEletronico{  //responsável por capturar as informações e mostrar o resultado. Representa a interface interagindo com o usuário
    constructor(conta){ //conta será uma instância de "contaBancaria" (herança)
        this.conta = conta; //guarda essa conta como propriedade para poder realizar operações com nela
    }

    //métodos
    depositar(){

        //pegar o valor do depósito
        const valorDeposito = parseFloat(document.getElementById("valorDeposito").value)    //pega no elemento de id="valorDeposito" o seu valor (.value) que vem em forma de string e o transforma em número (parseFloat)

       

        //fazer o depósito na conta
        this.conta.depositar(valorDeposito);    //o valor obtido é enviado como argumento para o método depositar() de this.conta 
        
        //exibr saldo atualizado
        this.mostrarSaldo(this.conta.saldo);
    }

    sacar(){

        //pega valor do saque
        const valorSaque = parseFloat(document.getElementById("valorSaque").value)

        //fazer saque na conta
        if(this.conta.temSaldoParaSacar(valorSaque)){
            this.conta.sacar(valorSaque);
            this.mostrarSaldo(this.conta.saldo);
        } else {
            //mostrar "saldo insuficiente"            
            this.mostrarSaldo("Saldo insuficiente!")
        }
        //mostrar saldo
    }

    //método para exibir saldo atualizado
    mostrarSaldo(saldo){
        if(typeof saldo === 'number'){  //aqui foi feita uma validação com base no saldo. Se for retornado um número, siginifica que o saldo era suficiente, pois se não fosse, retoraria uma mensagem (string). Logo, se oretorno da validação de saldo for qualquer coisa diferente de 'number', significa que não há saldo suficiente. Aqui em mostarSaldo será retornado o saldo no elemento de id="saldo" caso saldo seja um número. Caso contrário será mostrada apaenas a mensagem retornada em saldo     
        document.getElementById("saldo").textContent = `Saldo: R$ ${saldo}`;
        } else {
            document.getElementById("saldo").textContent = saldo;   //retorna a mensagem em saldo caso não haja saldo
            /*
            em resumo:
                -se houver saldo: saldo = saldo - saque (saldo -= saque)
                -se não houver: saldo = 'Saldo insuficiente!'

            */
        }

        document.getElementById("valorDeposito").value = '';
        document.getElementById("valorSaque").value = '';
                
    }
}

//criar instâncias
const conta = new contaBancaria();
const CaixaEletronico = new caixaEletronico(conta); //importante ressaltar nessa linha que a primeira maiúsculas faz total diferença, tratando-se de duas instâncias totalmente diferentes. A "CaixaEletronico" que está sendo referenciada no "onclick" do HTML