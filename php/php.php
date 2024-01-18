<?php 


class Conta{
    public $nome;
    public $saldo;

    public function adicionarSaldo(float $valor){
        if($valor > 0){
            $this->saldo = $valor;
        }
    }
    public function adicionarNome(string $valor){
        $this->nome = $valor; 
    }
};

$conta = new conta();

$conta->adicionarSaldo(250);
$conta->adicionarNome("Márcio José Martins Câmara");
var_dump($conta);