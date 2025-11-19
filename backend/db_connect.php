<?php

$host = "sql305.infinityfree.com";
$user = "if0_40460488";
$pass = "rami270803";
$db   = "if0_40460488_Movies";

$conn = mysqli_connect($host, $user, $pass, $db);

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
?>
