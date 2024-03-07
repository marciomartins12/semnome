<?php 
$arquivo = fopen("teste.json", "r");
$teste = fopen("aaaa.txt", "a");

fwrite($teste, "aaaaaaaa");

$comprimentoDoArquivo = filesize("teste.json");

$resultado = fread($arquivo, $comprimentoDoArquivo);

echo $resultado;
fclose($teste);
fclose($arquivo);
