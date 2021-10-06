
$(document).ready(function () {

    //手機選單
    $(".menu_rwd_toggle").click(function () {
        $(".sidemenu").toggleClass("active");
        $("body").toggleClass("menu-open");

    });

    var bodyClass = document.body.classList,
        lastScrollY = 200;
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


    $(".menu_button").click(function () {
        $(this).toggleClass("active");
    });

    //首頁輪播圖
    $('.top_big_slide').owlCarousel({
        loop: true, //循環播放
        animateOut: 'fadeOut',
        items: 1,
        margin: 0,
        autoplay: true, //自動撥放
        dots: false,
        smartSpeed: 450
    });

    //搜尋框 打開
    $(".reserv_main > ul > li ").click(function () {
        $(this).toggleClass('active').siblings("li").removeClass('active');
    });

    //搜尋框 打開
    $(".search-bar_button").click(function () {
        $(".search-bar").toggleClass("active");
        $(".reserv_main > ul > li").removeClass("active");
    });
    //搜尋框 移除
    $(".search-bar_main button").click(function () {
        $(".search-bar").removeClass("active");
    });

    //lighrbox
    $(document).on('lity:resize', function (event, instance) {
        console.log('Lightbox resized');
    });

});



