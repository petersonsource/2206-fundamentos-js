const cliente = {
    nome: "jose",
    idade: 32,
    cpf: "11111111",
    email: "email@domininio.com",
}

console.log(`o nome do cliente é ${cliente["nome"]} e essa pessoa tem ${cliente["idade"]} anos!` );

const chaves = ["nome", "idade", "cpf", "email"]

chaves.forEach( (chave) => {
    console.log(`a chave ${chave} tem valor ${cliente[chave]}`)
})