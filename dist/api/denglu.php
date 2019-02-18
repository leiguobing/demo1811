<?php

header("content-type:text/html;charset=utf-8");

//登录功能

$tex = isset($_POST['name']) ? $_POST['name'] : '';
$psw = isset($_POST['psw']) ? $_POST['psw'] : '';
// echo $tex,$psw;

include 'data.php';

$arr = "SELECT * FROM users WHERE username = '$tex' AND password = '$psw'";
$sql = $conn->query($arr);

$row = $sql->fetch_all(MYSQLI_ASSOC);  
 
// var_dump($row);


$aww = $sql->num_rows;
if ($aww > 0) {

    $row1 = array(
        'num' => 0,
        'cont' => $row
    );
    echo json_encode($row1, JSON_UNESCAPED_UNICODE);
} else {
    echo 1;
}

?>