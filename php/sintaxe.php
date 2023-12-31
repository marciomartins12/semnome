<?php


$pe1 = ["nome"=> "teste nome", "valor" => 1213];
$pe2 = ["nome"=> "nome 2", "valor" => 0213];
$pe3 = ["nome"=> "mn3", "valor" => 12134];



$lista = [$pe1, $pe2, $pe3];

foreach($lista as $chave=>$item){
    echo "posicao[".$chave."] => nome:".$item["nome"]."valor:".$item["valor"].".\n";
};






// $listaPessoas = [
//     'nome' => "Márcio José Martins Câmara",
//     'salario' => 123423.92,
//     'idade' => 21
// ];

// echo "Info: nome:".$listaPessoas['nome']." idade:".$listaPessoas['idade']." salario:".$listaPessoas['salario'].".";






// $lista = [44,55,48,7,5,"testesevai"];
// for($x = 0; $x< count($lista); $x++){
//     echo "exide indice: $x = posicao: ". $lista[$x]."\n";
// }
// echo count($lista);






// $minhaIdade = 10;
// $entrou = false;
// $acompanho = true;

// echo "\t-----------Festa--------\n";
// echo "So se pode entrar na festa maiores de 18 anos ou acomphado.\n";

// if($minhaIdade >= 18 || $acompanho){
//     $entrou = true;
    
// }
// $reposta = $entrou? "\tpode entrar\n":"\tvoce nao pode entrar\n";


// echo $reposta;