const lista  = [
    {
        nome : "teste",
        valor : 50
    },
    {
        nome : "teste",
        valor : 0
    },
    {
        nome : "Márcio",
        valor : -20
    },
    {
        nome : "teste",
        valor : 3
    }
];
organizaLista();
function organizaLista(){
    for(let atual = 0; atual < lista.length; atual++){
        let menorFunc = menorNumero(lista, atual);
        if(lista[atual].valor > lista[menorFunc].valor){
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
        if(array[atual].valor < array[valorEntrada].valor){
            valorEntrada = atual ; 
        }
    }
    return valorEntrada;  
};

