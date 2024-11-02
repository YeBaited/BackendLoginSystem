<?php

    header("Access-Control-Allow-Origin: http://localhost:5173");
    
    $payload = file_get_contents("php://input");
    $decode = json_decode($payload);

    echo $decode;
?>