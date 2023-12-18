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
        nome : "Barney",
        valor : 2,
    },
    {
        nome : "Barney",
        valor : 10,
    },
    {
    nome : "Barney",
    valor : 14,
},
{
    nome : "Marshal",
    valor : 15,
},
{
    nome : "Lilian",
    valor : 70,
}
];
for(let contadorLista1 = 0, contadorLista2 = 0, listaNova = [], contVez ;contadorLista1 < lista1.length && contadorLista2 < lista2.length; contVez++){
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
    console.log("aaaaaaaaaaaaaaaaaaaaa")
    console.log(listaNova)
}