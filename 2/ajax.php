<?php
header('Access-Control-Allow-Origin: *');

$data = $_GET['n'];
if ($data == 1) {
  echo "контент со страницы 1 ";
} elseif ($data == 2) {
  echo "контент со страницы 2";
} elseif ($data == 3) {
  echo "контент со страницы 3";
}