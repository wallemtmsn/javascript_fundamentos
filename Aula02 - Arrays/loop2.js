// Fazendo busca na lista de alunos para saber qual é a nota do aluno




const alunos = ['Fernando', 'Gustavo', 'Olívia', 'Nina', 'Maria', 'Carlos'];
const mediaAlunos = [6, 7.4, 9, 6.8, 9.5, 9];
const alunosEMedias = [alunos, mediaAlunos];
// Buscando a média do aluno
function buscarAluno(aluno) {
    if (alunosEMedias[0].includes(aluno)) {
        buscarIndex = alunosEMedias[0].indexOf(aluno);
        const mediaALuno = alunosEMedias[1][buscarIndex] ;
        console.log(`
        Aluno: ${aluno};
        Média: ${mediaALuno};
        `)
    } else {
        console.log(`O Aluno ${aluno} que você buscou não foi encontrado na lista de alunos`);
    }
}

// Função para buscar alunos com x de média
function buscarPorMedia(media) {
    const indices = [];
    for (let i = 0; i < alunosEMedias[1].length; i++) {
      if (alunosEMedias[1][i] === media) {
        indices.push(i);
      }
    }
    if (indices.length > 0) {
      console.log(`Alunos encontrado com a média ${media}: ` + indices.map(i => alunosEMedias[0][i]));
    } else {
      console.log(`Média ${media} não encontrada`);
    }
  }
buscarPorMedia(9)