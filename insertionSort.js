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

for(let atual = 1; atual < lista.length; atual ++ ){
    console.log("aiaias")
    for(let verifica = atual; verifica > 0 && lista[verifica].valor < lista[verifica - 1].valor; verifica--){
        let aux = lista[verifica];
        lista[verifica] = lista[verifica -1];
        lista[verifica -1] = aux;

    };
};
console.log(lista);