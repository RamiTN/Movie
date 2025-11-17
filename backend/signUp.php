<?php

header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit;
}

$servername = "localhost";
$username = "root";
$password = "";
$database = "Movies";

try {

    $conn = new PDO("mysql:host=$servername;dbname=$database", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    $enteredEmail = $_POST['email'] ?? '';
    $enteredPassword = $_POST['pwd'] ?? '';
    $enteredName = $_POST['name'] ?? '';
    
    // Validate input
    if (empty($enteredEmail) || empty($enteredPassword) || empty($enteredName)) {
        echo json_encode(["status" => "error", "message" => "All fields are required"]);
        exit;
    }
    
    $hashed_password = password_hash($enteredPassword, PASSWORD_DEFAULT);
    
    // Check if email exists - use lowercase table name
    $checkStmt = $conn->prepare("SELECT Email FROM movieusers WHERE Email = :email");
    $checkStmt->bindParam(':email', $enteredEmail);
    $checkStmt->execute();
    
    if ($checkStmt->rowCount() > 0) {
        echo json_encode(["status" => "error", "message" => "Account already exists"]);
    } else {

        // Insert into movieusers table
        $insertStmt = $conn->prepare("INSERT INTO movieusers (Nom, Email, Password) VALUES (:name, :email, :password)");
        $insertStmt->bindParam(':name', $enteredName);
        $insertStmt->bindParam(':email', $enteredEmail);
        $insertStmt->bindParam(':password', $hashed_password);
        
        if ($insertStmt->execute()) {
            echo json_encode(["status" => "success", "message" => "Account created"]);
        } else {
            echo json_encode(["status" => "error", "message" => "Failed to create account"]);
        }
    }
    
} catch(PDOException $e) {
    echo json_encode(["status" => "error", "message" => "Database error: " . $e->getMessage()]);
}

$conn = null;

?>