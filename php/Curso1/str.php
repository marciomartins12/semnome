<?php
$string = "marcio jose martins camara @ 123456789";
$pos = "";
// for($x = 0; $x < strlen($string); $x++){
//     if($string[$x] === "@"){
//         $pos = $x;
//     };
// };

// echo $x;



var_dump(str_contains($string, "jose"));

var_dump(str_ends_with($string, "89"));

var_dump(str_starts_with($string, "jose"));

var_dump(substr($string, 9, 9));

var_dump(substr($string,0, strpos($string, "@")));