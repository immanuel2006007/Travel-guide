<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Database connection settings
    $servername = "localhost"; // Change if necessary
    $username = "root";        // Change to your database username
    $password = "";            // Change to your database password
    $dbname = "travel_guide";  // The database we created

    // Get the form data
    $name = htmlspecialchars(trim($_POST["name"]));
    $phone = htmlspecialchars(trim($_POST["phone"]));
    $email = htmlspecialchars(trim($_POST["email"]));
    $message = htmlspecialchars(trim($_POST["message"]));

    // Validate inputs
    if (empty($name) || empty($phone) || empty($email) || empty($message)) {
        die("All fields are required.");
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        die("Invalid email address.");
    }

    // Create a database connection
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Prepare and bind
    $stmt = $conn->prepare("SELECT email From contact Where email = ? Limit 1");
    $stmt = $conn->prepare("INSERT INTO contact (name, phone, email, message) VALUES (?, ?, ?, ?)");
    $stmt->bind_param("siss", $name, $phone, $email, $message);

    // Execute the query
    if ($stmt->execute()) {
        echo "Thank you for contacting us. Your message has been received.";
    } else {
        echo "Oops! Something went wrong. Please try again later.";
    }

    // Close the statement and connection
    $stmt->close();
    $conn->close();
} else {
    die("Invalid request method.");
}
?>
