<?php
namespace test;
trait Verifica{
    public function verificaidade(){
       return $this->idade > 17? true : false ;
    }
}