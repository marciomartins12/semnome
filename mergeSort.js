const lista1 = [{
    nome : "Dean",
    valor: 1,
},
{
    nome : "Jhon",
    valor: 50,
}
,{
    nome: "Sammy",
    valor : 60,
}];
const lista2 = [
    {
        nome : "Barney",
        valor : 1,
    },
    {
        nome : "BarnacOU",
        valor : 2,
    },
    {
        nome : "BarT",
        valor : 10,
    },
    {
    nome : "BarLix",
    valor : 14,
},
{
    nome : "Marshal",
    valor : 75,
},
{
    nome : "Lilian",
    valor : 80,
}
];
let listaNova = [], contadorLista1 = 0, contadorLista2 = 0;
for(let contVez ;contadorLista1 < lista1.length && contadorLista2 < lista2.length; contVez++){
    
    console.log(`comparando o ${contadorLista1} com o ${contadorLista2}`);
    if(lista1[contadorLista1].valor < lista2[contadorLista2].valor){
        listaNova.push(lista1[contadorLista1]);
        contadorLista1++;
    }
    else if(lista1[contadorLista1].valor > lista2[contadorLista2].valor){
        listaNova.push(lista2[contadorLista2]);
        contadorLista2++;
    }else if(lista1[contadorLista1].valor == lista2[contadorLista2].valor){
        listaNova.push(lista1[contadorLista1]);
        listaNova.push(lista2[contadorLista2]);
        contadorLista1++;
        contadorLista2++;
    }
   
};
while(contadorLista1 < lista1.length){
    listaNova.push(lista1[contadorLista1]);
    contadorLista1++;
};
while(contadorLista2 < lista2.length){
    listaNova.push(lista2[contadorLista2]);
    contadorLista2++;
}

console.log(listaNova);