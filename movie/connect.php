<?php
    $fullname = $_POST['fullname'];
    $lastname = $_POST['lastname'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $number = $_POST['number'];

    //Database connection 
    $conn = new mysqli('localhost/127.0.0.1','root','','test');
    if ($conn->connect_error) {
        die('Connecion Failed : ' .$conn->connect_error);
    }else{
        $stmt = $conn->prepare("insert into registration(fullname, lastname, email, password ,number)
            values(?, ?, ?, ?,?)");
        $stmt->bind_param("ssssi", $fullname, $lastname, $email, $password, $number);
        $stmt->execute();
        echo"registration successfully...";
        $stmt->close();
        $conn->close();
    }
?>