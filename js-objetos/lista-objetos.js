const cliente = {
    nome: "joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["101", "102"]
}

cliente.endereco = [
{
    rua: "rua josef climber",
    numero: 1337,
    apartamento: true,
    complemento: "ap934"
}
];

cliente.endereco.push({
    rua: "rua blany",
    numero: 1237,
    apartamento: false,
    complemento: "casa2"
})

console.log(cliente["endereco"])

const listaApenasApartamentos = cliente.endereco.filter(
    (endereco) => endereco.apartamento === true
);

console.log(listaApenasApartamentos);