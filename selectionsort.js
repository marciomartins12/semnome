const lista = [1,2,4,2,1,4,5,6];



for(let cont = 0 ; cont < lista.length ; cont++){


    let valormenor =  acharmenorValor( cont, lista);
    console.log("final");
}



function acharmenorValor(posicao, lista){
    
    let menorValor = posicao;
    for(let atual = posicao; atual < lista.length; atual++){
        
        if(lista[atual] < lista[menorValor]){
            menorValor = lista[atual];
        }
        console.log(`lista : ${lista[posicao]} menor valor : ${atual}`)
    }
    return menorValor;

}