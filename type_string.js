const texto1 = 'Olá,';
const texto2 = ' Mundo!';

// console.log(texto1.concat(texto2));

const templateString = `
De acordo com o que foi estudado
Usar Crase em vez de aspas
As vezes pode ser melhor
Para escrever textos
`;

//console.log(templateString);

const nome = 'Wallemberg';

const idade = (a, b) => a + b;

console.log('Primeiro exemplo usando o Template String:')
console.log(`
Meu nome: ${nome}
Minha idade: ${idade(20,15)}`);

console.log()

console.log('Segundo exemplo usando aspas:')
console.log('Meu nome é '.concat(nome) + ' e minha idade é '.concat(idade(20,15)))