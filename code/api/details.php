<?php

header("content-type:text/html;charset=utf-8");

//详情页的渲染


$title = isset($_GET['title']) ? $_GET['title']: '';
// echo $title;
include 'data.php';

$sql2="SELECT * FROM goodlist WHERE id =$title";

$num1 = $conn->query($sql2);    

$row3 = $num1->fetch_all(MYSQLI_ASSOC);
                


echo json_encode($row3, JSON_UNESCAPED_UNICODE);

$conn->close();
$num1->close();

?>