//parametros da funcao

function soma(num1 , num2) {
    return num1 + num2
}

console.log(soma(2, 1))
console.log(soma(245, 20))
console.log(soma(-2, 1))

function nomeIdade(nome, idade) {
    return `meu nome e ${nome} e minha idade é ${idade}`;
}

// console.log(nomeIdade("san", 45))

function multiplica(num1 = 1 , num2 = 1) {
    return num1 * num2
}

console.log(multiplica(soma(4,5)));
