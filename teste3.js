const lista = [1,0,3,-4,5,6,7,8,9];
let maisbarato = 0;

for(let atual = 0; atual< lista.length; atual++){
    console.log(`atual : ${atual} and mais barto: ${maisbarato}`);
   
    if(lista[atual] < lista[maisbarato]){
        console.log(`atual : ${lista[atual]} menor que ${lista[maisbarato]}`);
        maisbarato = atual;
      
    }
}
console.log(maisbarato);