<?php

$string = "Marcio Camara";

$arrayNomeSobrenome = explode(" ", $string);

var_dump($arrayNomeSobrenome);

[$nome, $sobrenome] = [...$arrayNomeSobrenome];

echo "nome: $nome, sobrenome: $sobrenome.";