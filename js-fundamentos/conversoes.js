//tipo de dado
//booleanos

//conversoes implicita
const numero = 456;
const numeroString = Number("456a");

console.log(numero === numeroString)

//Number()
//String()
console.log(numero + numeroString)

//conversao explicita

let largura = "10";
let altura = "5";
console.log( + largura * + altura); // teremos a conversão de String para números realizado usando o + antes das variáveis