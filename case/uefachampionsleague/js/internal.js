
$(document).ready(function () {

  //gotop
  $('.gotop').click(function () {
    $('html,body').animate({ scrollTop: '0px' }, 800);
  });
  //高度200 gotop出現
  $(window).scroll(function () {
    if ($(window).scrollTop() >= 200) {
      $(".gotop").fadeIn();
    } else {
      $(".gotop").fadeOut();
    }
  });
  //手機選單
  $(".menu_button,header .md-overlay,.menu_mob a").click(function () {
    $("header").toggleClass("active");
    $(".menu_mob").slideToggle();
  });



  //錨點
  $('.ma').click(function () {
    $('html,body').animate({ scrollTop: $('.threshold').offset().top - 54 }, 800);
  });

  $('.mb').click(function () {
    $('html,body').animate({ scrollTop: $('.discount').offset().top - 54 }, 800);
  });

  $('.mc').click(function () {
    $('html,body').animate({ scrollTop: $('.courtesy').offset().top - 54 }, 800);
  });

  $('.md').click(function () {
    $('html,body').animate({ scrollTop: $('.condition').offset().top - 54 }, 800);
  });






  //首頁輪播
  $('.top_left_img_box').slick({
    arrows: true,
    autoplay: false,
    dots: false,
    infinite: true,
    autoplaySpeed: 6000,
  });

  $('.news_img_box').slick({
    arrows: true,
    autoplay: false,
    dots: false,
    infinite: true,
    slidesToShow: 3,
  });

  $('.standings_main ul').slick({
    arrows: true,
    autoplay: false,
    dots: false,
    infinite: true,
    slidesToShow: 3,
  });


  //lighrbox
  $(document).on('lity:resize', function (event, instance) {
    console.log('Lightbox resized');
  });




});

