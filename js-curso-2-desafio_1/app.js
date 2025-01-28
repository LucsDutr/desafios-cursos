/*
Lista 01
let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

function clickConsole(){
    console.log('O botão Console foi clicado');
}

function clickAlerta(){
    alert('Eu amo JS');
}

let cidade;
function clickPrompt(){
    cidade = prompt('Insira o nome de uma cidade do Brasil');
    alert(`Estive em ${cidade} e lembrei de você`);
}

let num1;
let num2;
function clickSoma(){
    num1 = parseInt(prompt('Insira o primeiro número da soma'));
    num2 = parseInt(prompt('Insira o segundo número da soma'));
    alert(`A soma resulta: ${num1+num2}`);
}
*/

/*
Lista 02

let nome = '';
let numero = 0;
let soma = 0;

function olaMundo(){
    console.log('Olá, mundo!');
}

function olaNome(nomeFunc){
    console.log(`Olá, ${nomeFunc}`);
}

function dobroNumero(numeroFunc){
    console.log(numeroFunc*2);
}

function calcMedia(num1Func, num2Func, num3Func){
    console.log(`A média dos números é ${(num1Func+num2Func+num3Func)/3}`);
}

function retornaMaior(num1_5Func, num2_5Func){
    if (num1_5Func>num2_5Func){
        return console.log(num1_5Func);
    } else if (num2_5Func> num1_5Func) {
        return console.log(num2_5Func);
    } else {
        return console.log('Os números são iguais');
    }
}

function squareNum(num_6Func){
    return console.log(num_6Func*num_6Func);
}

nome = prompt('Insira o nome');

numero = prompt('Insira um número');

num1=parseInt(prompt('Insira o 1° número'));
num2=parseInt(prompt('Insira o 2° número'));
num3=parseInt(prompt('Insira o 3° número'));

num1_5=parseInt(prompt('5.Insira o 1° número'));
num2_5=parseInt(prompt('5.Insira o 2° número'));

num_6=parseInt(prompt('6.Insira um número'));

olaMundo();
olaNome(nome);
dobroNumero(numero);
calcMedia(num1, num2, num3);
retornaMaior(num1_5, num2_5);
squareNum(num_6);
*/

/*
Lista 03
let peso;
let altura;

function doisDecimais(num2decimaisFunc){
    return parseFloat(num2decimaisFunc.toFixed(2));
}

function calcIMC(pesoFunc,alturaFunc){
    return (peso/(altura*altura))
}

let fatorial = parseInt(prompt('Fatorial - Insira um número'));

function calcFatorial(numFunc){
    if (numFunc==1){
        return 1;
    } else {
        return numFunc * calcFatorial(numFunc-1);
    }
}

console.log(calcFatorial(fatorial));

let dolares = parseInt(prompt('Insira dólares para a conversão.'));

function cambio(dolaresFunc){
    let respostaCambio = `$${dolaresFunc} equivalem a R$${(dolaresFunc * 5.91).toFixed(2)}`;
    return respostaCambio;
}

console.log(cambio(dolares));

let largura = parseInt(prompt('Insira a largura da sala'));
let comprimento = parseInt(prompt('Insira o comprimento da sala'));

function calcAreaPerimetro(larguraFunc, comprimentoFunc){
    let respostaCalcAreaPeri = `Área: ${doisDecimais(larguraFunc*comprimentoFunc)}m² Perímetro: ${doisDecimais(larguraFunc+comprimentoFunc)}m`;
    return respostaCalcAreaPeri;
}

alert(calcAreaPerimetro(largura, comprimento));

let raio = parseInt(prompt('Insira o raio da sala'));

function calcAreaPerimetroCir(raioFunc){
    let respostaCalcAreaPeriCir = `Área: ${doisDecimais(3.14*raioFunc**2)}m² Perímetro: ${doisDecimais(2*3.14*raioFunc)}m`;
    return respostaCalcAreaPeriCir;
}

alert(calcAreaPerimetroCir(raio));

let numeroTabuada = parseInt(prompt('Insira um número'));

function tabuada(numeroTabuadaFunc){
    for(c=1; c<=10; c++){
        console.log(`${numeroTabuadaFunc} x ${c} = ${numeroTabuadaFunc*c}`);
    }
}

tabuada(numeroTabuada);
*/

let listaGenerica = [];
let linguagensDeProgramacao = ['JavaScript','C','C++','Kotlin','Python'];

linguagensDeProgramacao.push('Java');
linguagensDeProgramacao.push('Ruby');
linguagensDeProgramacao.push('GoLang');
