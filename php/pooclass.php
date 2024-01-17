<?php

class UserCurrent{
    public $usuario;
    public $email;

};

$p = new UserCurrent;

$p -> usuario = "Marcio";
$p -> email = "mmarciom1martins635@gmail.com";

var_dump($p);
