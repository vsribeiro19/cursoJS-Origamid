


const obj1 = {
    nome: 'Victor',
    idade: 27
}


console.log('objeto puro', obj1);

let assignObj1 = Object.assign(obj1);
console.log('Usando object assign', assignObj1);

let keysObj1 = Object.keys(obj1);
console.log('Usando object keys', keysObj1);

let sprObj1 = {...obj1};
console.log('Usando spread', sprObj1);
