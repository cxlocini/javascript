/*var jogador1 = 1;
var jogador2 = 0;
var placar;

//if ternário
jogador1 != -1 && jogador2 != -1 ? console.log('Os jogadores são válidos') : console.log('Jogadores Inválidos');

//usando if
if (jogador1 > 0 && jogador2 == 0) {
    console.log('jogador 1 marcou ponto');
    placar = jogador1 > jogador2;
} 
// usando else if
else if(jogador2 > 0 && jogador1 == 0){
    console.log('jogador 2 marcou ponto');
    placar = jogador2 > jogador1;
}
//usando else
else {
    console.log('ninguem marcou ponto');
}

switch (placar) {
    case placar = jogador1 > jogador2:
        console.log('Jogador 1 ganhou');
        break;

    case placar = jogador1 < jogador2:
        console.log('Jogador 2 ganhou');
        break;
    default:
        console.log('ninguem ganhou');
        break;
}*/

let array = ['valor1','valor2','valor3','valor4','valor5'];

let object = {propriedade1: 'valor1',propriedade2: 'valor2',propriedade3: 'valor3'}

for (let index = 0; index < array.length; index++) {
    console.log(index);
}

for (let i in array){
    console.log(i);
}

for (i in object){
    console.log(i);
}

for (i of array){
    console.log(i);
}

for (i of object.propriedade1){
    console.log(i);
}

var a = 0;

while (a < 10) {
    a++;
    console.log(a);
}