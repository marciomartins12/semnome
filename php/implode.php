<?php


$array =  [
    "marcio",
    "jose",
    21
];

$str = implode(" ", $array);

var_dump($str);


$string = "123.154.456-12";

$cpf = explode(".", $string);

$cpf = implode($cpf);

$cpf = explode("-", $cpf);

$cpf = implode($cpf);

var_dump($cpf);