<?php
    $Server = "localhost";
    $Username = "root";
    $Password = "";

    $conn = new mysqli($Server, $Username, $Password);

    if ($conn->connect_error){
        die("Connection failed: " . $conn->connect_error);
    }

    echo ("Connection successfull!");

    $Usr = "johns";
    $pas = "doe";
    $sql = "SELECT * FROM logindb.logincredentials WHERE username = '$Usr' AND password ='$pas'";

    
    $result = $conn->query($sql);

    if ($result->num_rows > 0){
        echo "It does exist!";
    } else {
        echo "It does not exist!";
    }
    

?>