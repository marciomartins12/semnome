<?php
$pe1 = ["nome"=> "teste nome", "valor" => 1213];
 $pe2 = ["nome"=> "nome 2", "valor" => 0213];
 $pe3 = ["nome"=> "mn3", "valor" => 12134];



 $lista = [$pe1, $pe2, $pe3];

 foreach($lista as $chave=>$item){
     echo "posicao[".$chave."] => nome:".$item["nome"]."valor:".$item["valor"].".\n";
 };