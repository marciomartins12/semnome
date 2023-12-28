const lista = require("./listaDesordenada.js");
const newArray = lista;
for(let x = 0; x < newArray.length; x++){
    
    for(let j = 0; j < newArray.length; j++){
        console.log(`comparado ${newArray[x].valor} com ${newArray[j].valor}`)
        if(newArray[x].valor < newArray[j].valor){
            let aux = newArray[x];
            newArray[x] = newArray[j];
            newArray[j] = aux; 
        }
    }
};
console.log(newArray);