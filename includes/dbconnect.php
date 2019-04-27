<?php
// lascarproductions87362.ipagemysql.com
$servername = "lascarproductions87362.ipagemysql.com";
$username = "lascar";
$password = "sk8ter23";
$dbname = "lascar";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
?>