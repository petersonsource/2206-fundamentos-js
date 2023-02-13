
//declaracao de funcao
function minhaFuncao(param) {
    //bloco de codigo
}

minhaFuncao("param")

//expressao de funcao

console.log(apresentar())

function apresentar() {
    return "ola";
}

//funcoes e var são listas no topo (HOISTING)

console.log(soma(1,1))
const soma =  function(num1, num2) {return num1 + num2}
console.log(soma(1, 1))