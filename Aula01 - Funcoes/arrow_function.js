// Declaração de função no modo clássico

// function soma(x, y){
//     return x + y;
// }


// Modo Arrow Function

// const soma = (x, y) => x + y;

// console.log(soma(1,3));


// Arrow Function para imprimir uma variável
// Sem "return" e sem "{}" Válido para funções de somente uma linha.

// const imprimir = nome => `Olá meu nome é ${nome}!`;

// console.log(imprimir('Wallemberg'));

// Se o arrow function tiver mais de uma linha, precisamos declarar o return e usar as chaves {}.

// Exemplo:

const somarNumerosPequenos = (x, y) => {
    if (x > 10 || y > 10) {
        return 'Algum número declarado é maior que 10!'
    } else {
        return x + y;
    }
}

console.log(somarNumerosPequenos(2,10))

// Arrow Function - Rapido e curto de escrever função.