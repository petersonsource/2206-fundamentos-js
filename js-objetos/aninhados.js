const cliente = {
    nome: "joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["101", "102"]
}

cliente.endereco = {
    rua: "rua josef climber",
    numero: 1337,
    apartatmento: true,
    complemento: "ap934"
}

console.log(cliente["endereco"])