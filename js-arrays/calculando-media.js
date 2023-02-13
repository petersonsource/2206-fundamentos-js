console.log("testado string")

var string0 =  "Não designado";
var string1 =  "1.2 sistema";
var string2 =  "1.3 sistema";
//var string3 =  "3.1 sistema";


const atributos = [];

atributos.push(string0);
atributos.push(string1);
atributos.push(string2);

//valor de cada ponto do processo
var ponto = 1;

//total de pontos de atributos
var totalPontos = 0;

//parte de cima
var numerador = 0;

//parte de baixo 
var denominador = 0;

//media do projeto
var mp = 0;


for (var i = 0; i < atributos.length; i ++) {
    
    var peso = getPeso(atributos[i]);
    console.log(peso);

    numerador = numerador + ponto * peso;
    denominador = denominador + peso;
    
}

console.log("numerador:" + numerador)
console.log("denominador: "  +denominador)
console.log("total de pontos: " + totalPontos)
media = (numerador / totalPontos);
console.log("media: " +media);


function getPeso(valorEnum) {

    var num = valorEnum.substring(valorEnum.indexOf(".")+1, valorEnum.indexOf(" "));
    if (isNaN(num)) {
        return 0;
    }
    totalPontos = totalPontos + 1;
    return Number(num);

}

numerador = 0;
denominador = 0;


listaPeso2 = [2.2,  3.2, 5,2];


var n1 = 5
var n2 = 2

console.log(5/2)

//mp = n * p + n * p + n * p
// p + p + p


//mp = 1 * 2 + 1 * 2 + 1 * 0
//      2 + 2 + 0 / 4

//mp 1 * 2 + 1 * 3
//     5/2