<?php

class Empregado extends Pessoa{
    private string $trabalho;

    public function __construct($trabalho){

    $this->trabalho = $trabalho;

    }
    public function getTrabalho(){
        return $this->trabalho;
    }
};