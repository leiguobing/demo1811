'use strict';

$(function () {
    shopshow();

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
        $('.big img').css('z-index', '10');
        $('.little li').css('border', '1px solid #fff');
        $('.big img').eq($(this).index()).css('z-index', '15');
        $('.little li').eq($(this).index()).css('border', '1px solid #e40b0b');
    });

    //点击加入购物车时弹出对话框
    $('.purchase').click(function () {
        $('.wicket').css('display', 'block');
    });
    //点击继续购物按钮的时候关闭对话框
    $('.close_1').click(function () {
        $('.wicket').css('display', 'none');
    });
    //点击右上角关闭按钮的时候关闭对话框
    $('.close_2').click(function () {
        $('.wicket').css('display', 'none');
    });

    //页面中的选项卡功能
    $('#listhead li').click(function () {
        $('#listhead li').css('borderBottom', '1px solid #dddddd');
        $('#goodright #abab').css('display', 'none');
        $('#listhead li').css('borderTop', '1px solid #dddddd');

        $('#goodright #abab').eq($(this).index()).css('display', 'block');
        $('#listhead li').eq($(this).index()).css('borderBottom', '2px solid #fff');
        $('#listhead li').eq($(this).index()).css('borderTop', '2px solid #f70202');
    });

    $('.menu li').click(function () {
        $('.menu li').css('borderBottom', '1px solid #dddddd');
        $('.box div').css('display', 'none');
        $('.box div').eq($(this).index()).css('display', 'block');
        $('.menu li').eq($(this).index()).css('borderBottom', '1px solid #fff');
    });

    $('.wholemenu li').click(function () {
        $('.wholemenu li').css('borderBottom', '1px solid #dddddd');
        $('.wholebox div').css('display', 'none');
        $('.wholebox div').eq($(this).index()).css('display', 'block');
        $('.wholemenu li').eq($(this).index()).css('borderBottom', '1px solid #fff');
    });

    $('.val_1menu li').click(function () {
        $('.val_1menu li').css('borderBottom', '1px solid #dddddd');
        $('.val_box div').css('display', 'none');
        $('.val_box div').eq($(this).index()).css('display', 'block');
        $('.val_1menu li').eq($(this).index()).css('borderBottom', '1px solid #fff');
    });

    $('.fermenu li').click(function () {
        $('.fermenu li').css('borderBottom', '1px solid #dddddd');
        $('.ferbox div').css('display', 'none');
        $('.ferbox div').eq($(this).index()).css('display', 'block');
        $('.fermenu li').eq($(this).index()).css('borderBottom', '1px solid #fff');
    });

    var arr = decodeURI(window.location.search);
    var arr1 = arr.split('?')[1];
    var srr4 = arr1.split('=')[1];

    $.ajax({
        type: "get",
        url: "../api/details.php",
        data: {

            title: srr4
        },

        success: function success(response) {

            var str1 = JSON.parse(response);

            var ttr1 = str1.map(function (item) {
                return ' <li>\n                            <i><img src="../images/list-1.png" alt=""></i>\n                            <span><a href="">\u9996\u9875</a></span>\n                            <span><a href="">>&nbsp;' + item.sort_2 + '</a></span>\n                            <span><a href="">>&nbsp;' + item.sort_3 + '</a></span>\n                            <span><a href="">>&nbsp;' + item.sort_4 + '</a></span>\n                            <span><a href="">>&nbsp;' + item.username + '</a></span>\n                        </li>';
            }).join('');

            $('.mainhade').html(ttr1);

            var ttr2 = str1.map(function (item) {
                return ' <div data-id="' + item.id + '">\n                                <div class="depicture">\n                                    <div id="MagnifierWrap2">\n                                        <div class="MagnifierMain">\n                                        <img class="MagTargetImg" src="' + item.img2 + '" data-src="' + item.img2 + '">                                          \n                                        </div>\n                                        <div class="spec-items">\n                                            <ul>\n                                                <li class="on"><img src="' + item.img2 + '" data-lsrc="' + item.img2 + '"" data-maxSrc="' + item.img2 + '"></li>\n                                                <li><img src="' + item.img3 + '" data-lsrc="' + item.img3 + '" data-maxSrc="' + item.img3 + '"></li>\n                                                <li><img src="' + item.img4 + '" data-lsrc="' + item.img4 + '" data-maxSrc="' + item.img4 + '"></li>\n                                                <li><img src="' + item.img5 + '" data-lsrc="' + item.img5 + '" data-maxSrc="' + item.img5 + '"></li>\n                                            </ul>\n                                        </div> \n                                     </div>    \n                                    <div class="share">\n                                        <ul>\n                                            <li><a href="">\u5206\u4EAB(0)</a></li>\n                                            <li><a href="">\u6536\u85CF\u5546\u54C1(0)</a></li>\n                                            <li>\n                                                <a href="">\n                                                    <span class="frame"></span>\n                                                    <span>\u52A0\u5165\u5BF9\u6BD4</span>\n                                                </a>\n                                            </li>\n                                            <li><a href="">\u4E3E\u62A5</a></li>\n                                        </ul>\n                                    </div>\n                                </div>\n                                <div class="introduce">\n                                    <div class="introduce_1">\n                                        <img src="../images/data-1.jpg" alt="">\n                                        <span>\u82F1\u56FD</span>\n                                    </div>\n                                    <div class="introduce_2">\n                                        <h2>' + item.username + '</h2>\n                                        <p>' + item.introduce + '</p>\n                                    </div>\n                                    <div class="introduce_3">\n\n                                        <dl>\n                                            <dt>\u5E02\u573A\u4EF7</dt>\n                                            <dd>\n                                                <span>' + item.Originalprice + '</span>\n                                            </dd>\n                                        </dl>\n                                        <dl>\n                                            <dt>\u5546\u57CE\u4EF7</dt>\n                                            <dd>\n                                                <span class="tprice">' + item.Presentprice + '</span>\n                                            </dd>\n                                        </dl>\n                                        <dl>\n                                            <dt>\u5546\u54C1\u8BC4\u5206</dt>\n                                            <dd>\n                                                <span>\n                                                    <img src="../images/star-wuxing.png" alt="">\n                                                    <img src="../images/star-wuxing.png" alt="">\n                                                    <img src="../images/star-wuxing.png" alt="">\n                                                    <img src="../images/star-wuxing.png" alt="">\n                                                    <img src="../images/star-wuxing.png" alt="">\n                                                </span>\n                                                <span><a href="">\u5171\u67090\u6761\u8BC4\u4EF7</a></span>\n                                                <span>(\u9500\u91CF\uFF1A0)</span>\n                                            </dd>\n                                        </dl>\n\n                                    </div>\n                                    <div class="introduce_4">\n                                        <div>\n                                            <span>\u8FD0 \u8D39\uFF1A</span>\n                                            <span>\u5B81\u6CE2\u4FDD\u7A0E-\u827E\u5170\u5F97\u4ED3 \u81F3</span>\n                                            <span>\n                                                <i class="district">\n                                                    \u8BF7\u9009\u62E9\u5730\u533A\n\n                                                </i>\n\n                                            </span>\n                                            <span>\u6709\u8D27</span>\n                                            <span>\u514D\u8FD0\u8D39</span>\n                                        </div>\n                                    </div>\n                                    <div class="introduce_5">\n                                        <div>\n                                            <span>\u7A0E \u8D39\uFF1A</span>\n                                            <span>\u514D\u7A0E</span>\n                                        </div>\n                                    </div>\n                                    <div class="introduce_6">\n                                        <div>\n                                            <span class="int_1">\n                                                <i class="num">1</i>\n                                                <i class="jia">+</i>\n                                                <i class="jian">-</i>\n                                            </span>\n                                            <span class="int_3">\u5E93\u5B58\uFF1A<i class="stock">' + item.stock + '</i> \u4EF6</span>\n                                            <span class="int_2">\n                                                <a href="##" class="purchase">\n                                                    <img src="../images/list-3.png" alt="">\n                                                    \u52A0\u5165\u8D2D\u7269\u8F66\n                                                </a>\n                                                <a href="##">\u7ACB\u5373\u8D2D\u4E70</a>\n                                            </span>\n                                            <li class="wicket">\n                                                <p>\u6210\u529F\u6DFB\u52A0\u5230\u8D2D\u7269\u8F66</p>\n                                                <p>\n                                                    <span>\u8D2D\u7269\u8F66\u5171\u6709</span>\n                                                    <span>1</span>\n                                                    <span>\u79CD\u5546\u54C1 \u603B\u91D1\u989D\u4E3A\uFF1A</span>\n                                                    <span>\xA5420.00</span>\n                                                </p>\n\n                                                <p>\n                                                    <span class="close_1">\u67E5\u770B\u8D2D\u7269\u8F66</span>\n                                                    <span class="close_2">\u7EE7\u7EED\u8D2D\u7269</span>\n                                                </p>\n                                                <i class="close_2">X</i>\n                                            </li>\n                                        </div>\n                                    </div>\n                                    <hr>\n                                    <div class="introduce_7">\n                                        <div>\n                                            <span>\u670D\u52A1\u627F\u8BFA\uFF1A</span>\n                                            <span>\n                                                <img src="../images/list_62.gif" alt="">\n                                                100%\u6B63\u54C1\u4FDD\u8BC1\n                                            </span>\n                                            <span>\n                                                <img src="../images/list_61.gif" alt="">\n                                                7\u5929\u65E0\u5FE7\u552E\u540E\n                                            </span>\n                                            <span>\n                                                <img src="../images/list_60.gif" alt="">\n                                                \u8DE8\u5883\u5546\u54C1\n                                            </span>\n                                        </div>\n                                    </div>\n                                </div> \n                        </div>';
            }).join('');

            $('.details').html(ttr2);
        }

    });

    $(window).on('scroll', function () {

        var iH = $('#goodright')[0].offsetTop;
        var iT = $(window).scrollTop();

        if (iT >= iH) {
            $('.listhead').css('position', 'fixed');
            $('.listhead').css('top', '0');
            // $('#listhead li').css('borderBottom', '1px solid #dddddd')
            // $('#listhead li').eq($(this).index()).css('borderBottom', '2px solid #fff')
        } else {
            $('.listhead').css('position', 'static');
            // $('#listhead li').eq($(this).index()).css('borderBottom', '2px solid #fff')
        }
    });

    $('.details').on('click', '.jia', function () {

        var num = $('.details .num').text();
        var num2 = $('.details .stock').text();
        num++;

        if (num >= num2) {
            num = num2;
        }

        $('.details .num').html(num);
    });

    $('.details').on('click', '.jian', function () {

        var num = $('.details .num').text();
        num--;

        if (num <= 1) {
            num = 1;
        }
        $('.details .num').html(num);
    });

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
        var sum = $('.details .num').text();

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
            success: function success(response) {}
        });
        $('.wicket').css('display', 'block');
    });

    $('.details').on('click', '.close_1', function () {

        var len = $('.number').text().length;

        if (len == 0) {

            window.open('login.html');
        } else {

            window.open('shopping.html');
        }
    });

    $('.details').on('click', '.close_2', function () {
        $('.wicket').css('display', 'none');
    });

    window.onload = function () {

        MagnifierF("MagnifierWrap2");
    };
});