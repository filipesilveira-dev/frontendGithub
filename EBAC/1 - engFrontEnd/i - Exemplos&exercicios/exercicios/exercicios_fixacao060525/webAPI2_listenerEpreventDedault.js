/*
//1. exibir um alerta ao clicar em um botão
const btn = document.getElementById("btn")
btn.addEventListener("click", ()=>{
    return alert ("Você apertou o botão!")
})

//Ou

document.getElementById("btn1").addEventListener("click", ()=>{
    return alert ("Você apertou o outro botão!")
})

//2. mudar a cor de uma <div> ao passar o mouse sobre
document.querySelector(".div").addEventListener("mouseenter", ()=>{
    const mouseDiv = document.querySelector(".div")
    mouseDiv.style.color ="green";
})

document.querySelector(".div").addEventListener("mouseout", ()=>{
    const mouseDiv = document.querySelector(".div")
    mouseDiv.style.color ="black";
})

//Ou

const mouseDiv1 = document.querySelector(".div1");
mouseDiv1.addEventListener("mouseover", ()=>{
    mouseDiv1.style.backgroundColor = "green";
})


//3. impedir o envio de um formulário e mostrar uma mensagem no console
const form = document.getElementById("form");
form.addEventListener("submit", (event)=>{  //precisa passar o "event", que é o submit, pois na função ele será retomado para prevenir seu funcionamento padrão
    event.preventDefault();
    console.log ("Formulário não enviado!")
})


//4. atualizar o texto de um parágrafo ao digitar no input
document.getElementById("nome").addEventListener("input", (e)=>{
    document.getElementById("resposta").textContent = `Olá, ${e.target.value}`
})


//5. crie um botão contador de clicks
const botao = document.getElementById("btn2")
let count = 0   //ao se trabalhar com números que variem, evite utilizar "const" para variáveis
botao.addEventListener("click", ()=>{
count ++;
btn2.textContent = `Contador de clicks: ${count}`;   
})
*/
