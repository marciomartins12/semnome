<?php 

require_once "Cpf.php";

class Titular{
    
    private string $nome;

    public function __construct(string $nome, Cpf $cpf) {
        $this->nome = $nome;
        $this->cpf = $cpf;
    } 

    public function getname(){
        return $this->nome;
    }
}




$new = new Titular("nome", new Cpf("123.321.123-12"));
var_dump($new);
echo $new->getname();
echo $new->cpf->getCpf();