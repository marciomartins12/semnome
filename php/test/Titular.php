<?php
use PHP\test;

class Titular{
    private string $nome;
    private int $idade;
    public function __construct(string $nome, string $idade){
        $this->nome = $nome;
        $this->idade = $idade;
    }
    public function __autoload($nomeClass){
        echo $nomeClass;
    }
    public function __tostring():string{
        return  "meu nome é {$this->nome}, tenho {$this->idade}.";
    }


}

$novo = new Titular("marcio", 21);
echo $novo;