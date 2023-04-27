const livros = require('./lista-livros.js');
const menorValor = require('./menorValor');


for(let atual = 0; atual < livros.length; atual++) {
    let menor = menorValor(livros, atual);

    console.log(`posicao atual`, atual)
    console.log(`posicao menor`, menor)
   
    let livroAtual = livros[atual];
    console.log(`livro atual`, livros[atual]);
    let livroMenorValor = livros[menor];
    console.log(`livro menor preco`, livros[menor]);

    livros[atual] = livroMenorValor;
    livros[menor] = livroAtual;

}

console.log(livros)