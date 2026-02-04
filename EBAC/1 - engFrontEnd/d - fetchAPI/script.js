//1. Ouvir o evento de quando o usuário sair do campo CEP ("blur" é o evento de sair de determinado campo)
document.getElementById("cep").addEventListener("blur", (evento)=>{ 
    const elemento = evento.target;
    const cepInformado = elemento.value;

    //2. Validar o CEP
    if(!(cepInformado.length === 8)){
        return;
    }

    //3. Fazer busca no ViaCEP
    fetch(`https://viacep.com.br/ws/${cepInformado}/json/`) //é possível verificar a requisição na guia "Network" do DevTools na página web
        .then(response => response.json())
        .then(data => {
            //3.2 Processamento da página
            if(!data.erro){ //se não tiver erro, então..
                document.getElementById('logradouro').value = data.logradouro;
                document.getElementById('bairro').value = data.bairro;
                document.getElementById('cidade').value = data.localidade;
                document.getElementById('estado').value = data.uf;
            }else{
                alert("CEP não encontrado.")
            }
        })
        .catch(error => console.error("Erro ao buscar CEP: ", error));       
        
}) 
