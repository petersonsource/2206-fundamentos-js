const listaLivros =  require('./array.js')

function encontraMenores(pivo, array) {
    let menores = 0;

    for(let atual = 0; atual < array.length; atual++) {
        let produtoAtual = array[atual]
        if (produtoAtual.preco < pivo.preco) {
            menores++
        }
    }

   TrocaLugar(array, array.indexOf(pivo), menores)
   return array
}

function TrocaLugar(array, de, para) {
    const elem1 = array[de]
    const elem2 = array[para]

    array[para] = elem1
    array[de] = elem2

}

function dividirNoPivo(array){
    let pivo = array[Math.floor(array.length /2)];
    console.log(pivo)
    encontraMenores(pivo, array);
    let valoresMenores = 0;

    for(let analisando = 0; analisando < array.length; analisando++) {
        let atual =  array[analisando];
        if(atual.preco <= pivo.preco  && atual !== pivo){
            TrocaLugar(array, analisando, valoresMenores);
            valoresMenores ++
        }
    }

    return array;

}

//console.log(dividirNoPivo(listaLivros));
//console.log(listaLivros);
//console.log(encontraMenores(listaLivros[2], listaLivros));

module.exports = TrocaLugar;