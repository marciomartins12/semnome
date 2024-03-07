<?php
$array = [
    "key1"=> 21,
    "key2"=> 21,
   "key3"=> 21,
];
$array2 = [
   "key1"=> 21,
   "key2"=> 21,
   "key4"=> 21,
];
var_dump(
    array_diff_key($array, $array2)
);
