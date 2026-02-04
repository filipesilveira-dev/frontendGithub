// estabelece que, ao sair do elemento com id="cep", será estabelecido o valor de "cepInformado" como sendo o valor de "element" que é igual ao alvo de evento "blur" que o elemento HTML com id="cep". Além disso, o fatch também é executado, solicitando o arquivo jason e preenchendo automaticamente os demias campos com as informações recebidas. Resumo: digitou o cep e clicou ou selecionou qualquer outra coisa na tela, as informações adicionais são preenchidas automaticamente
document.getElementById("cep").addEventListener("blur", (e)=>{
    const element = e.target;
    const cepInformado = element.value;

    //se o cep tiver menos/mais de 8 caracteres, será retornado um alerta
    if(!(cepInformado.length === 8)){
       	return alert ("Digite um CEP válido");
    }
    
    fetch(`https://viacep.com.br/ws/${cepInformado}/json/`)
        .then (response => response.json())
        .then (data => {

            //se não tiver erro, então pegue dos dados de json os respectivos valores para os respectivos campo <tags> HTML
            if(!data.erro){ 
                	document.getElementById('logradouro').value = data.logradouro;  //o referente à "rua" aparece como "logradouro" no arquivo json
                	document.getElementById('bairro').value = data.bairro;
            		document.getElementById('cidade').value = data.localidade;
            		document.getElementById('estado').value = data.uf;
                    document.getElementById('titulo').textContent = data.regiao;
        	}else{
            	alert("CEP não encontrado.")            		
            }                   	    
        })

        //qualquer erro ao longo do processo, seja na solicitação do arquivo, seja no arquivo e seu conteúdo, retorne "error"
        .catch(error => console.error("Erro ao buscar CEP: ", error));
})

