"use strict";$(function(){shopshow(),$(".details").on("mouseover",".little li",function(){$(".big img").css("z-index","10"),$(".little li").css("border","1px solid #fff"),$(".big img").eq($(this).index()).css("z-index","15"),$(".little li").eq($(this).index()).css("border","1px solid #e40b0b")}),$(".purchase").click(function(){$(".wicket").css("display","block")}),$(".close_1").click(function(){$(".wicket").css("display","none")}),$(".close_2").click(function(){$(".wicket").css("display","none")}),$("#listhead li").click(function(){$("#listhead li").css("borderBottom","1px solid #dddddd"),$("#goodright #abab").css("display","none"),$("#listhead li").css("borderTop","1px solid #dddddd"),$("#goodright #abab").eq($(this).index()).css("display","block"),$("#listhead li").eq($(this).index()).css("borderBottom","2px solid #fff"),$("#listhead li").eq($(this).index()).css("borderTop","2px solid #f70202")}),$(".menu li").click(function(){$(".menu li").css("borderBottom","1px solid #dddddd"),$(".box div").css("display","none"),$(".box div").eq($(this).index()).css("display","block"),$(".menu li").eq($(this).index()).css("borderBottom","1px solid #fff")}),$(".wholemenu li").click(function(){$(".wholemenu li").css("borderBottom","1px solid #dddddd"),$(".wholebox div").css("display","none"),$(".wholebox div").eq($(this).index()).css("display","block"),$(".wholemenu li").eq($(this).index()).css("borderBottom","1px solid #fff")}),$(".val_1menu li").click(function(){$(".val_1menu li").css("borderBottom","1px solid #dddddd"),$(".val_box div").css("display","none"),$(".val_box div").eq($(this).index()).css("display","block"),$(".val_1menu li").eq($(this).index()).css("borderBottom","1px solid #fff")}),$(".fermenu li").click(function(){$(".fermenu li").css("borderBottom","1px solid #dddddd"),$(".ferbox div").css("display","none"),$(".ferbox div").eq($(this).index()).css("display","block"),$(".fermenu li").eq($(this).index()).css("borderBottom","1px solid #fff")});var n=decodeURI(window.location.search).split("?")[1].split("=")[1];$.ajax({type:"get",url:"../api/details.php",data:{title:n},success:function(n){var s=JSON.parse(n),i=s.map(function(n){return' <li>\n                            <i><img src="../images/list-1.png" alt=""></i>\n                            <span><a href="">首页</a></span>\n                            <span><a href="">>&nbsp;'+n.sort_2+'</a></span>\n                            <span><a href="">>&nbsp;'+n.sort_3+'</a></span>\n                            <span><a href="">>&nbsp;'+n.sort_4+'</a></span>\n                            <span><a href="">>&nbsp;'+n.username+"</a></span>\n                        </li>"}).join("");$(".mainhade").html(i);var a=s.map(function(n){return' <div data-id="'+n.id+'">\n                                <div class="depicture">\n                                    <div id="MagnifierWrap2">\n                                        <div class="MagnifierMain">\n                                        <img class="MagTargetImg" src="'+n.img2+'" data-src="'+n.img2+'">                                          \n                                        </div>\n                                        <div class="spec-items">\n                                            <ul>\n                                                <li class="on"><img src="'+n.img2+'" data-lsrc="'+n.img2+'"" data-maxSrc="'+n.img2+'"></li>\n                                                <li><img src="'+n.img3+'" data-lsrc="'+n.img3+'" data-maxSrc="'+n.img3+'"></li>\n                                                <li><img src="'+n.img4+'" data-lsrc="'+n.img4+'" data-maxSrc="'+n.img4+'"></li>\n                                                <li><img src="'+n.img5+'" data-lsrc="'+n.img5+'" data-maxSrc="'+n.img5+'"></li>\n                                            </ul>\n                                        </div> \n                                     </div>    \n                                    <div class="share">\n                                        <ul>\n                                            <li><a href="">分享(0)</a></li>\n                                            <li><a href="">收藏商品(0)</a></li>\n                                            <li>\n                                                <a href="">\n                                                    <span class="frame"></span>\n                                                    <span>加入对比</span>\n                                                </a>\n                                            </li>\n                                            <li><a href="">举报</a></li>\n                                        </ul>\n                                    </div>\n                                </div>\n                                <div class="introduce">\n                                    <div class="introduce_1">\n                                        <img src="../images/data-1.jpg" alt="">\n                                        <span>英国</span>\n                                    </div>\n                                    <div class="introduce_2">\n                                        <h2>'+n.username+"</h2>\n                                        <p>"+n.introduce+'</p>\n                                    </div>\n                                    <div class="introduce_3">\n\n                                        <dl>\n                                            <dt>市场价</dt>\n                                            <dd>\n                                                <span>'+n.Originalprice+'</span>\n                                            </dd>\n                                        </dl>\n                                        <dl>\n                                            <dt>商城价</dt>\n                                            <dd>\n                                                <span class="tprice">'+n.Presentprice+'</span>\n                                            </dd>\n                                        </dl>\n                                        <dl>\n                                            <dt>商品评分</dt>\n                                            <dd>\n                                                <span>\n                                                    <img src="../images/star-wuxing.png" alt="">\n                                                    <img src="../images/star-wuxing.png" alt="">\n                                                    <img src="../images/star-wuxing.png" alt="">\n                                                    <img src="../images/star-wuxing.png" alt="">\n                                                    <img src="../images/star-wuxing.png" alt="">\n                                                </span>\n                                                <span><a href="">共有0条评价</a></span>\n                                                <span>(销量：0)</span>\n                                            </dd>\n                                        </dl>\n\n                                    </div>\n                                    <div class="introduce_4">\n                                        <div>\n                                            <span>运 费：</span>\n                                            <span>宁波保税-艾兰得仓 至</span>\n                                            <span>\n                                                <i class="district">\n                                                    请选择地区\n\n                                                </i>\n\n                                            </span>\n                                            <span>有货</span>\n                                            <span>免运费</span>\n                                        </div>\n                                    </div>\n                                    <div class="introduce_5">\n                                        <div>\n                                            <span>税 费：</span>\n                                            <span>免税</span>\n                                        </div>\n                                    </div>\n                                    <div class="introduce_6">\n                                        <div>\n                                            <span class="int_1">\n                                                <i class="num">1</i>\n                                                <i class="jia">+</i>\n                                                <i class="jian">-</i>\n                                            </span>\n                                            <span class="int_3">库存：<i class="stock">'+n.stock+'</i> 件</span>\n                                            <span class="int_2">\n                                                <a href="##" class="purchase">\n                                                    <img src="../images/list-3.png" alt="">\n                                                    加入购物车\n                                                </a>\n                                                <a href="##">立即购买</a>\n                                            </span>\n                                            <li class="wicket">\n                                                <p>成功添加到购物车</p>\n                                                <p>\n                                                    <span>购物车共有</span>\n                                                    <span>1</span>\n                                                    <span>种商品 总金额为：</span>\n                                                    <span>¥420.00</span>\n                                                </p>\n\n                                                <p>\n                                                    <span class="close_1">查看购物车</span>\n                                                    <span class="close_2">继续购物</span>\n                                                </p>\n                                                <i class="close_2">X</i>\n                                            </li>\n                                        </div>\n                                    </div>\n                                    <hr>\n                                    <div class="introduce_7">\n                                        <div>\n                                            <span>服务承诺：</span>\n                                            <span>\n                                                <img src="../images/list_62.gif" alt="">\n                                                100%正品保证\n                                            </span>\n                                            <span>\n                                                <img src="../images/list_61.gif" alt="">\n                                                7天无忧售后\n                                            </span>\n                                            <span>\n                                                <img src="../images/list_60.gif" alt="">\n                                                跨境商品\n                                            </span>\n                                        </div>\n                                    </div>\n                                </div> \n                        </div>'}).join("");$(".details").html(a)}}),$(window).on("scroll",function(){$("#goodright")[0].offsetTop<=$(window).scrollTop()?($(".listhead").css("position","fixed"),$(".listhead").css("top","0")):$(".listhead").css("position","static")}),$(".details").on("click",".jia",function(){var n=$(".details .num").text(),s=$(".details .stock").text();s<=++n&&(n=s),$(".details .num").html(n)}),$(".details").on("click",".jian",function(){var n=$(".details .num").text();--n<=1&&(n=1),$(".details .num").html(n)}),$(".details").on("click",".purchase",function(){var n=$(".details .num").text(),s=this.parentElement.parentElement.parentElement.parentElement.parentElement.dataset.id;$.ajax({type:"get",url:"../api/shoppingwath.php",data:{num:n,title:s},success:function(n){}}),$(".wicket").css("display","block")}),$(".details").on("click",".close_1",function(){0==$(".number").text().length?window.open("login.html"):window.open("shopping.html")}),$(".details").on("click",".close_2",function(){$(".wicket").css("display","none")}),window.onload=function(){MagnifierF("MagnifierWrap2")}});