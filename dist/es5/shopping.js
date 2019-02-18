"use strict";

$(function () {

    //==========购物车的渲染=======================================================================================================   
    var ttr = "";
    $.ajax({
        type: "get",
        url: "../api/shopping.php",
        data: '',
        success: function success(response) {

            var str = JSON.parse(response);
            // console.log(str)

            ttr += str.map(function (item) {
                return " <dl data-id=\"" + item.id + "\">\n                                    <dt class=\"content_1\">\n                                        <span>\u5E97\u94FA\uFF1A</span>\n                                        <span><a href=\"##\">\u767E\u6D0B\u5065\u5EB7\u5B98\u65B9\u81EA\u8425\u5E97 </a></span>\n                                        <span>\n                                            <i>\u514D\u8FD0\u8D39</i>\n                                            <p>\u6EE188\u514D\u8FD0\u8D39</p>\n                                        </span>\n                                    </dt>\n                                    <dd class=\"content_2\">\n                                        <ul>\n                                            <li class=\"check\">\n                                                <input type=\"checkbox\" id=\"inp\">\n                                            </li>\n                                            <li>\n                                                <img src=\"" + item.img2 + "\" alt=\"\">\n                                            </li>\n                                            <li>\n                                                <a href=\"\">" + item.username + "</a>\n                                                <p> \n                                                    <span><img src=\"../images/list_62.gif\" alt=\"\"></span>\n                                                    <span><img src=\"../images/list_63.gif\" alt=\"\"></span>\n                                                </p>\n                                            </li>\n                                            <li>\n                                                <p class=\"unitPrice\">" + item.Presentprice + "</p>\n                                            </li>\n                                            <li>\n                                                <p>\n                                                    <a href=\"##\" class=\"jian\">-</a>\n                                                    <i class=\"num\">" + item.total + "</i>\n                                                    <a href=\"##\" class=\"jia\">+</a>\n                                            </p>\n\n                                        </li>\n                                        <li>\n                                            <p class=\"total\">" + (item.Presentprice * item.total + '.00') + "</p>\n                                        </li>\n                                        <li>\n                                            <a href=\"##\">\u79FB\u5165\u6536\u85CF\u5939</a>\n                                            <a href=\"##\" class=\"delete\">\u5220\u9664</a>\n                                        </li>\n                                    </ul>\n                                </dd>\n                            </dl>";
            }).join('');

            $('.content').html(ttr);
        }

    });

    //==========购物车的增删改查=======================================================================================================

    //点击数量相加
    $('.content').on('click', '.jia', function () {

        var arr = $(this).prev().text(); //获取input数量框内容

        arr++; //每点击一次数量相加一次
        if (arr > 100) {
            //临界值判断
            arr = 100;
        }
        $(this).prev().html(arr); //点击一次相加一次赋值给input
        show(this);
        show1();
        var currentLi = this.parentElement.parentElement.parentElement.parentElement.parentElement;
        var currentGUID = currentLi.dataset.id;

        console.log(currentGUID);
        $.ajax({
            type: "get",
            url: "../api/shopping.php",
            data: {
                jiannum: arr,
                jiagid: currentGUID
            },
            success: function success(response) {}

        });
    });

    //点击数量相减

    $('.content').on('click', '.jian', function () {

        var arr = $(this).next().text(); //获取内容
        arr--; //每点击一次数量相加一次
        if (arr < 1) {
            //临界值判断
            arr = 1;
        }
        $(this).next().html(arr); //点击一次相减一次赋值给input
        show(this);
        show1();

        var currentLi = this.parentElement.parentElement.parentElement.parentElement.parentElement;
        var currentGUID = currentLi.dataset.id;

        console.log(currentGUID);
        $.ajax({
            type: "get",
            url: "../api/shopping.php",
            data: {
                jiannum: arr,
                jiangid: currentGUID
            },
            success: function success(response) {}

        });
    });

    //数量相加减的时候小计随之改变

    function show(now) {
        var num = $(now).parent().parent().prev().text().slice(2) * 1; //获取单价
        // console.log(num)
        var sum = $(now).parent().parent().find('i').text() * 1; // 获取当前input框数量

        var total = (num * sum).toFixed(2); //总价 = 单价 * 数量
        // console.log(total) ;    
        $(now).parent().parent().next().find('p').html(total); //将总价赋值给小计
    }

    $('.content').on('click', '.check input', function () {

        show1();
    });

    var eer = [];

    function show1() {
        //循环复选框，当选中复选框时将下标push到空数组中

        eer = [];
        for (var i = 0; i < $('.content input').size(); i++) {
            if ($('.content input').eq(i).prop('checked')) {
                eer.push(i);
            }
        }

        //当选中数组长度等于复选框长度时代表复选框全选，全选框自动选中
        if (eer.length == $('.content input').size()) {
            $('.mainhead input').prop('checked', 'checked');
        } else {
            $('.mainhead input').removeAttr('checked'); //removeAttr 删除当前元素属性    
        }

        var atotal = 0;
        for (var i = 0; i < eer.length; i++) {
            // console.log(eer[i]);
            // console.log(i);               

            atotal += $('.total').eq(eer[i]).text() * 1; //商品总价
        }
        //  计算出所选中行的商品数量，总价进行赋值

        $('.ttl_1').html(atotal + '.00');
        $('.ttl_2').html(atotal + '.00');
    }

    //全选,全选框选中，下面的复选框全选中
    $('.mainhead').on('click', 'input', function () {
        if ($(this).prop('checked')) {
            $('.content input').prop('checked', 'checked');
            show1();
        } else {
            $('.content input').removeAttr('checked', 'checked');
        }
        show1();
    });

    //点击删除的时候删除当行，并且删除数据库
    $('.content').on('click', '.delete', function () {

        var trr = confirm('您确定要删除当行？');
        // var guid = $(this).parent().parent().parent().parent()

        if (trr) {
            $(this).parent().parent().parent().parent().remove(); //点击当前删除整个父元素
        }

        //获取商品ID 删除数据库ID
        var currentLi = this.parentElement.parentElement.parentElement.parentElement;
        var currentGUID = currentLi.dataset.id;
        // console.log(currentGUID)

        $.ajax({
            type: "get",
            url: "../api/shopping.php",
            data: {
                gid: currentGUID
            },
            success: function success(response) {}
        });
    });

    //==========购物车的账号渲染=======================================================================================================   

    var stroage = window.localStorage;
    var name = stroage.getItem(stroage.key(0));
    console.log(stroage);

    var number = $('.number');
    number.html(name);

    //==========购物车的账号退出=======================================================================================================   

    $('.tuichu').click(function () {

        localStorage.clear(stroage.getItem(stroage.key(0)));

        location.href = '../index.html';
    });
});