<?php
    header('Access-Control-Allow-Origin: *');
    $entityBody = file_get_contents('php://input');

    $Pass = null;
    $User = null;


    if (isset($_POST["Username"])){
        $User = $_POST["Username"];
    }

    if (isset($_POST["Password"])){
        $Pass = $_POST["Password"];
    }
    

    if ($Pass == "Correct"){
        echo "Correct password!";
    }else {
        echo "Incorrect password!";
    }
    echo "\n  The password you just typed: {$Pass}";
?>