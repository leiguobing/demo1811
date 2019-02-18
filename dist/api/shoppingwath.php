<?php


//加入购物车功能
header("content-type:text/html;charset=utf-8");
include 'data.php';
$title = isset($_GET['title']) ? $_GET['title'] : '';
$total = isset($_GET['num']) ? $_GET['num'] : '';
// echo $title;
// echo $num;

//根据传来的ID查出数据
$sql2 = "SELECT * FROM goodlist where id =$title";
$num1 = $conn->query($sql2);
$row3 = $num1->fetch_all(MYSQLI_ASSOC);

$tre = $row3[0];

//根据传来的ID判断购物车是否存在
$con = "SELECT * FROM shopping where id=$title";
$num2 = $conn->query($con);
$row4 = $num2->fetch_all(MYSQLI_ASSOC);
$tre1 = $row4[0];

$aa=$tre1['total']+$total;

$bb = $num2->num_rows;
//判断，存在就更新，不存在就插入
if($bb>0){
    $sql3 = "UPDATE shopping SET  total='$aa' WHERE id=$title";
    $numa = $conn->query($sql3);
    
}else {
    $arr = "INSERT INTO shopping(id,stock,username,introduce,intro,intro_1,sort_1,sort_2,sort_3,sort_4,Originalprice,Presentprice,img1,img2,img3,img4,img5,total) VALUES('$tre[id]','$tre[stock]','$tre[username]','$tre[introduce]','$tre[intro]','$tre[intro_1]','$tre[sort_1]','$tre[sort_2]','$tre[sort_3]','$tre[sort_4]',$tre[Originalprice],$tre[Presentprice],'$tre[img1]','$tre[img2]','$tre[img3]','$tre[img4]','$tre[img5]','$total')";
    $numb = $conn->query($arr);
}



// $arr = "INSERT INTO shopping(id,stock,username,introduce,intro,intro_1,sort_1,sort_2,sort_3,sort_4,Originalprice,Presentprice,img1,img2,img3,img4,img5,total) VALUES('$tre[id]','$tre[stock]','$tre[username]','$tre[introduce]','$tre[intro]','$tre[intro_1]','$tre[sort_1]','$tre[sort_2]','$tre[sort_3]','$tre[sort_4]',$tre[Originalprice],$tre[Presentprice],'$tre[img1]','$tre[img2]','$tre[img3]','$tre[img4]','$tre[img5]','$total')";

// $num2 = $conn->query($arr);









// $conn->close();
// $num1->close();

?>