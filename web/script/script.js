///// 換圖輪播Section-1 CSS-Slider /////    
  // Auto Switching Images for CSS-Slider
  function bannerSwitcher() {
    next = $('.sec-1-input').filter(':checked').next('.sec-1-input');
    if (next.length) next.prop('checked', true);
    else $('.sec-1-input').first().prop('checked', true);
  }/* 控制循環播放banner1~4的JQuery */

  var bannerTimer = setInterval(bannerSwitcher, 5000);

  $('nav .controls label').click(function() {
    clearInterval(bannerTimer);
    bannerTimer = setInterval(bannerSwitcher, 5000)
  });
//----$(document).ready(function可簡略為$(function(){...})寫一次包在外面即可
$(document).ready(function () {
  // -漢堡按鈕-
  $('.hamburger').click(function () {
      $(this).toggleClass('is-active');
      $('.navigation').toggleClass('show');
  });
  // 捲軸效果移到指定位置,區域變數不能省略var
  $(".menu a").click(function (){
    var btn = $(this).attr("href");
    var pos = $(btn).offset();
    $("html,body").animate({scrollTop:pos.top-$('#top').height()},1000);
  });
  // 置頂按鈕gotop
  $('#gotop').click(function(){
    $("html,body").animate({scrollTop:0},1000);
  });
  // 置頂按鈕淡出淡入
  $(window).scroll(function(){
    if( $(this).scrollTop() > 200 ){
      $('#gotop').stop().fadeTo('fast',1);
    }else{
      $('#gotop').stop().fadeOut();
    }
  });
  // 移除背景影片
  if($(window).width() < 821 ){
    $('#about video').remove();
  }
});

//預設淡出淡入
$('.smoove').smoove({
  offset :'40%'/* 距離底部%的距離淡入 */
});