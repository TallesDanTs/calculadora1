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

somar.addEventListener("click", function(){
    let numeros = pegarValores();
    let resultadoFinal = numeros[0] + numeros[1];
    res.innerText = `Resultado: ${resultadoFinal}`;
})

subtracao.addEventListener("click", function(){
    let numeros = pegarValores();
    let resultadoFinal = numeros[0] - numeros[1];
    res.innerText = `Resultado: ${resultadoFinal}`;
})