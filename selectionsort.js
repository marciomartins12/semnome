const lista  = [1, 2, 4, 12, 1, 0, 35, 19, 3];
organizaLista();
function organizaLista(){
    for(let atual = 0; atual < lista.length; atual++){
        let menorFunc = menorNumero(lista, atual);
        if(lista[atual] > lista[menorFunc]){
            let aux = lista[atual];
            lista[atual] = lista[menorFunc];
            lista[menorFunc] = aux;
        }
    }
    console.log(lista);
}




function menorNumero(array, indice){
    let valorEntrada = indice;
    for(atual = indice; atual < lista.length; atual++){
        if(array[atual] < array[valorEntrada]){
            valorEntrada = atual ; 
        }
    }
    return valorEntrada;  
};

