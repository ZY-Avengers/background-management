// $(document).ready(function () {
//         $("button").click(login()
//         );
//     }
// );

var Login=function (username,password) {
    var logJson = {username: username, password: password};
    $.ajax(
        {
            type: "POST",
            url: "https://www.baidu.com",
            contentType: "application/json;charset=utf-8",
            data: JSON.stringify(logJson),
            dataType: "json",

        }
    );
}