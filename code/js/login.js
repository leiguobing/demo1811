$(function () {

    $('.code').on('click', function () {
        $('.code').html(randomCode())

    })

    $('#landing').on('click', function () {
        var name1 = $('#username').val()
        var psw1 = $('#psw').val()
        var yzm1 = $('#yzm').val()
        var code1 = $('.code').text()

        // console.log(name1)
        if (name1 && psw1 && yzm1) {
            if (yzm1 == code1) {
                $.ajax({
                    type: "post",
                    url: "../api/denglu.php",
                    data: {
                        name: name1,
                        psw: psw1,
                    },
                    success: function (response) {

                        var arr = JSON.parse(response)
                        if (arr.num == 0) {
                            $('.prompt').html('登陆成功')
                            $('.prompt').css('color', '#58bc58')

                            //cookie方式登录
                            // document.cookie = "name=" + name2 + ";path=/";
                            // document.cookie = "uid=" + fuid + ";path=/";

                            //本地存储方式登录
                            var storage = window.localStorage;
                            storage["name"] = arr.cont[0]['username'];
                            storage["uid"] = arr.cont[0]['uid'];


                            location.href = '../index.html'

                        } else if (arr == 1) {
                            $('.prompt').html('账号密码验证码错误')
                            $('.prompt').css('color', 'red')
                        }
                    }
                });
            } else {
                $('.prompt').html('验证码输入错误')
                $('.prompt').css('color', 'red')
            }


        } else {
            $('.prompt').html('账号密码验证码不能为空')
            $('.prompt').css('color', 'red')
        }



    })



})