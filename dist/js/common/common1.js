"use strict";function topshow(){var s=window.localStorage,o=s.getItem(s.key(0));s.getItem(s.key(1));$(".number").html(o),0<$(".number").text().length?($(".login_1").css("display","none"),$(".signout").css("display","block")):$(".login_1").css("display","block"),$(".signout").click(function(){localStorage.clear(s.getItem(s.key(0)))})}function shopshow(){var s;0==$(".number").text().length||($("conte .none").css("display","none"),$(".settle").mouseover(function(){$.ajax({type:"get",url:"../api/shopping.php",success:function(s){var o=JSON.parse(s).map(function(s){return' \n                                <li data-id="'+s.id+'">\n                                    <ul>\n                                        <p>\n                                            <img src="'+s.img2+'" alt="">\n                                        </p>\n                                        <p>\n                                            <i>'+s.username+"</i>\n                                        </p>\n                                        <p>\n                                            <span>¥"+s.Presentprice+"x"+s.total+'</span>\n                                            <span class="deleshop">删除</span>\n                                        </p>\n                                    </ul>\n                                </li>'}).join("");$(".contrt").html(o)}})}),$(".right_1").on("click",".aa",function(){$.ajax({type:"get",url:"../api/shopping.php",success:function(s){var o=JSON.parse(s).map(function(s){return'<li data-id="'+s.id+'">\n                                    <span><img src="'+s.img2+'" alt=""></span>\n                                    <span>\n                                        <i>'+s.username+"</i>\n                                        <i>¥"+s.Presentprice+"x"+s.total+'</i>\n                                    </span>\n                                    <p title="删除" class="deles">X</p>\n                                </li>'}).join("");$(".shopul").html(o)}})})),s=$(".number").text().length,$(".toshop").click(function(){0==s?window.open("login.html"):window.open("shopping.html")}),$(".contrt").on("click",".deleshop",function(){var s=$(this).parent().parent().parent().attr("data-id");$.ajax({type:"get",url:"../api/shopping.php",data:{gid:s},success:function(s){}})})}$(function(){$(".serve").on("mouseover","div",function(){$(".serve div").css({zIndex:"",background:"",border:"",borderTop:""}),$(".serve ul").css("display","none"),$(".serve span").css("transform",""),$(".serve div").eq($(this).index()).css({zIndex:"3",background:"#fff",border:"1px solid #f0f0f0",borderTop:"none"}),$(".serve span").eq($(this).index()).css("transform","rotate(180deg)"),$(".serve ul").eq($(this).index()).css("display","block")}),$(".serve").on("mouseover","li",function(){$(".serve li").css("background",""),$(this).css("background","#F7F7F7")}),$(".serve").on("mouseout","div",function(){$(".serve div").css({zIndex:"",background:"",border:"",borderTop:""}),$(".serve ul").css("display","none"),$(".serve span").css("transform","")}),$(".user").mouseover(function(){$(".my").css("display","block"),$(".user").css("borderBottom","1px solid #fff"),$(".arrows").css("transform","rotate(180deg)")}),$(".my").mouseover(function(){$(".my").css("display","block"),$(".user").css("borderBottom","1px solid #fff"),$(".arrows").css("transform","rotate(180deg)")}),$(".user").mouseout(function(){$(".my").css("display","none"),$(".user").css("borderBottom",""),$(".arrows").css("transform","")}),$(".my").mouseout(function(){$(".my").css("display","none"),$(".user").css("borderBottom",""),$(".arrows").css("transform","")}),$(".settle").mouseover(function(){$(".shopping").css("display","block"),$(".settle").css("borderBottom","1px solid #fff"),$(".arrows_1").css("transform","rotate(180deg)")}),$(".shopping").mouseover(function(){$(".shopping").css("display","block"),$(".settle").css("borderBottom","1px solid #fff"),$(".arrows_1").css("transform","rotate(180deg)")}),$(".settle").mouseout(function(){$(".shopping").css("display","none"),$(".settle").css("borderBottom",""),$(".arrows_1").css("transform","")}),$(".shopping").mouseout(function(){$(".shopping").css("display","none"),$(".settle").css("borderBottom",""),$(".arrows_1").css("transform","")}),$(".nav").on("mouseover",".anav",function(){$(".nul").css("display","block"),$(".nul").css("zIndex","99")}),$(".nav").on("mouseout",".anav",function(){$(".nul").css("display","none")}),$(".nul").on("mouseover","li",function(){$(".nul li").css({paddingLeft:"",background:""}),$(this).css({paddingLeft:"10px",background:"#fff"}),$(this).css("background","#fff"),$(".nul .classify").css("display","none"),$(".nul .classify").eq($(this).index()).css("display","block")}),$(".bnav").on("mouseover","li",function(){$(".bnav a").css("color",""),$(".bnav a").eq($(this).index()).css("color","#EF3C79")}),$(".bnav").on("mouseout","li",function(){$(".bnav a").css("color","")}),$(".search_head").mouseover(function(){$(".search_2").css("display","block"),$(".search_2").css("borderTop","none")}),$(".search_2").on("mouseover","li",function(){$(".search_2 li").css("background",""),$(".search_2 li").eq($(this).index()).css("background","#EF3C79")}),$(".search_head").mouseout(function(){$(".search_2").css("display","none"),$(".search_2").css("borderTop","1px solid #cccccc")}),$(".search_2").on("click","li",function(){$arr=$(".search_2 li").eq($(this).index()).text(),$(".sp").html($arr),$(".search_2").css("display","none")}),$(".img_1").mouseover(function(){$(".img_3").css("display","none"),$(".img_3").eq($(this).index()).css("display","block")}),$(".img_1").mouseout(function(){$(".img_3").css("display","none")}),$(".img_2").mouseover(function(){$(".img_4").css("display","none"),$(".img_4").eq($(this).index()).css("display","block")}),$(".img_2").mouseout(function(){$(".img_4").css("display","none")});var s=!0;$(".right_1").on("click",".aa",function(){s?$(".right_2 .bb").eq($(this).index()).animate({right:"45px"},500,"linear"):$(".right_2 .bb").animate({right:"-320px"},500,"linear"),s=!s}),$(".boult_1").click(function(){$(".shop_1").animate({right:"-320px"},500,"linear")}),$(".boult_2").click(function(){$(".contrast_1").animate({right:"-320px"},500,"linear")}),$(".top").click(function(){var o=setInterval(function(){var s=window.scrollY;5<=s?window.scrollTo(0,s-200):clearInterval(o)},30)}),$(".account").mouseover(function(){$(".huiyuan").css("display","block")}),$(".contrast").mouseover(function(){$(".duibi").css("display","block")}),$(".relation").mouseover(function(){$(".kefu").css("display","block")}),$(".huiyuan").mouseover(function(){$(".huiyuan").css("display","block")}),$(".duibi").mouseover(function(){$(".duibi").css("display","block")}),$(".kefu").mouseover(function(){$(".kefu").css("display","block")}),$(".account").mouseout(function(){$(".huiyuan").css("display","none")}),$(".contrast").mouseout(function(){$(".duibi").css("display","none")}),$(".relation").mouseout(function(){$(".kefu").css("display","none")}),topshow(),shopshow()});