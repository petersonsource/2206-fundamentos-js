const { edGalho, edFolha } = require('./arrays.js');

function justaListas (lista1, lista2){
    let listaFinal = [];
    let posicaoAtualLista1 = 0;
    let posicaoAtualLista2 = 0;
    let atual = 0 

    while (posicaoAtualLista1 < lista1.length &&
        posicaoAtualLista2 < lista2.length) {

        let produtoAtualLista1 = lista1[produtoAtualLista1];
        let produtoAtualLista2 = lista2[produtoAtualLista2]            

        if(produtoAtualLista1.preco < produtoAtualLista2.preco){
            listaFinal[atual] = produtoAtualLista1;
        } else{
            listaFinal[atual] = produtoAtualLista2;
        }

    atual ++

    }

    return listaFinal;
}

console.log(justaListas(edGalho, edFolha));

