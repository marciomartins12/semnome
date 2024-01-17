<?php 


class Conta{
    public $nome;
};

$conta = new conta();

$conta -> nome = "lucas";

$conta2 = $conta;

var_dump($conta2);