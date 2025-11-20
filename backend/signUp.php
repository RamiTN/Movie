<?php
header("Access-Control-Allow-Origin: https://movienight.42web.io");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit;
}

// Include MySQLi connection
include 'db_connect.php';

$enteredEmail = $_POST['email'] ?? '';
$enteredPassword = $_POST['pwd'] ?? '';
$enteredName = $_POST['name'] ?? '';

if (empty($enteredEmail) || empty($enteredPassword) || empty($enteredName)) {
    echo json_encode(["status" => "error", "message" => "All fields are required"]);
    exit;
}

$hashed_password = password_hash($enteredPassword, PASSWORD_DEFAULT);

// Check if email exists
$checkQuery = "SELECT Email FROM movieusers WHERE Email = ?";
$stmt = mysqli_prepare($conn, $checkQuery);
mysqli_stmt_bind_param($stmt, "s", $enteredEmail);
mysqli_stmt_execute($stmt);
mysqli_stmt_store_result($stmt);

if (mysqli_stmt_num_rows($stmt) > 0) {
    echo json_encode(["status" => "error", "message" => "Account already exists"]);
    exit;
}
mysqli_stmt_close($stmt);

// Insert new user
$insertQuery = "INSERT INTO movieusers (Nom, Email, Password) VALUES (?, ?, ?)";
$stmt = mysqli_prepare($conn, $insertQuery);
mysqli_stmt_bind_param($stmt, "sss", $enteredName, $enteredEmail, $hashed_password);

if (mysqli_stmt_execute($stmt)) {
    echo json_encode(["status" => "success", "message" => "Account created"]);
} else {
    echo json_encode(["status" => "error", "message" => "Failed to create account"]);
}

mysqli_stmt_close($stmt);
mysqli_close($conn);
?>
