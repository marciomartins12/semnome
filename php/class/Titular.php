<?php 
namespace Semnome\php\class\Titular;
use Semnome\php\class\Pessoa;

spl_autoload_register(function($nome){
    $resultado = str_replace("Semnome\php\class\\","", $nome);
    $resultado = str_replace("\\",DIRECTORY_SEPARATOR, $resultado);
    $resultado .=".php";
    if(file_exists($resultado)){
        echo $resultado;
        return require_once $resultado;
    }
});
class Titular extends Pessoa{
    
    
    private string $endereco;
    
    public function __construct(string $nome, Cpf $cpf, string $endereco) {
        $this->nome = $nome;
        $this->endereco = $endereco;
        $this->cpf = $cpf;
    } 

    public function getname(){
        return $this->nome;
    }
}




$new = new Titular("nome", new Cpf("123.321.123-12"), "rua da rua");
var_dump($new);
echo $new->getname();
echo $new->cpf->getCpf();