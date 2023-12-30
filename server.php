<?php
// Конфигурация для подключения к базе данных MySQL
$servername = "localhost";
$username = "root"; // Имя пользователя базы данных
$password = ""; // Пароль для доступа к базе данных
$dbname = "bookings"; // Имя базы данных

// Создание подключения к базе данных
$conn = new mysqli($servername, $username, $password, $dbname);

// Проверка подключения
if ($conn->connect_error) {
    die("Cant take connection with database: " . $conn->connect_error);
}

// Проверка, был ли запрос методом POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Получение данных из формы
    $arrivalDate = $_POST["arrivalDate"];
    $departureDate = $_POST["departureDate"];
    $petsNumber = $_POST["petsNumber"];
    $roomType = $_POST["roomType"];
    $userName = $_POST["userName"];
    $userTelephone = $_POST["userTelephone"];
    $userEmail = $_POST["userEmail"];

    // SQL-запрос для вставки данных в таблицу
    $sql = "INSERT INTO bookings (arrivalDate, departureDate, petsNumber, roomType, userName, userTelephone, userEmail)
            VALUES ('$arrivalDate', '$departureDate', '$petsNumber', '$roomType', '$userName', '$userTelephone', '$userEmail')";

    if ($conn->query($sql) === TRUE) {
        echo "the record was successfully added to the database";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

// Закрытие соединения с базой данных
$conn->close();
?>