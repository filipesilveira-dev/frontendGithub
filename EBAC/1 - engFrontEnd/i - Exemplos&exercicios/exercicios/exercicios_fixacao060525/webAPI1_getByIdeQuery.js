//altera/acrescenta um texto em um <p>
const p = document.getElementById("mensagem")
p.textContent = "Olá, mundo!"

//altera a cor de fundo de um botão
const btn = document.querySelector(".meu-botao")
btn.style.backgroundColor = 'green';

//cria e acrescenta um <li> com texto à uma lista
const list = document.getElementById("lista")
const newItem = document.createElement("li")
newItem.textContent = "Novo item"
list.appendChild(newItem)

//oculta um parágrafo com id='ocultar'
const pOculto = document.querySelector(".ocultar")
pOculto.style.display = 'none';

//adicionar dinamicamente um campo <input> em uma <div> com id="formulario"
const formulario = document.getElementById("formulario")
const newInput = document.createElement("input")
newInput.type = "text"
newInput.placeholder = "Digite algo.."
formulario.appendChild(newInput)
