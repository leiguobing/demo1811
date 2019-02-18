<?php

header("content-type:text/html;charset=utf-8");
//购物车的增删改查

$gid = isset($_GET['gid']) ? $_GET['gid']: '';
$jiangid = isset($_GET['jiangid']) ? $_GET['jiangid']: '';
$jiagid = isset($_GET['jiagid']) ? $_GET['jiagid']: '';
$jiannum = isset($_GET['jiannum']) ? $_GET['jiannum']: '';
// echo $gid;
include 'data.php';


//查询数据，渲染到购物车
$sql2 = "SELECT * FROM shopping";
$num1 = $conn->query($sql2);    
$row3 = $num1->fetch_all(MYSQLI_ASSOC);

//根据前段传来ID删除数据库表
$dete="DELETE FROM shopping WHERE id=$gid";
$tre = $conn->query($dete); 


//更新数据库的商品数量

$upd ="UPDATE shopping SET total=$jiannum WHERE id=$jiangid ";
$tre = $conn->query($upd); 


$upd ="UPDATE shopping SET total=$jiannum WHERE id=$jiagid";
$tre = $conn->query($upd); 


echo json_encode($row3, JSON_UNESCAPED_UNICODE);



$conn->close();
$num1->close();
// $tre->close();




?>