

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

    // footer
    $(".maplist__item:nth-child(1)").click(function () {

        $('.sitemap__block:nth-child(1)').toggleClass("sitemap__block--open").siblings().removeClass("sitemap__block--open");

    });

    $(".maplist__item:nth-child(4)").click(function () {

        $('.sitemap__block:nth-child(2)').toggleClass("sitemap__block--open").siblings().removeClass("sitemap__block--open");

    });

    $(".sitetitle--close").click(function () {
        $('.sitemap__block').removeClass("sitemap__block--open");
    });

    $(".maplist__item:nth-child(3)").click(function () {
        $('.maplist__item--recruit').toggleClass("maplist__item--recruit--open");
    });
    
})

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.querySelector('body').clientWidth < 959.9) {
        document.querySelector(".submenu__item--member").style.height = "60px";
        document.querySelector(".submenu__item--cart").style.height = "60px";
    } else if (document.querySelector('body').clientWidth < 1023.9) {
        document.querySelector(".submenu__item--member").style.height = "80px";
        document.querySelector(".submenu__item--cart").style.height = "80px";
    } else if (document.querySelector('body').clientWidth < 1349) {
        document.querySelector(".submenu__item--member").style.height = "90px";
        document.querySelector(".submenu__item--cart").style.height = "90px";
    } else if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
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



// function scrollFunction() {
//     if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80 ) {
//       document.querySelector(".submenu__item--member").style.height = "80px";
//       document.querySelector(".submenu__item--member>i").style.fontSize = "24px";
//       document.querySelector(".submenu__item--cart").style.height = "80px";
//       document.querySelector(".submenu__item--cart>i").style.fontSize = "24px";
//     } else {
//       document.querySelector(".submenu__item--member").style.height = "120px";
//       document.querySelector(".submenu__item--member>i").style.fontSize = "30px";
//       document.querySelector(".submenu__item--cart").style.height = "120px";
//       document.querySelector(".submenu__item--cart>i").style.fontSize = "30px";
//     }
//   }

