function apresentar(nome) {
    return `meu nome é ${nome}`;
}

//arrow function
const apresentarArrow = nome => `meu nome é ${soma}`;
const soma = (num1, num2) => num1 + num2;


//arrow function com + de 1 linha de instrucao

const somaNumeroPequenos = (num1, num2) => {
    if (num1 > 10 || num > 10) {
        return "somente numeros de 1 a 9"
    } else {
        return num1 + num2;
    }
}


//hoisti: arrow function se comporta com expressao