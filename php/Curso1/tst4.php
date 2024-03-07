<?php
 $minhaIdade = 10;
 $entrou = false;
 $acompanho = true;

 echo "\t-----------Festa--------\n";
 echo "So se pode entrar na festa maiores de 18 anos ou acomphado.\n";

 if($minhaIdade >= 18 || $acompanho){
     $entrou = true;
    
 }
 $reposta = $entrou? "\tpode entrar\n":"\tvoce nao pode entrar\n";


 echo $reposta;