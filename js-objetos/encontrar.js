const clientes = require("./clientes.json");

//console.log(clientes)

function encontrar(lista, chave, valor) {
    return lista.find( (item) => item[chave].includes(valor));
}

const encontrado = encontrar(clientes, "nome", "Izaak")

console.log(encontrado)