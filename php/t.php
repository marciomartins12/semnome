<?php

$usercurrent = [
    "nome" => "André Agas",
    "idade" => 22,
    "viver" => true,
    "cpf" => "352-154-765-15",
    "pc" => [
        "defeito" => false,
    ],
];
$usercurrent["pc"]["defeito"] = true;

$usercurrent["pc"]["defeito"]? $usercurrent["viver"] = true: false;


echo "o pc esta". 
    ($usercurrent["pc"]["defeito"] == true? " com defeito. " : "normal" ).
    "Entao, $usercurrent[nome]".
    ( $usercurrent["viver"] == true ? " vai a praia.\n" : "ficar em casa jogando.\n");