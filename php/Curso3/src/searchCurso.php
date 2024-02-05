<?php

require_once '../vendor/autoload.php';

use GuzzleHttp\Client;
use Symfony\Component\DomCrawler\Crawler;
$client = new Client();
$resposta = $client->request("GET", 'https://cursos.alura.com.br/user/marciom1martins635/fullCertificate/ec4a9e4212cf8ec94ce64ff1cee49545', [
    'auth'=> ['user', 'pass']
]);

$html = $resposta->getBody();

$crawler = new  Crawler();
$crawler->addHtmlContent($html);

$cursos = $crawler->filter("li.content-courseList-courseName");
var_dump($cursos);
foreach( $cursos as $curso){
  echo $curso->textContent;
};