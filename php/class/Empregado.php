<?php

class Empregado{
    private string $trabalho;

    public function __construct($trabalho){

    $this->trabalho = $trabalho;

    }
    public function getTrabalho(){
        return $this->trabalho;
    }
};