
const listaNaoOrdenada = [ 100,0 , 5 , 6 ,4 ,2 ,1, 1 , 4, ,0.1, 100, 99, 40, 20, 10 ,2];
console.log(`lista : ${listaNaoOrdenada}`);
for (let x = 0; x < listaNaoOrdenada.length; x++){
    
    for(let j = 0; j < listaNaoOrdenada.length; j++){
        
        if(listaNaoOrdenada[x] < listaNaoOrdenada[j]){
            
            let auxiliar = listaNaoOrdenada[x];
            
            listaNaoOrdenada[x] = listaNaoOrdenada[j];
            listaNaoOrdenada[j] = auxiliar;
            
        } 
        console.log(`lista : ${listaNaoOrdenada}`);

}

}