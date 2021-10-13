

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

window.onscroll = function() {scrollFunction()};

if($(window).width() > 1349)
{
// JavaScript here
// 當視窗寬度小於767px時執行
} else {
// JavaScript here
// 當視窗寬度不小於767px時執行
}
function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80 ) {
    document.querySelector(".submenu__item--member").style.height = "80px";
    document.querySelector(".submenu__item--member>i").style.fontSize = "24px";
    document.querySelector(".submenu__item--cart").style.height = "80px";
    document.querySelector(".submenu__item--cart>i").style.fontSize = "24px";
  } else {
    document.querySelector(".submenu__item--member").style.height = "120px";
    document.querySelector(".submenu__item--member>i").style.fontSize = "30px";
    document.querySelector(".submenu__item--cart").style.height = "120px";
    document.querySelector(".submenu__item--cart>i").style.fontSize = "30px";
  }
}

