<?php 


class Conta{
    
    private $nome;
    private $cpf;
    private $saldo;

    function __construct(string $nome, string $cpf){
        $this->nome = $nome;
        $this->cpf = $cpf;
        $this->saldo = 0;
    }
    

    public function adicionarSaldo(float $valor):void{
        if($valor > 0){
            $this->saldo = $valor;
            return;
        }
        echo "valor precisa ser positivo";
    }
    public function adicionarNome(string $valor):void{
        $this->nome = $valor; 
    }
};

$conta = new conta("marcio jose", "123.321.231-23");

$conta->adicionarSaldo(250);
var_dump($conta);