const clientes = require("./clientes.json");

function filtrarApartamentosSemComplementos(clientes) {
    return clientes.filter( (clientes) => {
        return (clientes.endereco.apartamento &&
            !clientes.endereco.hasOwnProperty("complemento"))
    })
}

const filtrados = filtrarApartamentosSemComplementos(clientes)

console.log(filtrados);