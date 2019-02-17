<?php


//验证用户名
header("content-type:text/html;charset=utf-8");
$tex = isset($_POST['name']) ? $_POST['name'] : '';
    // echo $tex;
   include 'data.php';


    $sql = "SELECT * FROM users WHERE username='$tex'";

    $arr = $conn->query($sql);

    $str = $arr->fetch_all(MYSQLI_ASSOC);

    if ($arr->num_rows > 0) {
        echo 0;
    } else {
        echo 1;
    }







?>