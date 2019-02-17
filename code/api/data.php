<?php

header("content-type:text/html;charset=utf-8");

$servername = 'localhost';
$username = 'root';
$passwore = '';
$dbname = 'interface';

$conn = new mysqli($servername, $username, $passwore, $dbname);

if ($conn->connect_error) {
    die('连接失败:' . connect_arror);
} else {
        // echo '连接成功';
}


?>