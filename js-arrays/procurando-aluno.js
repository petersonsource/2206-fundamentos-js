const alunos = ["joao", "juliana", "ana", "caio"]
const medias = [10, 8, 7.5, 9];

const listaDeAlunosMedia = [alunos, medias]

function exibeNomeENota(aluno) {
    if(listaDeAlunosMedia[0].includes(aluno)) {
       
        //const alunos = listaDeAlunosMedia[0];
        //const medias = listaDeAlunosMedia[1];

        const [alunos, medias] = listaDeAlunosMedia;

        const indice = alunos.indexOf(aluno);
//         console.log(indice);

        const mediaDoAluno = medias[indice];
//        console.log(mediaDoAluno);
        console.log(`${aluno}, tem a média ${mediaDoAluno}.`);
    } else {
        console.log("Aluno não encontrado!")
    }
}

exibeNomeENota("caio");