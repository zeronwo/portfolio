
$(document).ready(function () {

    $("#menu .menu_button").click(function () {
        $(this).toggleClass("active");
    });

    //手機 上方 右側拉出選單
    $("#menu .menu_rwd_toggle").click(function () {
        $(".sidemenu_top").toggleClass("active");
        $(".menu_main").toggleClass("active");
    });

    //手機 下方 右側拉出選單(條件搜尋)
    $(".reservation_mob").click(function () {
        $(".sidemenu_bottom").addClass("active");
    });
    //手機 下方 右側拉出選單(條件搜尋) 移除
    $(".sidemenu.sidemenu_bottom .menu_rwd_toggle").click(function () {
        $(".sidemenu_bottom").removeClass("active");
        $(".sidemenu_bottom_sub").removeClass("active");
    });

    //手機 下方 右側拉出選單(副選單)
    $('.sidemenu.sidemenu_bottom .main ul li').click(function (e) {
        var $tabIndex = $(this).index();
        $(".sidemenu_bottom_sub").addClass("active");
        $('.sidemenu_bottom_sub ').eq($tabIndex).addClass("active").siblings(".sidemenu_bottom_sub ").removeClass("active");
    });

     //手機 下方 右側拉出選單(副選單) 移除
    $(".sidemenu_bottom_sub li.mm").click(function () {
        $(".sidemenu_bottom_sub").removeClass("active");
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

    //首頁輪播下方選單
    $(".reserv_main > ul > li ").click(function () {
        $(this).toggleClass('active').siblings("li").removeClass('active');
        $(".search-bar").removeClass("active");
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
//地圖
    $('.map_clouds_coordinate ul li').click(function (e) {
        var $tabIndex = $(this).index();
        $(this).addClass('active').siblings(".map_clouds_coordinate ul li").removeClass('active');
        $('.map_content_box_inner > li').eq($tabIndex).fadeIn().addClass("active").siblings(".map_content_box_inner > li").hide().removeClass("active");
      });
    


    //lighrbox
    $(document).on('lity:resize', function (event, instance) {
        console.log('Lightbox resized');
    });

});



