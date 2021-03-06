$(function () {


    //==========列表页排序栏平台自营特效部分==========================================================================
    //平台自营特效部分
    $('.sort').on('mouseover', '.sort_li', function () {
        $('.sort_div').css({
            'height': '155px',
            'border': '1px solid #d7d7d7 '
        })
    })
    $('.sort').on('mouseout', '.sort_li', function () {
        $('.sort_div').css({
            'height': '39px',
            'border': '1px solid #d7d7d7 '
        })
    })

    $('.sort_div').on('mouseover', 'span', function () {
        $('.sort_div p').css('display', 'none')
        $('.sort_div p').eq($(this).index()).css('display', 'block')
    })
    $('.sort_div').on('mouseout', 'span', function () {
        $('.sort_div p').css('display', 'none')

    })


    //==========列表页排序栏商品所在地部分==================================================================================  
    //商品所在地部分
    $('.district .district_1').on('mouseover', 'p', function () {
        $('.district_1').css('borderBottom', '1px solid #fff')
        $('.district_2').css('display', 'block')
    })


    $('.district .district_1').on('mouseout', 'p', function () {

        $('.district_2').css('display', 'none')
    })

    //==========划过列表页商品高度变化==============================================================================
    $('.cont').on('mouseover', '.contli', function () {
        $('.contlidiv').css({
            'height': '348px',
            'zIndex': '0',
            'border': '1px solid #d7d7d7 '
        });


        $('.contli .contlidiv').eq($(this).index()).css({
            'height': '418px',
            'zIndex': '9',
            'border': '1px solid #ef3c79 ',
        });

        $('.details').eq($(this).index()).css('top', '170px');


    });


    //==========划过列表页商品时商品介绍往上走===================================================================================
    $('.cont').on('mouseout', '.contlidiv', function () {
        $('.contlidiv').css('zIndex', '0')
        $('.contli .contlidiv').css('height', '')
        $('.contli .contlidiv').css('height', '348px')
        $('.details').css('top', '220px')
        $('.contli .contlidiv').css('border', '1px solid #d7d7d7 ')
    });




    //==========列表页商品渲染部分==============================================================================



    //==========接收首页传来的ID查询数据库进行渲染=============================================================    

    //接收地址栏信息进行分割
    var arr = decodeURI(window.location.search)
    var arr1 = arr.split('?')[1];
    var srr4 = arr1.split('=')[1];

    $('.opi').html(srr4)

    $.ajax({
        type: "get",
        url: "../api/list2.php",
        data: {
            page: 1,
            qty: 25,
            title: srr4
        },

        success: function (response) {

            var str1 = JSON.parse(response)
            tshow(str1)


            var qqw = str1.rst; //将数据库查询到的数据总条数取出
            var num = Math.ceil(qqw / str1.qty); //根据每页显示多少条计算出总共有多少页

            //将计算出来的页数渲染到页面
            var wer = '';
            for (var i = 0; i < num; i++) { //循环页数
                wer += `<li>
                        <a href="##">${i + 1}</a>
                    </li>`;
            }
            $('.pagination_2').html(wer)


        }

    });


    //==========分页功能==================================================================================

    $('.pagination_2').on('click', 'li', function () {
        $('.pagination_2 li').css('background', '')
        $('.pagination_2 li').eq($(this).index()).css('background', 'red')
        var qsa = $('.pagination_2 li').eq($(this).index()).text()
        var yyl = $('.opi').text()

        var jj = $('.jj').text()
        console.log($('.jj').text() == $('.opi').text())
        if (yyl == jj) {
            $.ajax({
                type: "get",
                url: "../api/list3.php",
                data: {
                    page: qsa,
                    qty: 25,
                    title: yyl,
                },

                success: function (response) {

                    var str2 = JSON.parse(response)
                    tshow(str2)
                }
            });
        } else {
            $.ajax({
                type: "get",
                url: "../api/list2.php",
                data: {
                    page: qsa,
                    qty: 25,
                    title: yyl,
                },

                success: function (response) {

                    var str2 = JSON.parse(response)
                    tshow(str2)
                }
            });
        }


    })





    //=========点击列表页导航查询数据库渲染=================================================================
    $('.classification').on('click', function () {
        var lop = $('.classification a').eq($(this).index() - 1).text()
        $('.opi').html(lop)
        $('.classification').css('background', '')
        $('.classification').eq($(this).index() - 1).css('background', 'red')
        $('.classification a').eq($(this).index() - 1).css('color', '#fff')
        var con = $('.classification').eq($(this).index() - 1).text()


        $.ajax({
            type: "get",
            url: "../api/list2.php",
            data: {
                page: 1,
                qty: 25,
                title: con
            },

            success: function (response) {

                var str3 = JSON.parse(response)

                tshow(str3)

                var qqw = str3.rst; //将数据库查询到的数据总条数取出
                var num = Math.ceil(qqw / str3.qty); //根据每页显示多少条计算出总共有多少页

                //将计算出来的页数渲染到页面
                var wer = '';
                for (var i = 0; i < num; i++) { //循环页数
                    wer += `<li>
                        <a href="##">${i + 1}</a>
                    </li>`;
                }
                $('.pagination_2').html(wer)
            }
        });
    });


    //=============点击列表页商品跳转到详情页=======================================================================================
    //点击跳转到详情页
    $('.cont').on('click', '.jump_1 .aa', function () {
        var id = $(this).parent().parent().parent().parent().attr('data-id')
        window.open('details.html?id=' + id)
    })

    $('.cont').on('click', '.jump_2 a', function () {
        var id = $(this).parent().parent().parent().parent().parent().attr('data-id')

        window.open('details.html?id=' + id)
    })



    //===========划过列表页商品小图显示对应的大图=======================================================================
    $('.cont').on('mouseover', '.lipic span', function () {
        $(this).parents('.contli').find('.aa').css('z-index', '10')
        $(this).parents('.contli').find('.aa').eq($(this).index()).css('z-index', '15')

    })


    //==============列表页商品渲染的封装=====================================================================================
    function tshow(ttr) {
        var ttr = ttr.cont.map(function (item) {
            return ` <li class="contli" data-id="${item.id}">
                          <div class="contlidiv">
                            <div class="mix jump_1">
                                        <i><img src="${item.img2}" alt="" class="aa" style="z-index:15"></i>
                                        <i><img src="${item.img3}" alt="" class="aa"></i>
                                        <i><img src="${item.img4}" alt="" class="aa"></i>
                                        <i><img src="${item.img5}" alt="" class="aa"></i>

                            </div>
                            <ul class="details">
                                <li class="lipic">
                                    <span><img src="${item.img2}" alt=""></span>
                                    <span><img src="${item.img3}" alt=""></span>
                                    <span><img src="${item.img4}" alt=""></span>
                                    <span><img src="${item.img5}" alt=""></span>
                                 </li>
                                <li class="tradename jump_2">
                                    <span><a href="##" class="nv">${item.username}</a> </span>
                                    <span><a href="##" class="nv">${item.introduce}</a></span>
                                </li>
                                <li class="price">
                                    <span>${item.Presentprice}</span>
                                    <span>${item.Originalprice}</span>
                                    <i><img src="../images/list_60.gif" alt=""></i>
                                    <i><img src="../images/list_61.gif" alt=""></i>
                                    <i><img src="../images/list_62.gif" alt=""></i>
                                </li>
                                <li class="contrast">
                                    <span><a href="##"></a></span>
                                    <span><a href="##">加入对比</a> </span>
                                </li>
                                <li class="comment">
                                    <p>
                                        <span>0</span>
                                        <span>商品销量</span>
                                    </p>
                                    <p>
                                        <span>0</span>
                                        <span>用户评论</span>
                                        </p>
                                        <p></p>
                                    </li>
                                    <li class="byzy"><a href="##">百洋健康跨境自营店</a> </li>
                                    <li class="jrgwc">
                                        <a href="##" class="clickshop">
                                            加入购物车
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>`


        }).join('');

        $('.cont').html(ttr);


    }



    //==========列表页排序功能=================================================================================================

    $('.rank').on('click', function () {
        var tt = $('.opi').text()


        $('.jj').html(tt)

        $.ajax({
            type: "get",
            url: "../api/list3.php",
            data: {
                title: tt,
                page: 1,
                qty: 25,
            },

            success: function (response) {

                var you = JSON.parse(response)
                console.log(you)

                tshow(you)

                var qqw1 = you.rst; //将数据库查询到的数据总条数取出
                var num1 = Math.ceil(qqw1 / 25); //根据每页显示多少条计算出总共有多少页

                //将计算出来的页数渲染到页面
                var wer1 = '';
                for (var i = 0; i < num1; i++) { //循环页数
                    wer1 += `<li>
                        <a href="##">${i + 1}</a>
                    </li>`;
                }
                $('.pagination_2').html(wer1)
                // var tti = $('.pagination_2').text().length
                // var tiu = tti.length
                // console.log(you)
            }
        })
    })



    //=========列表页点击加入购物车功能==================================================================================




    $('.cont').on('click', '.clickshop', function () {
        var id = $(this).parent().parent().parent().parent().attr('data-id')

       $.ajax({
            type: "get",
            url: "../api/shoppingwath.php",
            data: {
                title: id,
                num:1
            },

            success: function (response) {

                var you = JSON.parse(response)
                console.log(you)

                tshow(you)

                var qqw1 = you.rst; //将数据库查询到的数据总条数取出
                var num1 = Math.ceil(qqw1 / 25); //根据每页显示多少条计算出总共有多少页

                //将计算出来的页数渲染到页面
                var wer1 = '';
                for (var i = 0; i < num1; i++) { //循环页数
                    wer1 += `<li>
                        <a href="##">${i + 1}</a>
                    </li>`;
                }
                $('.pagination_2').html(wer1)
                // var tti = $('.pagination_2').text().length
                // var tiu = tti.length
                // console.log(you)
            }
        })


    })











})