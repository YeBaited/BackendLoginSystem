<?php
    header('Access-Control-Allow-Origin: http://localhost:5173');

    $body = file_get_contents("php://input");
    $decodedBody = json_decode($body, true);    

    $IllegalSymbols = '/[\'^£$%&*()}{@#~?><>,|=_+¬-]/';
    
    if (is_null($decodedBody)){
        die();
    }

    if (preg_match($IllegalSymbols, $decodedBody["Username"]) > 0){
        die();
    }

    if (preg_match($IllegalSymbols, $decodedBody["Password"]) > 0){
        die();
    }

    $Usr = strtolower($decodedBody["Username"]);
    $pas = $decodedBody["Password"];


    $Server = "localhost";
    $Username = "root";
    $Password = "";

    $ToSend = array(
        "canLogin" => false,
        "reason" => "UNK",
        "CookieToSend" => "UNK",
    );

    $conn = new mysqli($Server, $Username, $Password);

    if ($conn->connect_error){
        die("Connection failed: " . $conn->connect_error);
    }


    $sql = "SELECT * FROM logindb.logincredentials WHERE username = '$Usr' AND password ='$pas'";
    

    $result = $conn->query($sql);



    if ($result->num_rows > 0){
        if ($pas == $result->fetch_row()[2]){
            
            $ToSend["canLogin"] = true;
            $ToSend["reason"] = "Success";
            $ToSend["CookieToSend"] = hash("sha256", $Usr);
    
            echo json_encode($ToSend);
            die();
        }

        
    } 
    
    
    $ToSend["canLogin"] = false;
    $ToSend["reason"] = "Does not exist";
    $ToSend["CookieToSend"] = "";

    echo json_encode($ToSend);
    

?>