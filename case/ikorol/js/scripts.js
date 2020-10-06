
$(document).ready(function () {

    //手機選單
    $(".menu_rwd_toggle").click(function () {
        $("#menu_rwd").toggleClass("active");
        $("body").toggleClass("menu-open");

    });

    //捲軸上滑 選單展示
    var bodyClass = document.body.classList,
        lastScrollY = 200;
    window.addEventListener('scroll', function () {
        var st = this.scrollY;
        // 判斷是向上捲動，而且捲軸超過 200px
        if (st < lastScrollY) {
            bodyClass.remove('hideUp');
        } else {
            bodyClass.add('hideUp');
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


    //lookbook 分類選單
    $(".lookbook_submenu").hide();
    $(".lookbook_menu li button").click(function () {
        $(this).parent().toggleClass("open").siblings().removeClass("open");
        $(this).parent().find(".lookbook_submenu").slideToggle();
        $(this).parent().siblings().find(".lookbook_submenu").slideUp();
    });

    //lookbook 手機分類選單
    $(".lookbook_filter button").click(function () {
        $(".lookbook_menu_rwd").toggleClass("open");
    });

    //lookbook 手機分類黑遮罩
    $(".lookbook_menu_rwd_overlay,.lookbook_menu_rwd_close").click(function () {
        $(".lookbook_menu_rwd").removeClass("open");
    });

     //lookbook 標籤取消
    $(".lookbook_menu_list button").click(function(){
        $(this).parent("li").remove();
      });

         //lookbook 標籤全取消
    $(".lookbook_menu_list_clear").click(function(){
        $(".lookbook_menu_list").remove();
      });

});



