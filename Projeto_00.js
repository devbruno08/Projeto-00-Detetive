const prompt = require("prompt-sync")();

// console.log('Hello world!')

console.clear();
console.log("Bem vindo ao detetive!");
console.log("Pressione ENTER para continuar...");
prompt();

console.clear();

console.log("Responda com 'sim' ou 'não': ");
console.log();
prompt("Pressione ENTER para continuar...")
console.clear();
let Pergunta1 = prompt("Você passou perto da rua Mostardas na sexta a noite? ").toUpperCase();
console.clear();
let Pergunta2 = prompt("Conhecia a vítima? ").toUpperCase();
console.clear();
let Pergunta3 = prompt("Tinha alguma relação com ela? ").toUpperCase();
console.clear();
let Pergunta4 = prompt("Esteve com a vítima nas ultimas semanas? ").toUpperCase();
console.clear();
let Pergunta5 = prompt("Pretende sair do país? ").toUpperCase();
console.clear();

let verdadeira = "SIM";
let R1;
let R2;
let R3;
let R4;
let R5;

console.log();

if (Pergunta1 == verdadeira) {
  R1 = 1;
} else {
  R1 = 0;
}

if (Pergunta2 == verdadeira) {
  R2 = 1;
} else {
  R2 = 0;
}

if (Pergunta3 == verdadeira) {
  R3 = 1;
} else {
  R3 = 0;
}

if (Pergunta4 == verdadeira) {
  R4 = 1;
} else {
  R4 = 0;
}

if (Pergunta5 == verdadeira) {
  R5 = 1;
} else {
  R5 = 0;
}

let Afirmativas = R1 + R2 + R3 + R4 + R5;

if (Afirmativas >= 4) {
  console.log("Você é culpado!!!");
} else if (Afirmativas == 3) {
  console.log("Você é um dos nossos suspeitos!");
} else if (Afirmativas >= 2) {
  console.log("Você é inocente!");
} else {
  console.log("Você não respondeu corretamente e saiu do jogo.");
}

console.log();
