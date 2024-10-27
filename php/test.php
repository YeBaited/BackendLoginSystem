<?php
    header('Access-Control-Allow-Origin: http://localhost:5173');

    $entityBody = file_get_contents("php://input");
    $Decoded = json_decode($entityBody, true);

    $DataToReturn = array(
        "AllowedAccess" => false,
    );
    
    if ($Decoded["Username"] === "admin" and $Decoded["Password"] === "admin"){
        $DataToReturn["AllowedAccess"] = true;
    } else {
        $DataToReturn["AllowedAccess"] = false;
    };


    echo json_encode($DataToReturn)


?>