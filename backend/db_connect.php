<?php
$servername = "sql305.infinityfree.com";
$username = "if0_40460488";
$password = "rami270803";
$database = "if0_40460488_Movies";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $database);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
?>
