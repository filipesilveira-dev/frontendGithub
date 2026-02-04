const botaoTema = document.getElementById("botaoTema");

botaoTema.addEventListener("click", ()=> {
    const temaAtual = localStorage.getItem("tema") || "light"; // padrão light
    const novoTema = temaAtual === "dark" ? "light" : "dark";

    // ✅ Lógica clara ao invés de toggle
    if(novoTema === "dark") {
        document.body.classList.add("dark");
    } else {
        document.body.classList.remove("dark");
    }

    localStorage.setItem("tema", novoTema);
    botaoTema.textContent = novoTema === "dark" ? "☀" : "🌙";
});

document.addEventListener('DOMContentLoaded', ()=> {
    const temaSalvo = localStorage.getItem("tema") || "light"; // padrão light
    
    if(temaSalvo === "dark"){
        document.body.classList.add("dark");
        botaoTema.textContent = "☀";
    } else {
        document.body.classList.remove("dark"); // garante que remove
        botaoTema.textContent = "🌙";
    }
/*
    //verificar se o usuário já tem um tema pré-definido (mesmo sem nada salvo ainda aqui no código, o usuário pode ter algum tema já salvo). Verifica se há algo salvo no localStorage.
    const temaAtual = localStorage.getItem("tema");

    
    //verificar qual o tema e inverter
    const novoTema = temaAtual === "dark" ? "light" : "dark";

    //adicionar a classe dark no elemento body. Acessa primeiro o document, depois o body contido nele e, em seguida, na lista de classes presentes no body, adiciona "novoTema" pelo método toggle, que, caso essa classe já esteja presente na lista, ela será removida e se não estiver, será adicionada.
    document.body.classList.toggle(novoTema);

    //salvar as preferências no localStorage
    localStorage.setItem("tema", novoTema);

    //atualiza o texto do botão
    botaoTema.textContent = novoTema === "dark" ? "☀" : "🌙"; // if ternário

})


document.addEventListener('DOMContentLoaded', ()=> {
    //verificar se tem tema salvo
    const temaSalvo = localStorage.getItem("tema");

    //se for dark, adiciona a classe e altera o botão
    if(temaSalvo === "dark"){
        document.body.classList.add("dark");
        botaoTema.textContent = "☀";
    } else {
        //caso contrário é light e o botão deve ser para mudar para dark
        botaoTema.textContent = "🌙";
    }
*/
})