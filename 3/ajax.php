<?php
header('Access-Control-Allow-Origin: *');

$arr = array(
  "1" => '13',
  "2" => "14",
  "3" => "15",
  "4" => "16",
  "5" => "17",
  "6" => "18",
  "7" => "19",
  "8" => "20",
  "9" => "21",
  "10" => "22",
  "11" => "23",
  "12" => "24"
);
$data = json_encode($arr);
echo $data;