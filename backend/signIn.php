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
    
    // Validate input
    if (empty($enteredEmail) || empty($enteredPassword)) {
        echo json_encode(["status" => "error", "message" => "All fields are required"]);
        exit;
    }
    
    // Check if user exists
    $stmt = $conn->prepare("SELECT Id, Nom, Email, Password FROM movieusers WHERE Email = :email");
    $stmt->bindParam(':email', $enteredEmail);
    $stmt->execute();
    
    if ($stmt->rowCount() > 0) {
        $user = $stmt->fetch(PDO::FETCH_ASSOC);
        
        // Verify password
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
    
} catch(PDOException $e) {
    echo json_encode(["status" => "error", "message" => "Database error: " . $e->getMessage()]);
}

$conn = null;

?>