<?php 


class Conta{
    
    private $nome;
    private $cpf;
    private $saldo;
    private static $numerodecontas;

    function __construct(string $nome, string $cpf){
        $this->nome = $nome;
        $this->cpf = $cpf;
        $this->saldo = 0;
        $this->validador($nome, $cpf);
        self::$numerodecontas++;
    }
    
    private function validador($nome, $cpf){
        if(strlen($nome) < 4 || strlen($cpf) < 11 || strlen($cpf) > 14 ){
            echo "invalido cpf ou nome";
            exit();
        }
    }
    public function exibenumerodecontas(){
        return self::$numerodecontas;
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

$conta = new conta("Márcio José Martins Câmara", "123.123.123.12");
$conta = new conta("Márcio José Martins Câmara", "123.123.123.12");
$conta = new conta("Márcio José Martins Câmara", "123.123.123.12");

$conta->adicionarSaldo(250);


echo "numero de contas <- ".$conta->exibenumerodecontas(). "\n";

var_dump($conta);