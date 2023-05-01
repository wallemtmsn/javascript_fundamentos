// Parâmetro de função X e Y

function soma(x,y) {
    return x + y;
}

//console.log(soma(1,2));

// Função usando template strings.
function apresentacao(nome, idade) {
    return `Olá! meu nome é ${nome} e eu tenho ${idade} anos.`
}

//console.log(apresentacao('Wallemberg', 25));


function multiplica(x, y) {
    return x * y;
}

//console.log(multiplica(soma(5,5), soma(20,10)))

// Função com parâmetros, cada parâmetro da função é o resultado da função soma().



// Função com valor padrão caso o usuário esqueça de declarar um parâmetro da função
function multiplica(x = 1, y = 1) {
    return x * y;
}

console.log(multiplica(10, 10))

// Se não for declarado nenhum valor padrão e o usuário esquecer de declarar algum valor como parâmetro o console irá exibir Not A Number (NaN) 