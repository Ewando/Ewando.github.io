<?php 

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "bloom";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  
  $email= $_POST['email'];
  $fname= $_POST['fname'];
  $lname= $_POST['lname'];
  $password= $_POST['password'];

  $sql = "INSERT INTO Users (FirstName, LastName, Username, Password) VALUES ('$fname', '$lname', '$email', '$password')";

  if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
  } else {
    echo "Error: " . $sql . "<br>" . $conn->error;
  }

$conn->close();
  
}


?>
