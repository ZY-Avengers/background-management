

$(document).ready(
    function () {
        $("button").click(
            function () {
                $("h1").hide();
            }
        );
    }
);

function login() {

    var username = document.getElementById("username").firstElementChild;
    var password = document.getElementById("password").firstElementChild;

    var logJson = {username: username, password: password};


    $.ajax(
        {
            type: "POST",
            url: "",
            contentType: "application/json;charset=utf-8",
            data: JSON.stringify(logJson),
            dataType: "json",

        }
    );
}