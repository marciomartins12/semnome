<?php 
$string = "123.154.456-12";

$cpf = str_replace([".", "-"], "",$string );

var_dump($cpf);