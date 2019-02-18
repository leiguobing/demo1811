'use strict';

$(function () {

    // 顶部特效

    $('.serve').on('mouseover', 'div', function () {
        $('.serve div').css({
            zIndex: '',
            background: '',
            border: '',
            borderTop: ''
        });
        $('.serve ul').css('display', 'none');
        $('.serve span').css('transform', '');
        $('.serve div').eq($(this).index()).css({
            zIndex: '3',
            background: '#fff',
            border: '1px solid #f0f0f0',
            borderTop: 'none'
        });
        $('.serve span').eq($(this).index()).css('transform', 'rotate(180deg)');
        $('.serve ul').eq($(this).index()).css('display', 'block');
    });

    $('.serve').on('mouseover', 'li', function () {
        $('.serve li').css('background', '');
        $(this).css('background', '#F7F7F7');
    });

    $('.serve').on('mouseout', 'div', function () {
        $('.serve div').css({
            zIndex: '',
            background: '',
            border: '',
            borderTop: ''
        });
        $('.serve ul').css('display', 'none');
        $('.serve span').css('transform', '');
    });

    //标题左侧特效


    $('.user').mouseover(function () {
        $('.my').css('display', 'block');
        $('.user').css('borderBottom', '1px solid #fff');
        $('.arrows').css('transform', 'rotate(180deg)');
    });

    $('.my').mouseover(function () {
        $('.my').css('display', 'block');
        $('.user').css('borderBottom', '1px solid #fff');
        $('.arrows').css('transform', 'rotate(180deg)');
    });

    $('.user').mouseout(function () {
        $('.my').css('display', 'none');
        $('.user').css('borderBottom', '');
        $('.arrows').css('transform', '');
    });
    $('.my').mouseout(function () {
        $('.my').css('display', 'none');
        $('.user').css('borderBottom', '');
        $('.arrows').css('transform', '');
    });

    $('.settle').mouseover(function () {
        $('.shopping').css('display', 'block');
        $('.settle').css('borderBottom', '1px solid #fff');
        $('.arrows_1').css('transform', 'rotate(180deg)');
    });

    $('.shopping').mouseover(function () {
        $('.shopping').css('display', 'block');
        $('.settle').css('borderBottom', '1px solid #fff');
        $('.arrows_1').css('transform', 'rotate(180deg)');
    });

    $('.settle').mouseout(function () {
        $('.shopping').css('display', 'none');
        $('.settle').css('borderBottom', '');
        $('.arrows_1').css('transform', '');
    });
    $('.shopping').mouseout(function () {
        $('.shopping').css('display', 'none');
        $('.settle').css('borderBottom', '');
        $('.arrows_1').css('transform', '');
    });

    //导航特效

    $('.nav').on('mouseover', '.anav', function () {
        $('.nul').css('display', 'block');
        $('.nul').css('zIndex', '99');
    });

    $('.nav').on('mouseout', '.anav', function () {
        $('.nul').css('display', 'none');
    });

    $('.nul').on('mouseover', 'li', function () {
        $('.nul li').css({
            paddingLeft: '',
            background: ''
        });
        $(this).css({
            paddingLeft: '10px',
            background: '#fff'
        });
        $(this).css('background', '#fff');
        // $('.nul div').css('display', 'block')
        $('.nul .classify').css('display', 'none');
        $('.nul .classify').eq($(this).index()).css('display', 'block');
    });

    $('.bnav').on('mouseover', 'li', function () {
        $('.bnav a').css('color', '');
        $('.bnav a').eq($(this).index()).css('color', '#EF3C79');
    });
    $('.bnav').on('mouseout', 'li', function () {
        $('.bnav a').css('color', '');
    });

    //搜索特效

    $('.search_head').mouseover(function () {
        $('.search_2').css('display', 'block');
        $('.search_2').css('borderTop', 'none');
    });

    $('.search_2').on('mouseover', 'li', function () {
        $('.search_2 li').css('background', '');
        $('.search_2 li').eq($(this).index()).css('background', '#EF3C79');
    });

    $('.search_head').mouseout(function () {
        $('.search_2').css('display', 'none');
        $('.search_2').css('borderTop', '1px solid #cccccc');
    });

    $('.search_2').on('click', 'li', function () {
        $arr = $('.search_2 li').eq($(this).index()).text();
        $('.sp').html($arr);
        $('.search_2').css('display', 'none');
    });

    //尾部二维码特效

    $('.img_1').mouseover(function () {
        $('.img_3').css('display', 'none');
        $('.img_3').eq($(this).index()).css('display', 'block');
    });

    $('.img_1').mouseout(function () {
        $('.img_3').css('display', 'none');
    });

    $('.img_2').mouseover(function () {
        $('.img_4').css('display', 'none');
        $('.img_4').eq($(this).index()).css('display', 'block');
    });

    $('.img_2').mouseout(function () {
        $('.img_4').css('display', 'none');
    });

    //最左侧菜单特效

    // var isok = true;
    // $('.right_1').on('click', '.aa', function () {
    //     if (isok) {
    //         $('.right_2 .bb').eq($(this).index()).css('display', 'block')
    //     } else {         
    //         $('.right_2 .bb').css('display', 'none')
    //     }
    //     isok = !isok

    // })


    // var isok = true;
    // $('.right_1').on('click', '.aa', function () {
    //     if (isok) {
    //         $('.right_2 .bb').eq($(this).index()).css('right', '45px')
    //     } else {         
    //         $('.right_2 .bb').css('right', '-320px')
    //     }
    //     isok = !isok

    // })

    var isok = true;
    $('.right_1').on('click', '.aa', function () {
        if (isok) {
            $('.right_2 .bb').eq($(this).index()).animate({
                'right': '45px'
            }, 500, 'linear');
        } else {
            $('.right_2 .bb').animate({
                'right': '-320px'
            }, 500, 'linear');
        }
        isok = !isok;
    });

    $('.boult_1').click(function () {
        // $('.shop_1').css('right', 'none')
        $('.shop_1').animate({
            'right': '-320px'
        }, 500, 'linear');
    });
    $('.boult_2').click(function () {
        // $('.contrast_1').css('display', 'none')
        $('.contrast_1').animate({
            'right': '-320px'
        }, 500, 'linear');
    });

    $('.top').click(function () {
        var timer = setInterval(function () {
            var top = window.scrollY;
            if (top >= 5) {
                //证明有滚动距离
                window.scrollTo(0, top - 200);
            } else {
                clearInterval(timer);
            }
        }, 30);
    });

    $('.account').mouseover(function () {
        $('.huiyuan').css('display', 'block');
    });

    $('.contrast').mouseover(function () {
        $('.duibi').css('display', 'block');
    });
    $('.relation').mouseover(function () {
        $('.kefu').css('display', 'block');
    });

    $('.huiyuan').mouseover(function () {
        $('.huiyuan').css('display', 'block');
    });

    $('.duibi').mouseover(function () {
        $('.duibi').css('display', 'block');
    });
    $('.kefu').mouseover(function () {
        $('.kefu').css('display', 'block');
    });

    $('.account').mouseout(function () {
        $('.huiyuan').css('display', 'none');
    });

    $('.contrast').mouseout(function () {
        $('.duibi').css('display', 'none');
    });
    $('.relation').mouseout(function () {
        $('.kefu').css('display', 'none');
    });

    topshow();

    shopshow();
});

function topshow() {
    //本地存储方式登录
    var stroage = window.localStorage;
    var name = stroage.getItem(stroage.key(0));
    var uid = stroage.getItem(stroage.key(1));
    //cookie 方式登录
    // var id = document.cookie.split(';')[1].split('=')[1];
    // var name = document.cookie.split(';')[0].split('=')[1];


    //将账户渲染到页面
    var number = $('.number');
    number.html(name);
    //登录，注册框隐藏
    var tte = $('.number').text();
    if (tte.length > 0) {
        $('.login_1').css('display', 'none');
        $('.signout').css('display', 'block');
    } else {
        $('.login_1').css('display', 'block');
    }

    $('.signout').click(function () {
        localStorage.clear(stroage.getItem(stroage.key(0)));
        // document.cookie = "id=; expires=Thu, 01 Jan 1968 00:00:00 GMT;path=/";
        // dtopshow()ocument.cookie = "name=; expires=Thu, 01 Jan 1968 00:00:00 GMT;path=/";
    });
}

function shopshow() {
    var len = $('.number').text().length;

    if (len == 0) {} else {
        //头部购物车结算
        $('conte .none').css('display', 'none');
        $('.settle').mouseover(function () {
            $.ajax({
                type: "get",
                url: "../api/shopping.php",
                success: function success(response) {

                    var str = JSON.parse(response);

                    var ttr = str.map(function (item) {
                        return ' \n                                <li data-id="' + item.id + '">\n                                    <ul>\n                                        <p>\n                                            <img src="' + item.img2 + '" alt="">\n                                        </p>\n                                        <p>\n                                            <i>' + item.username + '</i>\n                                        </p>\n                                        <p>\n                                            <span>\xA5' + item.Presentprice + 'x' + item.total + '</span>\n                                            <span class="deleshop">\u5220\u9664</span>\n                                        </p>\n                                    </ul>\n                                </li>';
                    }).join('');

                    $('.contrt').html(ttr);
                }
            });
        });

        //最右侧购物车
        $('.right_1').on('click', '.aa', function () {
            $.ajax({
                type: "get",
                url: "../api/shopping.php",
                success: function success(response) {
                    var str = JSON.parse(response);

                    var tty = str.map(function (item) {
                        return '<li data-id="' + item.id + '">\n                                    <span><img src="' + item.img2 + '" alt=""></span>\n                                    <span>\n                                        <i>' + item.username + '</i>\n                                        <i>\xA5' + item.Presentprice + 'x' + item.total + '</i>\n                                    </span>\n                                    <p title="\u5220\u9664" class="deles">X</p>\n                                </li>';
                    }).join('');

                    $('.shopul').html(tty);
                }
            });
        });
    }

    loshop();

    function loshop() {
        var len = $('.number').text().length;
        $('.toshop').click(function () {
            if (len == 0) {
                window.open('login.html');
            } else {

                window.open('shopping.html');
            }
        });
    }

    daleshow();

    function daleshow() {

        $('.contrt').on('click', '.deleshop', function () {

            var id = $(this).parent().parent().parent().attr('data-id');

            $.ajax({
                type: "get",
                url: "../api/shopping.php",
                data: {
                    gid: id
                },
                success: function success(response) {}
            });
        });
    }
}