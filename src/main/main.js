/**
 * Created by Administrator on 2016/11/10.
 */
$(document).ready(function () {
    $('.inactive').click(function () {
        var className = $(this).parents('li').parents().attr('class');
        if ($(this).siblings('ul').css('display') == 'none') {
            if (className == "yiji") {
                $(this).parents('li').siblings('li').children('ul').parent('li').children('a').removeClass('inactives');
                $(this).parents('li').siblings('li').children('ul').slideUp(100);
            }
            $(this).addClass('inactives');
            $(this).siblings('ul').slideDown(100).children('li');
        } else {
            $(this).removeClass('inactives');
            $(this).siblings('ul').slideUp(100);
        }
    })
})
