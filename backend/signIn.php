<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

header("Access-Control-Allow-Origin: https://movienight.42web.io");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit;
}

// Include the MySQLi connection
include 'db_connect.php';

$enteredEmail = $_POST['email'] ?? '';
$enteredPassword = $_POST['pwd'] ?? '';

if (empty($enteredEmail) || empty($enteredPassword)) {
    echo json_encode(["status" => "error", "message" => "All fields are required"]);
    exit;
}

// Check if user exists
$query = "SELECT Id, Nom, Email, Password FROM movieusers WHERE Email = ?";
$stmt = mysqli_prepare($conn, $query);
mysqli_stmt_bind_param($stmt, "s", $enteredEmail);
mysqli_stmt_execute($stmt);
$result = mysqli_stmt_get_result($stmt);

if ($user = mysqli_fetch_assoc($result)) {
    if (password_verify($enteredPassword, $user['Password'])) {
        echo json_encode([
            "status" => "success",
            "message" => "Login successful",
            "user" => [
                "id" => $user['Id'],
                "name" => $user['Nom'],
                "email" => $user['Email']
            ]
        ]);
    } else {
        echo json_encode(["status" => "error", "message" => "Invalid password"]);
    }
} else {
    echo json_encode(["status" => "error", "message" => "Account not found"]);
}

mysqli_stmt_close($stmt);
mysqli_close($conn);
?>
