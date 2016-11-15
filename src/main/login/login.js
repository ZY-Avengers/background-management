/**
 * Created by Administrator on 2016/11/14.
 */

function login() {

    var username = document.getElementById("username").firstElementChild;
    var password = document.getElementById("password").firstElementChild;

    var logJson = {username: username, password: password};


    $.ajax(
        {
            type: "POST",
            url: "https://www.baidu.com",
            contentType: "application/json;charset=utf-8",
            data: JSON.stringify(logJson),
            dataType: "json",

        }
    )
}
