
$(document).ready(function () {




    //滑下出現選單
    var new_scroll_position = 0;
    var last_scroll_position;
    var header = document.getElementById("header");
    window.addEventListener('scroll', function (e) {
        last_scroll_position = window.scrollY;
        // Scrolling down
        if (new_scroll_position < last_scroll_position && last_scroll_position > 80) {
            // header.removeClass('slideDown').addClass('slideUp');
            header.classList.add("slideUp");
            // Scrolling up
        } else if (new_scroll_position > last_scroll_position) {
            // header.removeClass('slideUp').addClass('slideDown');
            header.classList.remove("slideUp");
        }
        new_scroll_position = last_scroll_position;
    });





    //手機選單
    $(".menu_rwd_toggle").click(function () {
        $(".sidemenu").toggleClass("active");
        $("body").toggleClass("menu-open");

    });



    //LOAD
    $("#element").introLoader({
        animation: {
            name: 'gifLoader',
            options: {
                ease: "easeInOutCirc",
                style: 'light',
                delayBefore: 500,
                delayAfter: 0,
                exitTime: 500
            }
        }
    });


    //首頁輪播圖

    //零件
    $('.parts__inner').owlCarousel({
        loop:true,
        nav:false,
        items:1,
        dots: true,

    })
    //促銷
    $('.promotion__inner').owlCarousel({
        center: true,
        items:2,
        loop:true,
        margin:60,
        responsive:{
            600:{
                items:4
            }
        }
    });

     //最新消息
     $('.news__inner').owlCarousel({
        loop:true,
        nav:false,
        items:1,
        dots: true,

    })

    //lighrbox
    $(document).on('lity:resize', function (event, instance) {
        console.log('Lightbox resized');
    });

});



