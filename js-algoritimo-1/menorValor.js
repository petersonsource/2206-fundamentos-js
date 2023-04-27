const livros = require('./lista-livros');

function menorValor(arrProduto, posicaoInicial) {

    let maisBarato = posicaoInicial;
    
    for(let atual = posicaoInicial; atual < arrProduto.length; atual++) {
        if (arrProduto[atual].preco < arrProduto[maisBarato].preco){
            maisBarato = atual;
        }
    }
    return maisBarato;
}


const precosLivros = [
    {
        titulo: "JavaScript",
        preco: 25
    },
    {
        titulo: "PHP",
        preco: 15
    },
    {
        titulo: "Java",
        preco: 30
    },
    {
        titulo: "Elixir",
        preco: 50
    },
    {
        titulo: "Go",
        preco: 45
    },
    {
        titulo: "Python",
        preco: 20
    },
]

let posicao = menorValor(precosLivros, 2)

console.log(posicao);
console.log(precosLivros[posicao].preco);
console.log(precosLivros);


module.exports = menorValor;