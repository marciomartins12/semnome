<?php


$list = [
    "609.232.111-00" => [
        "nome"=> "marcio",
        "valor" => 21
    ],
    "123.323.434-11" => [
        "nome"=> "Thatyla",
        "valor" => 21

    ]
    ];
unset($list["609.232.111-00"]["nome"]);

foreach($list as $item){
    echo ("item nome :$item[nome] valor $item[valor]\n");
}