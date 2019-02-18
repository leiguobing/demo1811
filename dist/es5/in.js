'use strict';

$(function () {

    //轮播图插件调用
    aotu('banner', 'pan');

    //头部登录
    topshow();

    //==========首页热销榜单处特效===============================================================================================
    $('.mul').on('mouseover', '.mul_1', function () {
        $('.mul .mul_1').css('border', '');
        $('.mul_1 img').css('marginTop', '20px');
        $('.mul_1 dl').css('marginTop', '45px');
        $('.mul_1 p').css('display', 'none');
        $('.mul .mul_1').eq($(this).index()).css('border', '1px solid #ccc');
        $('.mul_1 img').eq($(this).index()).css('marginTop', '0px');
        $('.mul_1 dl').eq($(this).index()).css('marginTop', '0px');
        $('.mul_1 p').eq($(this).index()).css('display', 'block');
        $('.mul_1 img').eq($(this).index()).animate({
            'top': 0
        }, 800, 'linear');
        $('.mul_1 dl').eq($(this).index()).animate({
            'top': 0
        }, 800, 'linear');
    });

    $('.mul').on('mouseout', '.mul_1', function () {
        $('.mul .mul_1').css('border', '');
        $('.mul_1 img').css('marginTop', '20px');
        $('.mul_1 dl').css('marginTop', '45px');
        $('.mul_1 p').css('display', 'none');
    });

    //==========首页热销榜单分页功能==========================================================================================

    $('#prev').on('click', function () {
        $('.mul').animate({
            'marginLeft': '0px'
        }, 1000, 'linear');
        $('#next').css('background', '#ccc');
        $('#prev').css('background', 'red');
    });
    $('#next').on('click', function () {
        $('.mul').animate({
            'marginLeft': '-1194px'
        }, 1000, 'linear');
        $('#prev').css('background', '#ccc');
        $('#next').css('background', 'red');
    });

    //==========首页根据标题内容进行渲染============================================================================================
    var arr = $('.main2 h2').text();
    $.ajax({
        type: "get",
        url: "./api/list.php",
        data: {
            title: arr
        },

        success: function success(response) {

            var str = JSON.parse(response);
            // console.log(str)
            var ttr = str.map(function (item) {
                return '<li class="mul_1" data-id="' + item.id + '">\n                            <a href="##"><img src="' + item.img1 + '" alt=""></a>\n                            <dl>\n                                <dt>' + item.intro_1 + '</dt>\n                                <dd>\uFFE5' + item.Presentprice + '</dd>\n                            </dl>\n                            <p class="addto">\u7ACB\u5373\u8D2D\u4E70</p>\n                        </li>';
            }).join('');

            $('.mul').html(ttr);
        }
    });

    var arr = $('.main3 h2').text();
    $.ajax({
        type: "get",
        url: "./api/list.php",
        data: {
            title: arr
        },

        success: function success(response) {
            var str = JSON.parse(response);
            var ttr1 = str.map(function (item) {
                return '<li data-id="' + item.id + '">\n                            <a href="##">\n                                <img src="' + item.img1 + '" alt="">\n                            </a>\n                        </li>';
            }).join('');

            $('.main3ul').html(ttr1);
        }
    });

    var arr1 = $('.main4 h2').text();
    $.ajax({
        type: "get",
        url: "./api/list.php",
        data: {
            title: arr1
        },

        success: function success(response) {
            var str1 = JSON.parse(response);
            var ttr2 = str1.map(function (item) {
                return '<li data-id="' + item.id + '">\n                            <a href="##">\n                                <img src="' + item.img1 + '" alt="">\n                            </a>\n                        </li>';
            }).join('');

            $('.main4ul').html(ttr2);
        }
    });

    var arr2 = $('.main5 h2').text();
    $.ajax({
        type: "get",
        url: "./api/list.php",
        data: {
            title: arr2
        },

        success: function success(response) {
            var str2 = JSON.parse(response);
            var ttr3 = str2.map(function (item) {
                return '<li data-id="' + item.id + '">\n                            <a href="##">\n                                <img src="' + item.img1 + '" alt="">\n                            </a>\n                        </li>';
            }).join('');

            $('.main5ul').html(ttr3);
        }
    });

    var arr3 = $('.main6 h2').text();
    $.ajax({
        type: "get",
        url: "./api/list.php",
        data: {
            title: arr3
        },

        success: function success(response) {
            var str3 = JSON.parse(response);
            var ttr4 = str3.map(function (item) {
                return '<li data-id="' + item.id + '">\n                            <a href="##">\n                                <img src="' + item.img1 + '" alt="">\n                            </a>\n                        </li>';
            }).join('');

            $('.main6ul').html(ttr4);
        }
    });

    var arr4 = $('.main7 h2').text();
    $.ajax({
        type: "get",
        url: "./api/list.php",
        data: {
            title: arr4
        },

        success: function success(response) {
            var str4 = JSON.parse(response);
            var ttr5 = str4.map(function (item) {
                return '<li data-id="' + item.id + '">\n                            <a href="##">\n                                <img src="' + item.img1 + '" alt="">\n                            </a>\n                        </li>';
            }).join('');

            $('.main7ul').html(ttr5);
        }
    });

    var arr5 = $('.main8 h2').text();

    $.ajax({
        type: "get",
        url: "./api/list.php",
        data: {
            title: arr5
        },

        success: function success(response) {
            var str5 = JSON.parse(response);
            var ttr6 = str5.map(function (item) {
                return '<li data-id="' + item.id + '">\n                            <a href="##">\n                                <img src="' + item.img1 + '" alt="">\n                            </a>\n                        </li>';
            }).join('');

            $('.main8ul').html(ttr6);
        }
    });

    //==========底部轮播图特效==================================================================================================
    // 滚动元素id，左切换按钮，右切换按钮，切换元素个数id,滚动方式，切换方向，是否自动滚动，滚动距离，滚动时间，滚动间隔，显示个数
    LbMove('imglist', 'prev', 'next', true, true, 'left', true, 240, 2000, 2000, 5);

    $('.main9ul').mouseover(function () {
        $('.posibtn').css('display', 'block');
    });
    $('.main9ul').mouseout(function () {
        $('.posibtn').css('display', 'none');
    });

    $('#posibtn p').mouseover(function () {
        $('.posibtn').css('display', 'block');
    });
    $('#posibtn p').mouseout(function () {
        $('.posibtn').css('display', 'none');
    });

    //==========点击获取导航内容跳转列表页=====================================================================================

    $('.classification').on('click', function () {
        var ttr = $('.classification').eq($(this).index() - 1).text();
        // location.href = './html/list.html?con=' + ttr
        window.open('./html/list.html?con=' + ttr);
    });

    //==========点击首页商品跳转详情页================================================================================
    $('.commodity').on('click', 'li', function () {
        var id = this.dataset.id;
        // console.log(id)
        window.open('./html/details.html?id=' + id);
    });

    //==========点击立即购买加入购物车====================================================================================
    $('.mul').on('click', '.addto', function () {

        var currentLi = this.parentElement;
        // var children = currentLi.children;
        var currentGUID = currentLi.dataset.id;
        // console.log(currentGUID)

        $.ajax({
            type: "get",
            url: "./api/shoppingwath.php",
            data: {
                title: currentGUID,
                num: 1
            },

            success: function success(response) {
                // console.log(response)
            }
        });
    });

    //==========判断是否登录状态，跳转到对应页面=========================================================================
    var len = $('.number').text().length;
    $('.toshop').click(function () {
        if (len == 0) {
            window.open('./html/login.html');
        } else {

            window.open('./html/shopping.html');
        }
    });

    //==========判断是否登录状态，时候渲染购物车==============================================================
    if (len == 0) {} else {
        //头部购物车结算
        $('conte .none').css('display', 'none');
        $('.settle').mouseover(function () {
            $.ajax({
                type: "get",
                url: "./api/shopping.php",
                success: function success(response) {

                    var str = JSON.parse(response);
                    console.log(str);

                    var ttr = str.map(function (item) {
                        return ' \n                                <li data-id="' + item.id + '">\n                                    <ul>\n                                        <p>\n                                            <img src="' + item.img1 + '" alt="">\n                                        </p>\n                                        <p>\n                                            <i>' + item.username + '</i>\n                                        </p>\n                                        <p>\n                                            <span>\xA5' + item.Presentprice + 'x' + item.total + '</span>\n                                            <span>\u5220\u9664</span>\n                                        </p>\n                                    </ul>\n                                </li>';
                    }).join('');

                    $('.contrt').html(ttr);
                }
            });
        });

        //最右侧购物车
        $('.right_1').on('click', '.aa', function () {
            $.ajax({
                type: "get",
                url: "./api/shopping.php",
                success: function success(response) {
                    var str = JSON.parse(response);
                    console.log(str);

                    var tty = str.map(function (item) {
                        return '<li data-id="' + item.id + '">\n                                    <span><img src="' + item.img1 + '" alt=""></span>\n                                    <span>\n                                        <i>' + item.username + '</i>\n                                        <i>\xA5' + item.Presentprice + 'x' + item.total + '</i>\n                                    </span>\n                                    <p title="\u5220\u9664" class="deles">X</p>\n                                </li>';
                    }).join('');

                    $('.shopul').html(tty);
                }
            });
        });
    }

    //==========点击头部购物车删除对应数据库文件===========================================================================
    $('.contrt').on('click', '.deleshop', function () {

        var id = $(this).parent().parent().parent().attr('data-id');

        $.ajax({
            type: "get",
            url: "./api/shopping.php",
            data: {
                gid: id
            },
            success: function success(response) {}
        });
    });
});