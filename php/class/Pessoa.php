<?php
namespace Semnome\Php\class\Pessoa;
class Pessoa{
    private string $nome;
    public function __construct(string $nome){
        $this -> nome = $nome;
    }
}