<?php
$string = "marcio jose martins camara 123456789";

var_dump(str_contains($string, "jose"));
var_dump(str_ends_with($string, "89"));
var_dump(str_starts_with($string, "jose"));