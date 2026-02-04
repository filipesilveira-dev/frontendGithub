/*
Elaborar um programa para um cinema, onde o usuário possa digitar otítulo e a duração de um filme em minutos. Exiba o título do filme e converta a duração para horas e minutos.

1. obter o nome do filme
2. obter a duração em minutos

3. converter a duração de minutos em horas

    3.1 fazer adivisão da duração em minutos por 60 pra pegar a quantidade em horas
    3.2 arredondar a quantidade de horas para pegar só as horas cheias
    3.3 pegar o resultado da duração em minutos e remover as horas cheias (horas * 60)
        ex.: 70 minutos (1h e 10min)
        60min = 1h
        10min
        70/60 = 1,16 (arredondar pra baixo) = 1
        horas = 1
        const minutos = 70 - 1*60 = 10
    4. exibir o nome do filme
    5. exibir a duração em horas e minutos
*/

function calcular(){
    /*const filme = document.getElementById('filme'); //recebe input nome do filme
    const duracao = document.getElementById('duracao'); //recebe input total em minutos
    const dur = Number(duracao.value) //transforma em número o conteúdo da variável duracao
    const res1 = document.getElementById('res1'); //estabelece ligação com elemento que receberá resultado 


    const horas = Math.floor(dur/60) //estabelece que o resultado do cálculo entre parênteses será arredondado para baixo (floor = chão)
    const minutos = dur - horas*60
    
    res1.innerHTML = `${filme.value}`
    res2.innerHTML = `${horas} hora e ${minutos} minutos`
*/
    
    let titulo = document.getElementById('filme').value;
    let duracao = document.getElementById('duracao').value;
    
    let horas = Math.floor(duracao/60);
    let minutos = duracao - horas*60;

    document.getElementById("res1").textContent = titulo.toUpperCase();
    document.getElementById("res2").textContent = horas + "hora(s) e " + minutos;
    
}