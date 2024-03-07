<?php
$array = [
 "marcio"=> 2,
 "lucca" => 11
];

$array2 = [
"marcio" => 12,
"lucca" => 10
];

var_dump(array_diff($array2, $array));