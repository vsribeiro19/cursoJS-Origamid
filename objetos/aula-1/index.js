
var pessoa = {
    nome: 'André',
    idade: 27
}

var quadrado = {
    lados: 4,
    // forma de criar uma função
    area: function (lado) {
        return lado * lado;
    },
    // outra forma de criar função
    perimetro(lado) {
        return this.lados * lado;
    },
    cinco(){
        return 5;
    }
}

function minMax(min,max){
    let total = Math.floor(Math.random(min,max) * 101);
    return total;
}

console.log(minMax(1,101));

// console.log(quadrado.area(4));
// console.log(quadrado.perimetro(6));
