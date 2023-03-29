
// Mais exemplos de OBJETOS

var height = 100;
var menu = {
    width: 800,
    height: 50,
    backgroundColor: '#84E',
    metadeHeight() {
        return height / this.height; //o this.height pega o de dentro do objeto e o height pega o de fora
    }
}
menu.backgroundColor = '#000';
var bg = menu.backgroundColor;
console.log(bg);

// A linha abaixo inclui uma nova propriedade no objeto menu
menu.exibe = true;

console.log(this.menu);


// hasOwnProperty verifica se dentro do obj menu existe a propriedade height
console.log(menu.hasOwnProperty('height')); 