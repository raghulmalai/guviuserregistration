<?php
// database connection code
if(isset($_POST['userName']))
{
// $con = mysqli_connect('localhost', 'database_user', 'database_password','database');
$con = mysqli_connect('localhost', 'root', '','guva');

// get the post records

$firstName = $_POST['firstName'];
$lastName = $_POST['lastName'];
$userName = $_POST['userName'];
$password = $_POST['password'];
$confirmpassword = $_POST['confirmpassword'];

// database insert SQL code
$sql = "INSERT INTO `userdetails` (`FirstName`, `LastName`, `UserName`, `Password`, `ConfirmPassword`) VALUES ( '$firstName', '$lastName', '$userName', '$password','$confirmpassword')";

// insert in database 
$rs = mysqli_query($con, $sql);
if($rs)
{
	echo "Contact Records Inserted";
}
}
else
{
	echo "Are you a genuine visitor?";
	
}
?>