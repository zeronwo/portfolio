$(document).ready(function(e) {
  
    $(window).scroll(function() {
        if ($(window).scrollTop() >= 720) { //��睲�𧢲遝��閙彍�澆之�䲰閰脣�潭�嚗�朖�枂�𣶹撠讐�怎悌
            $("nav").addClass("active");
        } else {
            $("nav").removeClass("active");
        }
    });
  
    //RWD第一層選單
    $(".sub_menu>a").click(function() {
        return xmenu_obj($(this));
    });
    $(".sub_menu2>a").click(function() {
        return xmenu_obj($(this));
    });

    $(".sub_menu3>a").click(function() {
        return xmenu_obj($(this));
    });

    $(".sub_menu4>a").click(function() {
        return xmenu_obj($(this));
    });


    $('.top_img_box').owlCarousel({
        loop: true, //循環播放
        animateOut: 'fadeOut',
        items: 1,
        margin: 0,
        autoplay: true, //自動撥放
        dots:false,
        smartSpeed: 450
    });


    AOS.init({
        offset: 200,
        duration: 600,
        delay: 100,
        once: true, //只執行一次動畫

    });


$('.parallax-window').parallax({imageSrc: 'images/img_guide06.jpg'});



}); //ready

//左側選單縮放
function xmenu_obj(objA) {
    var _this = objA;

    if (_this.nextAll("ul").length > 0) {
        if (_this.nextAll("ul").is(":visible")) {
            _this.nextAll("ul").slideUp("fast");
            _this.next(".menu_icon").removeClass("menu_icon-");

        } else {
            _this.nextAll("ul").slideDown("fast");
            _this.next(".menu_icon").addClass("menu_icon-");
        }
        return false;
    }

}