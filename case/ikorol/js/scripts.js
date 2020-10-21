
$(document).ready(function () {

    //手機選單
    $(".menu_rwd_toggle").click(function () {
        $("#header_menu").toggleClass("active");
        $("body").toggleClass("menu-open");

    });

    var bodyClass = document.body.classList,
        lastScrollY = 0;
    window.addEventListener('scroll', function () {
        var st = this.scrollY;
        // 判斷是向上捲動，而且捲軸超過 200px
        if (st < lastScrollY) {
            bodyClass.remove('open');
        } else {
            bodyClass.add('open');
        }
        lastScrollY = st;
    });



    //首頁輪播
    $('.header_img_box').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 7000,
        dots: false,
        infinite: true,
        fade: true,
        pauseOnHover: false,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1
    });


    $(".search_btn").click(function () {
        $(".menu_search").slideToggle();
    });

    //手機選單
    $(".lookbook_heart").click(function () {
        $(this).toggleClass("active");

    });

    new Vue({
        el: "#app", //

        data: {

            items: [
                {
                    "圖片": "imgs/lookbook/default_name.png",
                    "名稱": "Bedding Sets",
                },
                {
                    "圖片": "imgs/lookbook/default_name (1).png",
                    "名稱": "Comforters",
                },
                {
                    "圖片": "imgs/lookbook/default_name (2).png",
                    "名稱": "Quilts & Coverlets",
                },
                {
                    "圖片": "imgs/lookbook/default_name (3).png",
                    "名稱": "Duvet Covers",
                },
                {
                    "圖片": "imgs/lookbook/default_name (4).png",
                    "名稱": "Bed Skirts",
                },
                {
                    "圖片": "imgs/lookbook/default_name (5).png",
                    "名稱": "Shams",
                },
                {
                    "圖片": "imgs/lookbook/default_name (6).png",
                    "名稱": "Throw Pillows",
                },
                {
                    "圖片": "imgs/lookbook/default_name (7).png",
                    "名稱": "Bedding Sale",
                },
                {
                    "圖片": "imgs/lookbook/default_name (8).png",
                    "名稱": "Shams",
                },
            ],
            items2: [

                {
                    "圖片": "imgs/lookbook/default_name (9).png",
                    "名稱": "Duvet Inserts",
                },
                {
                    "圖片": "imgs/lookbook/default_name (10).png",
                    "名稱": "Sheets & Pillowcases",
                },
                {
                    "圖片": "imgs/lookbook/default_name (11).png",
                    "名稱": "Bed Pillows",
                },

            ],

        },

    });
    //# sourceURL=pen.js


    //lookbook WEB的篩選
    $(".lookbook_menu_web .lookbook_submenu").hide();
    $(".lookbook_menu_web li button").click(function () {
        $(this).parent().toggleClass("open").siblings().removeClass("open");
        $(this).parent().find(".lookbook_submenu").slideToggle();
        $(this).parent().siblings().find(".lookbook_submenu").slideUp();
    });


    //右側選單的lookbook MOB的篩選
    $(".right-menu .lookbook_submenu").hide();
    $(".right-menu li button").click(function () {
        $(this).parent().toggleClass("open").siblings().removeClass("open");
        $(this).parent().find(".lookbook_submenu").slideToggle();

    });

    //呼叫右側選單
    $(".right-menu_btn").click(function () {
        $(".right-menu").toggleClass("open");
        $("body").css({ "overflow": "hidden", "max-height": "100vh" });
    });

    //關閉右側選單 
    $(".right-menu_overlay,.right-menu_close").click(function () {
        $(".right-menu").removeClass("open");
        $("body").removeAttr("style");
    });

    //lookbook 標籤取消
    $(".lookbook_menu_list button").click(function () {
        $(this).parent("li").remove();
    });

    //lookbook 標籤全取消
    $(".lookbook_menu_list_clear").click(function () {
        $(".lookbook_menu_list").remove();
    });


    // 表格切換
    $('.lookbook_main_select').click(function (e) {
        var $tabIndex = $(this).index();
        $(".right-menu_list").eq($tabIndex).fadeIn().siblings(".right-menu_list").hide();
    });


    //首頁水平輪播
    $(".advantage-sec-slide").bxSlider({
        minSlides: 2,
        maxSlides: 6,
        slideWidth: 400,
        slideMargin: 1,
        ticker: true,
        speed: 100000
    });

    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.slider-nav',
        infinite: false,
    });
    $('.slider-nav').slick({
        slidesToShow: 7,
        slidesToScroll: 7,
        asNavFor: '.slider-for',
        focusOnSelect: true,
        focusOnChange: false,
        infinite: false,
        centerMode: false,
        vertical: true,

    });

});



