
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

    $(".language .menu_btn").click(function () {
        $(".language ul").toggleClass("active");
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

    $(".datepicker").datepicker({
    });

    $('.reserv_tab li').click(function (e) {
        var $tabIndex = $(this).index();
        $(this).addClass('active').siblings(".reserv_tab li").removeClass('active');
        $('.reserv_main>li').eq($tabIndex).fadeIn().siblings(".reserv_main>li").hide();
        $('.reserv_main>li').eq($tabIndex).addClass("active");
    });


    $(".search-bar_button").click(function () {
        $(".search-bar").toggleClass("active");
    });

    $(".search-bar_main button").click(function () {
        $(".search-bar").removeClass("active");
    });

    $(".reserv_main > ul > li ").click(function () {
        $(this).find(".sub").toggleClass("open");
    });

    //lighrbox
    $(document).on('lity:resize', function (event, instance) {
        console.log('Lightbox resized');
    });

});



