<?php


//注册功能
header("content-type:text/html;charset=utf-8");
$tex = isset($_POST['name']) ? $_POST['name'] : '';
$psw = isset($_POST['psw']) ? $_POST['psw'] : '';
    // echo $psw, $tex;
include 'data.php';

$sql = "SELECT * FROM users WHERE username='$tex'";
$arr = $conn->query($sql);

$ssa = $arr->num_rows;

if($ssa>=1){ 
    echo 0;
}else{
    echo 1 ;
    $trr = "INSERT INTO users(username, password) VALUES('$tex', '$psw')";
    $qww = $conn->query($trr);
}



$conn->close();
$arr->close();



?>