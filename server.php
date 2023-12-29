<?php
// Replace these values with your MySQL database credentials
$host = 'your_mysql_host';
$username = 'your_mysql_username';
$password = 'your_mysql_password';
$database = 'your_mysql_database';

// Create a connection to MySQL
$conn = new mysqli($host, $username, $password, $database);

// Check the connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Retrieve form data
    $arrivalDate = $_POST['arrivalDate'];
    $departureDate = $_POST['departureDate'];
    $petsNumber = $_POST['petsNumber'];
    $roomType = $_POST['roomType'];
    $userName = $_POST['userName'];
    $userTelephone = $_POST['userTelephone'];
    $userEmail = $_POST['userEmail'];

    // Prepare and execute the SQL query to insert data
    $stmt = $conn->prepare("INSERT INTO bookings (arrivalDate, departureDate, petsNumber, roomType, userName, userTelephone, userEmail) VALUES (?, ?, ?, ?, ?, ?, ?)");
    $stmt->bind_param('ssissss', $arrivalDate, $departureDate, $petsNumber, $roomType, $userName, $userTelephone, $userEmail);
    
    if ($stmt->execute()) {
        echo "Booking saved to the MySQL database";
    } else {
        echo "Error saving data to the database: " . $stmt->error;
    }

    // Close the statement
    $stmt->close();
}

// Close the database connection
$conn->close();
?>
