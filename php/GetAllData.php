<?php

    $db = "localhost";
    $username = "root";
    $password = "";

    $conn = new mysqli($db, $username, $password);

    if ($conn->connect_error){
        echo $conn->connect_error;
        die();
    }

    $query = "SELECT * FROM logindb.logincredentials";

    $req = $conn->query($query);

    $data = $req->fetch_all();

    foreach ($data as $value){
        echo json_encode($value) . "   \n"; 
    };


?>