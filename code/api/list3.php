<?php

header("content-type:text/html;charset=utf-8");
include 'data.php';
 
//排庝功能
$title = isset($_GET['title']) ? $_GET['title'] : '';
$page = isset($_GET['page']) ? $_GET['page'] : '';
$qty = isset($_GET['qty']) ? $_GET['qty'] : '';
$gg = isset($_GET['gg']) ? $_GET['gg'] : '';
// echo $gg;

$index = ($page-1)* $qty;

// if($gg==1){

$sql3 = "SELECT * FROM goodlist WHERE sort_1 LIKE '%$title%' ORDER BY Presentprice DESC  LIMIT $index,$qty";
$sql4 = "SELECT * FROM goodlist WHERE sort_1 LIKE '%$title%'";

$num3 = $conn->query($sql3);
$num4 = $conn->query($sql4);
$row5 = $num4->num_rows;

$row6 = $num3->fetch_all(MYSQLI_ASSOC);


$ttr1 = array(
    'cont' => $row6,
    'rst' => $row5
);

echo json_encode($ttr1, JSON_UNESCAPED_UNICODE);


// }else{

// $sql1 = "SELECT * FROM goodlist WHERE sort_1 LIKE '%$title%' LIMIT $index,$qty;";
// $sql2 = "SELECT * FROM goodlist WHERE sort_1 LIKE '%$title%'";

// // var_dump($sql3);
// $num1 = $conn->query($sql1);
// $num2 = $conn->query($sql2);

// $row1 = $num1->fetch_all(MYSQLI_ASSOC);
// $row2 =$num2->num_rows;

// $ttr = array(
//     'cont' => $row1,
//     'rst' => $row2,
//     'page' => $page,
//     'qty' => $qty

// );

// echo json_encode($ttr, JSON_UNESCAPED_UNICODE);


// }










 

    


// $conn->close();
// $num1->close();
// $num2->close();
?>