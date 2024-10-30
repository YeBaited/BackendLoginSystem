<?php
    header("Access-Control-Allow-Origin: http://localhost:5173");
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

    
    echo json_encode($data)


?>