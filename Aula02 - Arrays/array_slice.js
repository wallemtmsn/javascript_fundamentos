// Lista de alunos

// Desfio: Divida os alunos em duas turmas

const alunos = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'Andre', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo'];

const salaUm = alunos.slice(0, alunos.length / 2);
const salaDois = alunos.slice(alunos.length / 2);
console.log('TURMA SALA 01');
console.log(salaUm);

console.log('TURMA SALA 02');
console.log(salaDois);