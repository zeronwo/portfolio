


$(document).ready(function (e) {
    //計時
    $('.counter').counterUp({
        delay: 8,
        time: 3000
    });
    //查詢排行彈出視窗
    $(".search-icon").click(function () {
        $(".ranking-list").fadeIn();
        $(".ranking-list .content").addClass("active");
    });

    //活動規則彈出視窗
    $(".rule-icon").click(function () {
        $(".rule-list").fadeIn();
        $(".rule-list .content").addClass("active");
    });



    $(".lightbox-close2").click(function () {
        $(".lightbox-target2").hide();
        $(".lightbox-target2 .content").removeClass("active");
    });
    //周月榜切換
    $('.main-tab li').click(function (e) {
        var $tabIndex = $(this).index();
        $(this).addClass('active').siblings(".main-tab li").removeClass('active');
        $('.main-item').eq($tabIndex).fadeIn().siblings(".main-item").hide();
    });

    //排名下拉
    $(".more-bth").click(function () {
        $('.more-bth').toggleClass("active");
        $(this).next(".more").slideToggle("slow");
    });


}); //ready
