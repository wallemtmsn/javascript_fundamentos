const notas = [10, 6.5, 8, 7.5];

let media = 0;

for (let listaDeNotas of notas) {
    media += listaDeNotas;
}

console.log(media / notas.length);