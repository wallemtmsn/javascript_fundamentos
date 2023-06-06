const cliente = {
    nome: 'André',
    sobrenome: 'Rafael',
    idade: 36,
    email: 'andre@andre.com',
    telefones: ['99999-9999', '88888-8888'],
    saldo: 200,
    efetuaPagamento: function(valor) {
        if (this.saldo < valor) {
            console.log('Saldo insuficiente');
        } else {
            this.saldo -= valor;
            console.log(`Pagamento de R$${valor} efetuado. Saldo restante de R$${this.saldo}`);
        }
    }
  };

cliente.efetuaPagamento(50);