<?php
    $username = $_POST['user'];
    $password = $_POST['pass'];
    $userFile = "data/".$username.".txt";
    if(file_exists($userFile) == false){
        $output="false";
        echo $output;
    }
    else{
        $passinFile ="";
        $fp = fopen($userFile,"r");
        while(! feof($fp)){
            $passinFile= fgets($fp);
        }
        if($passinFile != $password){
            $output="wrong";
            echo $output;
        }
        else{
            $output ="true";
            echo $output;
        }
    }