const cliente = {
    nome: "joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["101", "102"],
    saldo: 200,
    efetuaPagamento: function (valor) {
        if (valor > this.saldo) {
            console.log ("saldo insuficiente")
        }else {
            this.saldo -= valor;
            console.log(`pagmento realizaodo, nova saldo ${this.saldo}`);
        }

    }
}

cliente.efetuaPagamento(20);

