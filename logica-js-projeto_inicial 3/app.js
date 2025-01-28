/*
Lista 01

alert("Boas vindas ao nosso site!");
let nome = "Lua";
let idade = 25;
let numeroDeVendas = 50;
let saldoDisponivel = 1000;
alert("Erro! Preencha todos os campos");
let mensagemDeErro = "Erro! Preencha todos os campos";
alert(mensagemDeErro);
nome = prompt("Insira o nome");
idade = prompt("Insira a idade");
if (idade>=18){
    alert("Pode tirar a habilitação")
}*/
/*
 Lista 02
let dia = prompt('Qual o dia da Semana (SEG/TER/QUA/QUI/SEX/SAB/DOM):');

if(dia == 'SAB' || dia == 'DOM' ){
    alert('Bom fim de semana!');
} else {
    alert('Boa Semana!');
}

let numero = prompt('Insira um número:');

if (numero<0){
    alert(`${numero} é negativo.`);
} else {
    alert(`${numero} é positivo.`);
}

let pontuacao = prompt('Insira a pontuação');

if (pontuacao>=100){
    alert('Parabéns, você venceu!');
} else {
    alert('Tente novamente para ganhar');
}

let saldo = prompt('Insira o saldo');

alert(`O seu saldo é R$${saldo}`);

let nome = prompt('Insira seu nome');

alert(`Seja bem-vindo, ${nome}`);
*/
 /*
 Lista 03
let contador1 = 1;

while(contador1<=10){
    console.log(contador1);
    contador1++;
}

let contador2=10;
while (contador2>=0){
    console.log(contador2);
    contador2--;
}

let contador3;

contador3 = prompt('3.Insira um número');

while(contador3>=0){
    console.log(contador3);
    contador3--;
}

let contador4 = 0;
let qtd4;

qtd4 = prompt('4.Insira um número');

while(contador4<=qtd4){
    console.log(contador4);
    contador4++;
}
*/

let random = 0;
let cont = 0;
while(random!=1000){
    cont++;
    random = parseInt(Math.random()*10  + Math.random()*100 + Math.random()*1000)
    random = random > 1000? random-107 : random;
    console.log(random);
}
let palavraTentativa = cont > 1? 'tentativas' : 'tentativa';
console.log(`foram precisos ${cont} ${palavraTentativa}`);