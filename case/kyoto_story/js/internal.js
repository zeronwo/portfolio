


$(document).ready(function (e) {

  $('.m_culture').click(function () {
    $('html,body').animate({ scrollTop: $('.culture').offset().top }, 800);
  });

  $('.m_map').click(function () {
    $('html,body').animate({ scrollTop: $('.map').offset().top }, 800);
  });

  $('.m_photo').click(function () {
    $('html,body').animate({ scrollTop: $('.photo').offset().top }, 800);
  });

  $('.m_news').click(function () {
    $('html,body').animate({ scrollTop: $('.news').offset().top }, 800);
  });
  $('.m_activity').click(function () {
    $('html,body').animate({ scrollTop: $('.activity').offset().top }, 800);
  });

  $('.go_top').click(function () {
    $('html,body').animate({ scrollTop: '0px' }, 800);
});


  $('[data-youtube]').youtube_background();





  $('.map_position li').click(function(e) {
    var $tabIndex = $(this).index();
    $(this).addClass('active').siblings(".map_position li").removeClass('active');
    $('.map_present li').eq($tabIndex).fadeIn().siblings(".map_present li").hide();
    $('.map_present li').eq($tabIndex).addClass("active");
});


  var owl = $('.activity_photo');
  owl.owlCarousel({
    rewind: true, //播完拉回第一張開始撥
    loop: false, //循環播放
    animateOut: 'fadeOut',
    autoplay: false, //自動撥放
    nav: true, //左右箭頭
    dots: false, //小圓點
    margin:80,
    items: 2, //數量 
    responsive:{
      0:{
        nav: false, 
        dots: true,
        items: 1, //數量 
      },
      600:{
        nav: true, 
        dots: false,
        
      },
  }
  })


  
  AOS.init({
    offset: 300,
    duration: 600,
    delay: 0,
   once: true, //只執行一次動畫

  });




}); //ready
