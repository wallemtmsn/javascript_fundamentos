// Fazendo busca na lista de alunos para saber qual é a nota do aluno




const alunos = ['Fernando', 'Gustavo', 'Olívia', 'Nina', 'Maria', 'Carlos']
const mediaAlunos = [6, 7.4, 8, 6.8, 9.5, 9]

const alunosEMedias = [alunos, mediaAlunos]

function buscarAluno(aluno) {
    if (alunosEMedias[0].includes(aluno)) {
        buscarIndex = alunosEMedias[0].indexOf(aluno)
        const mediaALuno = alunosEMedias[1][buscarIndex] 
        console.log(`
        Aluno: ${aluno}
        Média: ${mediaALuno}
        `)
    } else {
        console.log(`O Aluno ${aluno} que você buscou não foi encontrado na lista de alunos`)
    }
}

buscarAluno('Olívia')