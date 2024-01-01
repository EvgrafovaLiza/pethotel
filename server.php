<?php

$servername = "localhost";
$username = "root"; 
$password = "";
$dbname = "bookings"; 

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Cant take connection with database: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Обработка формы регистрации
    if (isset($_POST['email'])) {
        $username = $_POST['username'];
        $email = $_POST['email'];
        $password = password_hash($_POST['password'], PASSWORD_DEFAULT);

        // Подготовка SQL-запроса для вставки данных пользователя
        $stmt = $conn->prepare("INSERT INTO users (username, email, password) VALUES (?, ?, ?)");
        $stmt->bind_param("sss", $username, $email, $password);
        $stmt->execute();

        if ($stmt->error) {
            echo "Error: " . $stmt->error;
        } else {
            echo "New user registered successfully";
        }

        $stmt->close();
    }

    // Обработка формы бронирования
    if (isset($_POST['arrivalDate'])) {
        $arrivalDate = $_POST["arrivalDate"];
        $departureDate = $_POST["departureDate"];
        $petsNumber = $_POST["petsNumber"];
        $roomType = $_POST["roomType"];
        $userName = $_POST["userName"];
        $userTelephone = $_POST["userTelephone"];
        $userEmail = $_POST["userEmail"];

        $sql = "INSERT INTO bookings (arrivalDate, departureDate, petsNumber, roomType, userName, userTelephone, userEmail)
            VALUES ('$arrivalDate', '$departureDate', '$petsNumber', '$roomType', '$userName', '$userTelephone', '$userEmail')";

    if ($conn->query($sql) === TRUE) {
        echo "the record was successfully added to the database";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}}
$conn->close();
?>