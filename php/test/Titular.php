<?php
 spl_autoload_register(function($nomeClass){
    $resultado = str_replace("test\\", "", $nomeClass);
    $resultado .= ".php";
    echo "\n" . $resultado;
    
    require_once strtolower($resultado);
});
class Titular{
    use test\Verifica;

    private string $nome;
    private int $idade;
    public function __construct(string $nome, string $idade){
        $this->nome = $nome;
        $this->idade = $idade;
    }
    
   
    public function __tostring():string{
        return  "meu nome é {$this->nome}, tenho {$this->idade}.";
    }


}

$novo = new Titular("marcio", 10);
echo $novo;
echo $novo->verificaidade()? "Adulto":"MnIdade";