<?php

    header("Access-Control-Allow-Origin: http://localhost:5173");
    
    $payload = file_get_contents("php://input");
    $decode = json_decode($payload, true);


    $server = "localhost";
    $username = "root";
    $password = "";

    $conn = new mysqli($server, $username, $password);

    $quer = $conn->query($decode["query"])

?>