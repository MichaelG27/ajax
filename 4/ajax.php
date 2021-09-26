<?php
header('Access-Control-Allow-Origin: *');

$arr = array(
  "1" => 'user 1',
  "2" => "user 2",
  "3" => "user 3",
  "4" => "user 4",
  "5" => "user 5",
  "6" => "user 6",
  "7" => "user 7",
  "8" => "user 8",
  "9" => "user 9",
  "10" => "user 10",
  "11" => "user 11",
  "12" => "user 12"
);
$data = json_encode($arr);
echo $data;