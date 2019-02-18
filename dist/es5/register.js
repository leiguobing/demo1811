'use strict';

$(function () {

    //用户名是否存在正确
    $('#phone').on('blur', function () {
        var str = $('#phone').val();
        if (checkReg.name(str)) {
            $.ajax({
                type: "post",
                url: "../api/yonghuming.php",
                data: {
                    name: str
                },
                success: function success(response) {
                    console.log(response);
                    if (response == 0) {
                        $('.prompt_1').html('用户名存在');
                        $('.prompt_1').css('color', 'red');
                    } else {
                        $('.prompt_1').html('用户名通过');
                        $('.prompt_1').css('color', '#58bc58');
                    }
                }
            });
            $('.prompt_1').html('用户名正确');
            $('.prompt_1').css('color', '#58bc58');
        } else {
            $('.prompt_1').html('用户名错误');
            $('.prompt_1').css('color', 'red');
        }
    });
    //随机生成4位验证码
    $('.phonecode').on('click', function () {
        $('.phonecode').html(randomCode());
    });

    //密码框失去焦点时判断密码正则是否正确
    $('#psw').on('blur', function () {
        var psw1 = $('#psw').val();
        if (checkReg.psweasy(psw1)) {
            $('.prompt_2').html('密码格式正确');
            $('.prompt_2').css('color', '#58bc58');
        } else {
            $('.prompt_2').html('密码不正确');
            $('.prompt_2').css('color', 'red');
        }
    });
    //验证框失去焦点时判断输入验证码与随机验证码是否一致
    $('#yam').on('blur', function () {
        var yzn1 = $('#yam').val();
        var yzm2 = $('.phonecode').text();
        if (yzn1 == yzm2) {
            $('.prompt_3').html('验证码通过');
            $('.prompt_3').css('color', '#58bc58');
        } else {
            $('.prompt_3').html('验证码错误');
            $('.prompt_3').css('color', 'red');
        }
    });

    //点击注册按钮注册
    $('#btn').on('click', function () {
        var str = $('#phone').val();
        var psw1 = $('#psw').val();
        var yzm1 = $('#yam').val();
        var yzm2 = $('.phonecode').text();
        var psw2 = $('.prompt_2').text();
        var yzm3 = $('.prompt_3').text();
        if (str && psw1 && yzm1) {
            if (psw2 != '密码不正确') {
                if (yzm3 != '验证码错误') {
                    $.ajax({
                        type: "post",
                        url: "../api/zhuce.php",
                        data: {
                            name: str,
                            psw: psw1
                        },
                        success: function success(response) {
                            console.log(response);
                            if (response == 0) {
                                $('.prompt_4').html('注册失败');
                                $('.prompt_4').css('color', 'red');
                            } else if (response == 1) {
                                $('.prompt_4').html('注册成功');
                                $('.prompt_4').css('color', '#58bc58');
                            }
                        }
                    });
                } else {
                    $('.prompt_4').html('请输入正确验证码');
                    $('.prompt_4').css('color', 'red');
                }
            } else {
                $('.prompt_4').html('请输入正确密码');
                $('.prompt_4').css('color', 'red');
            }
        } else {
            alert('请填写正确内容');
        }
    });
});