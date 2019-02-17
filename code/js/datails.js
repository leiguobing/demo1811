$(function () {
    shopshow()

    // var stroage = window.localStorage;


    // var name = stroage.getItem(stroage.key(0));
    // var uid = stroage.getItem(stroage.key(1));
  

    // //将账户渲染到页面
    // $('.number').html(name)

    // var tte = $('.number').text()

    // if (tte.length > 0) {
    //     $('.login_1').css('display', 'none')
    //     $('.signout').css('display', 'block')
    // } else {
    //     $('.login_1').css('display', 'block')
    // }


    // $('.signout').click(function () {
    //     localStorage.clear(stroage.getItem(stroage.key(0)))
    //     // document.cookie = "id=; expires=Thu, 01 Jan 1968 00:00:00 GMT;path=/";
    //     // document.cookie = "name=; expires=Thu, 01 Jan 1968 00:00:00 GMT;path=/";
    // })




    //鼠标移动到当前小图片，显示对应大图片
    $('.details').on('mouseover', '.little li', function () {
        $('.big img').css('z-index', '10')
        $('.little li').css('border', '1px solid #fff')
        $('.big img').eq($(this).index()).css('z-index', '15')
        $('.little li').eq($(this).index()).css('border', '1px solid #e40b0b')


    })

    //点击加入购物车时弹出对话框
    $('.purchase').click(function () {
        $('.wicket').css('display', 'block')

    })
    //点击继续购物按钮的时候关闭对话框
    $('.close_1').click(function () {
        $('.wicket').css('display', 'none')

    })
    //点击右上角关闭按钮的时候关闭对话框
    $('.close_2').click(function () {
        $('.wicket').css('display', 'none')

    })


    //页面中的选项卡功能
    $('#listhead li').click(function () {
        $('#listhead li').css('borderBottom', '1px solid #dddddd')
        $('#goodright #abab').css('display', 'none')
        $('#listhead li').css('borderTop', '1px solid #dddddd')


        $('#goodright #abab').eq($(this).index()).css('display', 'block')
        $('#listhead li').eq($(this).index()).css('borderBottom', '2px solid #fff')
        $('#listhead li').eq($(this).index()).css('borderTop', '2px solid #f70202')
    })

    $('.menu li').click(function () {
        $('.menu li').css('borderBottom', '1px solid #dddddd')
        $('.box div').css('display', 'none')
        $('.box div').eq($(this).index()).css('display', 'block')
        $('.menu li').eq($(this).index()).css('borderBottom', '1px solid #fff')
    })

    $('.wholemenu li').click(function () {
        $('.wholemenu li').css('borderBottom', '1px solid #dddddd')
        $('.wholebox div').css('display', 'none')
        $('.wholebox div').eq($(this).index()).css('display', 'block')
        $('.wholemenu li').eq($(this).index()).css('borderBottom', '1px solid #fff')
    })



    $('.val_1menu li').click(function () {
        $('.val_1menu li').css('borderBottom', '1px solid #dddddd')
        $('.val_box div').css('display', 'none')
        $('.val_box div').eq($(this).index()).css('display', 'block')
        $('.val_1menu li').eq($(this).index()).css('borderBottom', '1px solid #fff')
    })




    $('.fermenu li').click(function () {
        $('.fermenu li').css('borderBottom', '1px solid #dddddd')
        $('.ferbox div').css('display', 'none')
        $('.ferbox div').eq($(this).index()).css('display', 'block')
        $('.fermenu li').eq($(this).index()).css('borderBottom', '1px solid #fff')
    })


    var arr = decodeURI(window.location.search)
    var arr1 = arr.split('?')[1];
    var srr4 = arr1.split('=')[1];

    $.ajax({
        type: "get",
        url: "../api/details.php",
        data: {

            title: srr4
        },

        success: function (response) {
          
            var str1 = JSON.parse(response)
           
            var ttr1 = str1.map(function (item) {
                return ` <li>
                            <i><img src="../images/list-1.png" alt=""></i>
                            <span><a href="">首页</a></span>
                            <span><a href="">>&nbsp;${item.sort_2}</a></span>
                            <span><a href="">>&nbsp;${item.sort_3}</a></span>
                            <span><a href="">>&nbsp;${item.sort_4}</a></span>
                            <span><a href="">>&nbsp;${item.username}</a></span>
                        </li>`


            }).join('');

            $('.mainhade').html(ttr1);


            var ttr2 = str1.map(function (item) {
                return ` <div data-id="${item.id}">
                                <div class="depicture">
                                    <div id="MagnifierWrap2">
                                        <div class="MagnifierMain">
                                            <img class="MagTargetImg" src="${item.img2}" data-src="${item.img2}">
                                            
                                        </div>
                                       
                                        <div class="spec-items">
                                            <ul>
                                                <li class="on"><img src="${item.img2}" data-lsrc="${item.img2}"" data-maxSrc="${item.img2}"></li>
                                                <li><img src="${item.img3}" data-lsrc="${item.img3}" data-maxSrc="${item.img3}"></li>
                                                <li><img src="${item.img4}" data-lsrc="${item.img4}" data-maxSrc="${item.img4}"></li>
                                                <li><img src="${item.img5}" data-lsrc="${item.img5}" data-maxSrc="${item.img5}"></li>
                                            </ul>
                                    </div> 
                                </div>    
                                    <div class="share">
                                        <ul>
                                            <li><a href="">分享(0)</a></li>
                                            <li><a href="">收藏商品(0)</a></li>
                                            <li>
                                                <a href="">
                                                    <span class="frame"></span>
                                                    <span>加入对比</span>
                                                </a>
                                            </li>
                                            <li><a href="">举报</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="introduce">
                                    <div class="introduce_1">
                                        <img src="../images/data-1.jpg" alt="">
                                        <span>英国</span>
                                    </div>
                                    <div class="introduce_2">
                                        <h2>${item.username}</h2>
                                        <p>${item.introduce}</p>
                                    </div>
                                    <div class="introduce_3">

                                        <dl>
                                            <dt>市场价</dt>
                                            <dd>
                                                <span>${item.Originalprice}</span>
                                            </dd>
                                        </dl>
                                        <dl>
                                            <dt>商城价</dt>
                                            <dd>
                                                <span class="tprice">${item.Presentprice}</span>
                                            </dd>
                                        </dl>
                                        <dl>
                                            <dt>商品评分</dt>
                                            <dd>
                                                <span>
                                                    <img src="../images/star-wuxing.png" alt="">
                                                    <img src="../images/star-wuxing.png" alt="">
                                                    <img src="../images/star-wuxing.png" alt="">
                                                    <img src="../images/star-wuxing.png" alt="">
                                                    <img src="../images/star-wuxing.png" alt="">
                                                </span>
                                                <span><a href="">共有0条评价</a></span>
                                                <span>(销量：0)</span>
                                            </dd>
                                        </dl>

                                    </div>
                                    <div class="introduce_4">
                                        <div>
                                            <span>运 费：</span>
                                            <span>宁波保税-艾兰得仓 至</span>
                                            <span>
                                                <i class="district">
                                                    请选择地区

                                                </i>

                                            </span>
                                            <span>有货</span>
                                            <span>免运费</span>
                                        </div>
                                    </div>
                                    <div class="introduce_5">
                                        <div>
                                            <span>税 费：</span>
                                            <span>免税</span>
                                        </div>
                                    </div>
                                    <div class="introduce_6">
                                        <div>
                                            <span class="int_1">
                                                <i class="num">1</i>
                                                <i class="jia">+</i>
                                                <i class="jian">-</i>
                                            </span>
                                            <span class="int_3">库存：<i class="stock">${item.stock}</i> 件</span>
                                            <span class="int_2">
                                                <a href="##" class="purchase">
                                                    <img src="../images/list-3.png" alt="">
                                                    加入购物车
                                                </a>
                                                <a href="##">立即购买</a>
                                            </span>
                                            <li class="wicket">
                                                <p>成功添加到购物车</p>
                                                <p>
                                                    <span>购物车共有</span>
                                                    <span>1</span>
                                                    <span>种商品 总金额为：</span>
                                                    <span>¥420.00</span>
                                                </p>

                                                <p>
                                                    <span class="close_1">查看购物车</span>
                                                    <span class="close_2">继续购物</span>
                                                </p>
                                                <i class="close_2">X</i>
                                            </li>
                                        </div>
                                    </div>
                                    <hr>
                                    <div class="introduce_7">
                                        <div>
                                            <span>服务承诺：</span>
                                            <span>
                                                <img src="../images/list_62.gif" alt="">
                                                100%正品保证
                                            </span>
                                            <span>
                                                <img src="../images/list_61.gif" alt="">
                                                7天无忧售后
                                            </span>
                                            <span>
                                                <img src="../images/list_60.gif" alt="">
                                                跨境商品
                                            </span>
                                        </div>
                                    </div>
                                </div> 
                        </div>`


            }).join('');

            $('.details').html(ttr2);




        }

    });

    $(window).on('scroll', function () {

        var iH = $('#goodright')[0].offsetTop;
        var iT = $(window).scrollTop();
    
        if (iT >= iH) {
            $('.listhead').css('position', 'fixed')
            $('.listhead').css('top', '0')
            // $('#listhead li').css('borderBottom', '1px solid #dddddd')
            // $('#listhead li').eq($(this).index()).css('borderBottom', '2px solid #fff')
        } else {
            $('.listhead').css('position', 'static')
            // $('#listhead li').eq($(this).index()).css('borderBottom', '2px solid #fff')
        }
    })


    $('.details').on('click', '.jia', function () {

        var num = $('.details .num').text()
        var num2 = $('.details .stock').text()
        num++
       
        if (num >= num2) {
            num = num2
        }

        $('.details .num').html(num)

    })

    $('.details').on('click', '.jian', function () {

        var num = $('.details .num').text()
        num--

        if (num <= 1) {
            num = 1
        }
        $('.details .num').html(num)
    })


    // // 用于保存购物车商品信息
    // var carList = [];

    // // 先获取当前cookie
    // var cookies = document.cookie.split('; ');
    // for (var i = 0; i < cookies.length; i++) {
    //     var arr = cookies[i].split('=');
    //     if (arr[0] === 'carlist') {
    //         carList = JSON.parse(arr[1]);
    //     }

    // }


    $('.details').on('click', '.purchase', function () {
        var sum = $('.details .num').text()
        
        var currentLi = this.parentElement.parentElement.parentElement.parentElement.parentElement;
        // var children = currentLi.children;
        var currentGUID = currentLi.dataset.id;


        $.ajax({
            type: "get",
            url: "../api/shoppingwath.php",
            data: {
                num: sum,
                title: currentGUID
            },
            success: function (response) {
                   
            }
        })
        $('.wicket').css('display', 'block')
    })



    $('.details').on('click', '.close_1', function () {

         var len = $('.number').text().length

        if (len == 0) { 

            window.open('login.html')


        } else {
            
            window.open('shopping.html')

        }
     
    })

    $('.details').on('click', '.close_2', function () {
        $('.wicket').css('display', 'none')
    })




    window.onload = function () {

        MagnifierF("MagnifierWrap2");

    }



   



})