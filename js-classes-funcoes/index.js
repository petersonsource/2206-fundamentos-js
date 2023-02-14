// const Livro = {
//     nome: "react native",
//     editors: "casa do codigo",
//     paginas: 185,
//     anunciar: function() {
//         console.log("a alura indica o livro" + this.nome +
//         "!")
//     }
// }

class Livro {

    constructor(nome, editora, paginas) {
        this.nome = nome,
        this.editora = editora, 
        this.paginas = paginas
    }

    anunciaTitulo(){
        console.log(`titulo: ${this.nome}`)
    }

    descreverTitulo(){
        console.log(`${this.nome} é um livro de editora
        ${this.editora} e tem ${this.paginas} paginas`)
    }

}

const graphSQL = new Livro("GraphSQL", "Casa do codigo", 300)

graphSQL.anunciaTitulo();
graphSQL.descreverTitulo();