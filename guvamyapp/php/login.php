<?php
// database connection code

// $con = mysqli_connect('localhost', 'database_user', 'database_password','database');
$con = mysqli_connect('localhost', 'root', '','guva');

// get the post records

$userName = $_POST['userName'];
$password = $_POST['password'];

$query="SELECT * from userdetails WHERE username = '$userName'";
  $exec=mysqli_query($con, $query);
  if(mysqli_num_rows($exec)>0){
    //$row= mysqli_fetch_all($exec, MYSQLI_ASSOC);
    echo "record fetched succesfully";
 
    
        
  }else{
    echo "User not exist please create user to login";
    //return $row=[];
  }

?>