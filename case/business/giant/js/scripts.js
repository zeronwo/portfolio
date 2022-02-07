
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
    function singleGalleryCarousel() {
        if ($('.single-gallery-carousel-content-box').length && $('.single-gallery-carousel-thumbnail-box').length) {

            var $sync1 = $(".single-gallery-carousel-content-box"), // variable declaration
                $sync2 = $(".single-gallery-carousel-thumbnail-box"),
                flag = false,
                duration = 500;

            $sync1.owlCarousel({ //function for preview carousel
                items: 1,
                margin: 0,
                nav: false,
                dots: true
            })
                .on('changed.owl.carousel', function (e) {
                    //var currentItem = e.item.index;
                    //alert(currentItem);
                    if (!flag) {
                        flag = true;
                        $sync2.trigger('to.owl.carousel', [e.item.index, duration, true]);
                        flag = false;
                    }
                });


            $sync2.owlCarousel({ //function for thumbnails carousel
                margin: 50,
                items: 7,
                nav: true,
                dots: false,
                navText: false,
                center: false,
                responsive: {
                    0: {
                        items: 2,
                        autoWidth: false
                    },
                    400: {
                        items: 3,
                        autoWidth: false
                    },
                    768: {
                        items: 3,
                        autoWidth: false
                    }
                },
            })
                .on('click', '.owl-item', function () {
                    $sync1.trigger('to.owl.carousel', [$(this).index(), duration, true]);
                })
                .on('changed.owl.carousel', function (e) {
                    if (!flag) {
                        flag = true;
                        $sync1.trigger('to.owl.carousel', [e.item.index, duration, true]);
                        flag = false;
                    }
                });
        };
    }
    singleGalleryCarousel(); //FUNCTION CALLED HERE

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

    //lighrbox
    $(document).on('lity:resize', function (event, instance) {
        console.log('Lightbox resized');
    });

});



