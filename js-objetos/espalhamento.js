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

function ligaParaCliente(telefoneComercial, telefoneResidencial) {
    console.log(`ligando para ${telefoneComercial}`)
    console.log(`ligando para ${telefoneResidencial}`)
}

ligaParaCliente(cliente.telefone[0],cliente.telefone[1]);

ligaParaCliente(...cliente.telefone)

const encomenda = {
    destinatario: cliente.nome,
    ...cliente.endereco[0],
};

console.log(encomenda);