const livros = require('./lista-livros');

function insertSort(lista) {

    for (let atual = 0; atual < lista.length; atual++ ) {
    
        let analise = atual;
        while(analise > 0 && lista[analise].preco < lista[analise - 1].preco) {
            
            let itemAnalise = lista[analise];
            let itemAnterior =  lista[analise-1];

            livros[analise-1] = itemAnalise;
            livros[analise] = itemAnterior;   
            
            analise--
            console.log(analise)
        }
    }
    
    console.log(livros);
}

insertSort(livros);