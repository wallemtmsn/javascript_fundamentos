// tipo de dado
// booleanos

// conversão implícita

const numero = 456;
const numeroString = '456';

// console.log(numero == numeroString) // True
// console.log(numero === numeroString) // False

console.log(numero + numeroString); // Ele não converte. Mas concatena as duas variáveis.

// conversão explícita

// Number()
// String()
console.log(numero + Number(numeroString)); // Converte o a variável tipo String em Number.
