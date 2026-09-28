// CAIXAS DE TEXTO
const txt1 = document.getElementById("txt1");
const txt2 = document.getElementById("txt2");

// OPERADORES ARITMETICOS

const somar = document.getElementById("somar");
const subtracao = document.getElementById("subtracao");
const multiplicar = document.getElementById("multiplicar");
const divisao = document.getElementById("divisao");
const resto = document.getElementById("resto");
const expon = document.getElementById("expon");

//OPERADORES RELACIONAIS

const maiorque = document.getElementById("maiorque");
const maiorigual = document.getElementById("maiorigual");
const menorque = document.getElementById("menorque");
const menorigual = document.getElementById("menorigual");
const igual = document.getElementById("igual");
const diferente = document.getElementById("diferente");

// RESULTADO

const res = document.getElementById("res");

//CONVERSÃO DE STRING PARA NUMBERS

function pegarValores(){
    let valor1 = Number(txt1.value);
    let valor2 = Number(txt2.value);

    return [valor1, valor2];
}

//FUNCOES ARITIMETICAS

somar.addEventListener("mouseenter", function(){
    let numeros = pegarValores();
    let resultadoFinal = numeros[0] + numeros[1];
    res.innerText = `Resultado: ${resultadoFinal}`;
    res.style.background = 'rgb(82, 163, 255)';
})

subtracao.addEventListener("mouseenter", function(){
    let numeros = pegarValores();
    let resultadoFinal = numeros[0] - numeros[1];
    res.innerText = `Resultado: ${resultadoFinal}`;
    res.style.background = 'rgb(82, 163, 255)';
})
multiplicar.addEventListener("mouseenter", function(){
    let numeros = pegarValores();
    let resultadoFinal = numeros[0] * numeros[1];
    res.innerText = `Resultado: ${resultadoFinal}`;
    res.style.background = 'rgb(82, 163, 255)';
})
divisao.addEventListener("mouseenter", function(){
    let numeros = pegarValores();
    let resultadoFinal = numeros[0] / numeros[1];
    if (numeros[0] === 0 || numeros[1] === 0){
            res.innerText = `Não há divisões por 0`;
            res.style.background = 'red';
    }
    else{
        res.innerText = `Resultado: ${resultadoFinal}`;
        res.style.background = 'rgb(82, 163, 255)'
    }
})
resto.addEventListener("mouseenter", function(){
    let numeros = pegarValores();
    let resultadoFinal = numeros[0] % numeros[1];
    res.innerText = `Resultado: Resta ${resultadoFinal}`;
    res.style.background = 'rgb(82, 163, 255)';
})
expon.addEventListener("mouseenter", function(){
    let numeros = pegarValores();
    let resultadoFinal = numeros[0] ** numeros[1];
    res.innerText = `Resultado: ${resultadoFinal}`;
    res.style.background = 'rgb(82, 163, 255)';
})

//OPERADORES RELACIONAIS

maiorque.addEventListener("mouseenter", function(){
    let numeros = pegarValores();
    let resultadoFinal = numeros[0] > numeros[1];
    if (numeros[0] > numeros[1]){
        res.innerText = `${numeros[0]} é maior que ${numeros[1]} - True`;
        res.style.background = 'green';
    }
    else{
        res.innerText = `${numeros[0]} não é maior que ${numeros[1]} - False`;
        res.style.background = 'red';
    }
})
maiorigual.addEventListener("mouseenter", function(){
    let numeros = pegarValores();
    let resultadoFinal = numeros[0] >= numeros[1];
    if (numeros[0] === numeros[1]){res.innerText = `São números iguais - True`;
        res.style.background = 'green';
    }
    else if (numeros[0] > numeros[1]){
        res.innerText = `${numeros[0]} é maior que ${numeros[1]} - True`;
        res.style.background = 'green';
    }
    else{
        res.innerText = `${numeros[0]} não é maior que ${numeros[1]} - False`;
        res.style.background = 'red';
    }
})
menorque.addEventListener("mouseenter", function(){
    let numeros = pegarValores();
    let resultadoFinal = numeros[0] < numeros[1];
    if (numeros[0] < numeros[1]){
        res.innerText = `${numeros[0]} é menor que ${numeros[1]} - True`;
        res.style.background = 'green';
    }
    else{
        res.innerText = `${numeros[0]} não é menor que ${numeros[1]} - False`;
        res.style.background = 'red';
    }
})
menorigual.addEventListener("mouseenter", function(){
    let numeros = pegarValores();
    let resultadoFinal = numeros[0] <= numeros[1];
    if (numeros[0] === numeros[1]){ res.innerText = `São números iguais - True`;
        res.style.background = 'green';
    }
    else if (numeros[0] < numeros[1]){
        res.innerText = `${numeros[0]} é menor que ${numeros[1]} - True`;
        res.style.background = 'green';
    }
    else{
        res.innerText = `${numeros[0]} não é menor que ${numeros[1]} - False`;
        res.style.background = 'red';
    }
})
igual.addEventListener("mouseenter", function(){
    let numeros = pegarValores();
    let resultadoFinal = numeros[0] === numeros[1]
    if (numeros[0] === numeros[1]){
        res.innerText = `São números iguais - True`;
        res.style.background = 'green'
    }
    else{
        res.innerText = `Não são números iguais - False`;
        res.style.background = 'red';
    }   
})
diferente.addEventListener("mouseenter", function (){
    let numeros = pegarValores();
    let resultadoFinal = numeros[0] != numeros[1];
    if (numeros[0] != numeros[1]){
        res.innerText = "São números diferentes - True";
        res.style.background = 'green';
    }
    else{
        res.innerText = "Não são números diferentes - False";
        res.style.background = 'red';
    }
})
