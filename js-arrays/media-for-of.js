const notas = [10 ,6.5, 8, 7.5];

let somamDasNotas = 0;

for(let elemento of notas) {
    console.log(elemento)

    somamDasNotas += elemento
}

console.log(somamDasNotas)