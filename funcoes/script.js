// EXEMPLO 1
function terceiraIdade(idade){
    if(typeof idade !== 'number'){
        return 'Preencha um número';
    }
    if(idade >= 60){
        return true;
    }else{
        return false;
    }
}


console.log(terceiraIdade('a'));


// EXEMPLO 2

// function faltaVisitar(paisesVisitados){
//     var totalPaises = 193;
//     return totalPaises;
// }

faltaVisitar = function (){
    var teste = 193;
    return teste;
}


function getFaltaVisitar(){
    // debugger
    var paises = this.faltaVisitar();
    return paises;
}


console.log('teste',this.getFaltaVisitar());

