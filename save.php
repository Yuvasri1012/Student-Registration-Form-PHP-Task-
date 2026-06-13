<?php

$connect = mysqli_connect("localhost","root","","student_db");

if(!$connect){
    exit("Connection Failed : " . mysqli_connect_error());
}

$name = $_POST['name'];
$email = $_POST['email'];
$mobile = $_POST['mobile'];

$sql = "INSERT INTO students(name,email,mobile)
        VALUES('$name','$email','$mobile')";

if(mysqli_query($connect,$sql)){
    echo "Data Inserted Successfully";
}
else{
    echo "Error to insert Data";
}

?>