<?php
    header('Access-Control-Allow-Origin: http://localhost:5173/');
    
    $Pass = $_POST["Username"];
    $User = $_POST["Password"];

    echo "Your Password is {$Pass}";
    echo "Your Username is {$User}";
?>