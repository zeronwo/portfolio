
$(document).ready(function () {

  //gotop
  $('.footer_go-top').click(function () {
    $('html,body').animate({ scrollTop: '0px' }, 800);
  });
    $(".main-visual-scroll").click(function () {
        $("html,body").animate({ scrollTop: $(".reservation").offset().top }, 800);
    });

    //滑下出現選單
    var bodyClass = document.body.classList,
        lastScrollY = 0;
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
        $(this).next(".language ul").toggleClass("active");
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

    //月曆
    $(".datepicker").datepicker({
        numberOfMonths: 2,
        showButtonPanel: true
    });

    //手機副選單
    $(".menu_rwd_menu > li > ul").hide();
    $(".menu_rwd_menu li").click(function () {
        $(this).find("ul").slideToggle();
        $(this).siblings().find('ul').slideUp();
    });

    //滑入播圖片
    $(function () {
        $('.billboard_list li').hover(function () {
            var $tabIndex = $(this).index();
            $(".billboard_img").addClass('active');
            $('.billboard_img li').eq($tabIndex).addClass("active");
        }, function () {
            var $tabIndex = $(this).index();
            $(".billboard_img").removeClass('active');
            $('.billboard_img li').eq($tabIndex).removeClass("active");
        })
    })

    $(function () {
        let show = 'show';
        
        $('.field_box input').on('checkval', function () {
          let label = $(this).next('label');
          if(this.value !== '') {
            label.addClass(show);
          } else {
            label.removeClass(show);
          }
        }).on('keyup', function () {
          $(this).trigger('checkval');
        }); 
      });

    //lighrbox
    $(document).on('lity:resize', function (event, instance) {
        console.log('Lightbox resized');
    });

});



