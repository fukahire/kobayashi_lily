

$(document).ready(function () {

    // $(".phonelist__toggle").click(function () {

    //     $(this).next(".sublist").toggleClass("sublist--open").siblings().removeClass("sublist--open");

    // });

    $(".submenu__item--cart").click(function () {
        $('.sign').addClass("sign--open");
    });

    $(".sign--close").click(function () {
        $('.sign').removeClass("sign--open");
    });

    // 個別展開彼此不影響
    // $('.phonelist__toggle').click(function () {
    //     $(this).next(".sublist").toggleClass('sublist--open');
    // });

    $(".menu--hamburger").click(function () {
        $('.menu--phone').toggleClass("menu--phone--open");
    });

    $(".list--close").click(function () {
        $('.menu--phone').toggleClass("menu--phone--open");
    });

    $(".menu--hamburger").click(function () {
        $('.list--close').removeClass("list--close--animation");
    });

    $(".list--close").click(function () {
        $('.list--close').addClass("list--close--animation");
    });


    // 展開同時關掉手足class
    $(".phonelist__toggle").click(function () {

        $(this).next(".sublist").toggleClass("sublist--open").siblings().removeClass("sublist--open");

    });

    $(".phonelist__toggle").click(function () {
        $(this).toggleClass("phonelist__toggle--open").siblings().removeClass("phonelist__toggle--open");

    });
})

