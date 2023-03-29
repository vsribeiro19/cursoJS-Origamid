


var dadosPessoais = {
    nome: 'Victor',
    sobrenome: 'Ribeiro',
    nomeCompleto: function () {
        return `${this.nome} ${this.sobrenome}`;
    }
}

var carro = {
    preco: 1000,
    portas: 4,
    marca: 'Audi',
}

carro.preco = 3000;

var cachorro = {
    raca: 'Labrador',
    cor: 'preto',
    idade: 10,
    latir(pessoa) {
        if (pessoa === 'homem') return 'Latir';
        return 'Nada'
    }
}

