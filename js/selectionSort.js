const lista = require("./js/listaDesordenada");
const newArray = lista;

for(let x = 0; x < newArray.length; x++){

let valueMenor = menor(newArray, x);

if(newArray[x].valor > newArray[valueMenor].valor){
    let aux = newArray[x];
    newArray[x] = newArray[valueMenor];
    newArray[valueMenor] = aux;
    };
};

function menor(array, indice){
    let menorValor = indice;
    
    for(let posicao = indice + 1; posicao < array.length; posicao++){
        if(array[menorValor].valor > array[posicao].valor){
            menorValor = posicao;
        };
    };
    return menorValor;
};
console.log(newArray);