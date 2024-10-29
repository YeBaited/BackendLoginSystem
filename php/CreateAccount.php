<?php
    header("Access-Control-Allow-Origin: http://localhost:5173");

    function doReturn($Reason){
        $ReturnData = Array(
            "Reason" => $Reason
        );

        return json_encode($ReturnData);
    }

    $body = file_get_contents("php://input");
    $decodedBody = json_decode($body, true);
    
    $IllegalSymbols = '/[\'^£$%&*()}{@#~?><>,|=_+¬-]/';


    if (is_null($decodedBody)){
        echo doReturn("No body");
        die();
    }

    if (is_null($decodedBody["Username"]) || $decodedBody["Username"] == "" ){
        echo doReturn("No username");
        die();
    }

    if (is_null($decodedBody["Password"]) || $decodedBody["Password"] == ""){
        echo doReturn("No password");
        die();
    }

    if (preg_match($IllegalSymbols, $decodedBody["Username"]) > 0){
        echo doReturn("Illegal Symbol was created!");
        die();
    }

    $Server = "localhost";
    $Username = "root";
    $Password = "";


    $conn = new mysqli($Server, $Username, $Password);

    if ($conn->connect_error){
        echo doReturn("There was an error accessing the dB");
        die();
    }

    $e = strtolower($decodedBody["Username"]);
    
    $SqlQueryCheck1 = "SELECT * FROM logindb.logincredentials WHERE username = '$e'";

    $result1 = $conn->query($SqlQueryCheck1);

    if ($result1->num_rows > 0){
        echo doReturn("The account name is already used");
        die();
    }

    $SqlQuery2 = "INSERT INTO logindb.logincredentials (username, password, about) VALUE ('$e', '{$decodedBody["Password"]}', 'RANDOM')";

    $result2 = $conn->query($SqlQuery2);

    echo doReturn("The account was created successfully");
    die();


?>