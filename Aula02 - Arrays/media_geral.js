const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

// function calcularMedia(sala) {
//     media = 0;
//     for (let mediaSala of sala) {
//         media += mediaSala;
        
//     }
//     const mediaSala = (media / sala.length);
//     return mediaSala;
// }
// console.log(`A média da SalaJS é: ${calcularMedia(salaJS)}`);
// console.log(`A média da salaJava é: ${calcularMedia(salaJava)}`);
// console.log(`A média da salaPython é: ${calcularMedia(salaPython)}`);



// Outra forma de fazer a soma das médias

function calculaMedia(notasDaSala) {
    const somaDasNotas = notasDaSala.reduce((acumulador, nota) => acumulador + nota, 0);
    const media = somaDasNotas / notasDaSala.length;
    return media
}

console.log(`A média da SalaJS é: ${calculaMedia(salaJS)}`);
console.log(`A média da salaJava é: ${calculaMedia(salaJava)}`);
console.log(`A média da salaPython é: ${calculaMedia(salaPython)}`);
