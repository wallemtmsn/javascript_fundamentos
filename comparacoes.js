// == Comparação implícita com conversões
// Faz a conversões da segunda variável em number

let numero = 5;
let texto = '5';

console.log(numero === texto)

// typeof
console.log(typeof numero)
console.log(typeof texto)


// == Compara só o valor
// === compara o valor e o tipo de dado.

// Por convenção devemos sempre usar os === para comaparar.
// Se quisermos converter algum dado devemos fazer de forma manual com:

Number();
String();
Boolean();
Object();
