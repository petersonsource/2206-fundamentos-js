const cliente = {
    nome: "joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["101", "102"],
};

// cliente.endereco = [
//     {
//         rua: "rua josef climber",
//         numero: 1337,
//         apartatmento: true,
//         complemento: "ap934"
//     },
// ];

const  chavesObjeto = Object.keys(cliente);
console.log(chavesObjeto)

if(!chavesObjeto.includes("endereco")) {
    console.error("e necessario ter um endereco cadastrado")
}
