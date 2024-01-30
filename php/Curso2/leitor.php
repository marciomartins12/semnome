<?php 
$arquivo = fopen("teste.json", "r");

$comprimentoDoArquivo = filesize("teste.json");

$resultado = fread($arquivo, $comprimentoDoArquivo);

echo $resultado;