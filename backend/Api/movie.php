<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

$apiKey = '784c2d7b';
$query = $_GET['s'] ?? '';

$url = "http://www.omdbapi.com/?apikey={$apiKey}&s={$query}";
$response = file_get_contents($url);

echo $response;
?>