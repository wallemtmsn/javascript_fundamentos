// Função declada por padrão

// function nomeDaFuncao(parametro1, parametro2){
//     // Bloco de código
// }

// Expressão de função

// const soma = function(x, y) {return x + y}

// console.log(soma(2,5))

// Desvantagem da expressão da função é que você só pode chamar essa função após sua declaração


//console.log(soma(2,5)) // Chamando a função antes de sua declaração vai causar um erro de referência. "ReferenceError: Cannot access 'soma' before initialization"

//const soma = function(x, y) {return x + y}


// Já com a função declarativa não teremos esse problema, podemos chamar a função antes mesmo de sua declaração.

//Exemplo:

console.log(soma(2,5))

function soma(x, y) {
    return x + y
}