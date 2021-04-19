//console.log("Olá, mundo!");
//console.log("Olá, Francilaine!");

/*
let nome = "Francilaine";
const idade = 34;
let idade = 34;

console.log(nome);
console.log(idade);

nome = "Francilaine Viana";
idade = null;

console.log(idade);
*/


//booleanos - camel case
/*
const ehMaiorDeIdade = false;
console.log(ehMaiorDeIdade);
*/

//operadores matematicos
/*
const resultado = 5 / 4
const resto = 5 % 4
console.log(resto)
const resultado = 5 + 4 * 3 - 8



let resultado = 5
resultado = resultado + 5
resultado += 5
resultado -= 5
resultado += 5
resultado /= 5
resultado ++
resultado --

console.log(resultado)
*/

//EXERCICIO CALCULADORA IMC
//imc = massa (kg) / altura_ao_quadrado (m)
/*
const massa = 67;
const altura = 1.68;

const imc = massa / (altura * altura);

console.log(imc);
*/

//OBJETOS
/*
const pessoa = {
  nome: "Francilaine",
  idade: 34,
  ehMaiorDeIdade: true,
  altura: 1.68
};
console.log(pessoa);
console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(pessoa.ehMaiorDeIdade);
console.log(pessoa.altura);
*/

//CONDICIONAIS
const pessoa = {
  nome: "Francilaine",
  idade: 34,
  ehMaiorDeIdade: true,
  altura: 1.68
};

/*
if (pessoa.idade >= 18) {
  console.log("É maior de idade.")
} else {
  console.log("É menor de idade.")
}
*/ 

if (pessoa.idade < 18) {
  console.log("A pessoa é menor de idade.");
} else if (pessoa.idade < 60) {
  console.log("A pessoa é adulta.");
}  else {
    console.log("A pessoa é idosa.");
  };