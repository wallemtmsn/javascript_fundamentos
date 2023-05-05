// Criar uma função que recebe como argumento o nome de um aluno
// Verificar se o alunos está na lista e retornar a média dele
// Se o aluno não estiver na lista retornar uma mensagem  indicando que o aluno não foi encontrado.

const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const notas = [10, 8, 7.5, 9];
const listaAlunosEMedias = [alunos, notas];
function exibeNomeENota(aluno){
    if (listaAlunosEMedias[0].includes(aluno)){
        const indice = listaAlunosEMedias[0].indexOf(aluno)
        const nota = listaAlunosEMedias[1][indice]
        console.log(`A nota do aluno(a) ${aluno} é ${nota}.`)

    } else {
        console.log(`O aluno ${aluno} não está na lista!`)
    }
}
exibeNomeENota('Ana')