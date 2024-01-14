<?php

$array = [
    "nome" => "marcio",
    "idade" => 21
];
extract($array);

echo $nome;

$formulario=compact("nome", "idade");
var_dump($formulario);