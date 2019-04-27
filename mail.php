<?php
include('includes/dbconnect.php');
// save email and put it into database
// check if email already exists in database

// from the form
    $fname = trim(strip_tags($_POST['fname']));
    $lname = trim(strip_tags($_POST['lname']));
    $email = htmlentities($_POST['email']);
    $message = htmlentities($_POST['message']);

// combind first name and last name into one
    $name = $fname. " ". $lname;

// setup 
    $subject = "$name";
    $to = 'chris@lascarproductions.com';
    
    $body = $message;

    $headers = "From: $email\r\n";
    $headers .= "Content-type: text/html\r\n";

// send the email
    mail($to, $subject, $body, $headers);

// redirect afterwords
    header('Location: thanks.php');

// on submit, push info to database

    // store user info into variables with security
    $firstName = mysqli_real_escape_string($conn, $_POST['fname']);
    $lastName = mysqli_real_escape_string($conn, $_POST['lname']);
    $emailAddress = mysqli_real_escape_string($conn, $_POST['email']);
  
    // prepare sql statement
    $sql = "INSERT INTO userInfo (Lname, Fname, Emails)
        VALUES ('$lastName', '$firstName', '$emailAddress')";
    
    $conn->query($sql);
?>