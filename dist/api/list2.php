<?php

header("content-type:text/html;charset=utf-8");

//列表页的渲染功能

$title = isset($_GET['title']) ? $_GET['title'] : '';
$page = isset($_GET['page']) ? $_GET['page'] : '';
$qty = isset($_GET['qty']) ? $_GET['qty'] : '';

// echo $page,$qty;
include 'data.php'; 
$index = ($page-1)* $qty;

$sql1 = "SELECT * FROM goodlist WHERE sort_1 LIKE '%$title%' LIMIT $index,$qty;";
$sql2 = "SELECT * FROM goodlist WHERE sort_1 LIKE '%$title%'";

// var_dump($sql3);
$num1 = $conn->query($sql1);
$num2 = $conn->query($sql2);

$row1 = $num1->fetch_all(MYSQLI_ASSOC);
$row2 =$num2->num_rows;

$ttr = array(
    'cont' => $row1,
    'rst' => $row2,
    'page' => $page,
    'qty' => $qty

);

echo json_encode($ttr, JSON_UNESCAPED_UNICODE);

$conn->close();
$num1->close();
$num2->close();
?>