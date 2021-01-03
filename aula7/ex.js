/**
 * 
*/
const nome = 'Alan';
const sobreNome = 'Lima';
const idade = 33;
const peso = 90;
const altura = 1.77;
// peso /(altura * altura)

let imc = peso / (altura * altura);

let anoNascimento =2021 -idade;

console.log(`${nome} ${sobreNome} tem ${idade} anos, pesa ${peso} Kg`)
console.log(`tem ${altura} e seu IMC é de ${imc.toFixed(2)}`);
console.log(`${nome} ${sobreNome} Nasceu em ${anoNascimento}`)



