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
    apartatmento: true,
    complemento: "ap934"
}
];

for(let chave in cliente) {
    let tipo = typeof cliente[chave];
    if (tipo !== "object" && tipo !== "function") {
        console.log(`a chave ${chave} tem o valor ${cliente[chave]}`);
    }
    
}