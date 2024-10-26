<?php
    header('Access-Control-Allow-Origin: *');

    $entityBody = file_get_contents("php://input");
    $Decoded = json_decode($entityBody, true);

    $Username = $Decoded["Username"];
    $Password = $Decoded["Password"];

    $TestArray = array(
        "isCorrect" => "Alright"
    );

    if ($Username == "admin" || $Password == "admin"){
        echo json_encode($TestArray);
    } else {
        echo "No";
    }
?>