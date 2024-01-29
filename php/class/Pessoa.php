<?php
namespace class;
class Pessoa{
    private string $nome;
    public function __construct(string $nome){
        $this -> nome = $nome;
    }
}