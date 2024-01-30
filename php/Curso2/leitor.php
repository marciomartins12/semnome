<?php 
$arquivo = fopen("texto.txt", "r");

$comprimentoDoArquivo = filesize("texto.txt");

$resultado = fread($arquivo, $comprimentoDoArquivo);

echo $resultado;