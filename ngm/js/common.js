$(window).on('load', function () {

  let pcMo;
  let winW;
  pcChk();

  $(window).resize(function(){
      pcChk();
  });

  function pcChk(){
      winW = $(window).width();
      if(winW > 900){
          pcMo = 'pc';
      }else{
          pcMo = 'mobile';
      }
  }

  let sum = 0;
 
  $(window).scroll(function(){
    if(sum < scrolling){
      // console.log('내려가는중')
      $('.header').removeClass('fixed');
    }else{
      // console.log('올라가는중')
      $('.header').addClass('fixed');
    }
    // console.log(sum)
    sum = scrolling;
    scrolling = window.pageYOffset;
  });

  let scrolling;
  
  $('.header .gnb .gnb_open').on('click', function(){
      $('.header').addClass('menu_mobile');
  });
  $('.header .gnb .gnb_close').on('click', function(){
      $('.header').removeClass('menu_mobile');
  });
  
  $('footer .flogo button.open').on('click', function(){
      $('footer .flogo').toggleClass('f_open')
      $('.footer .finfo').slideDown()
  })
  $('footer .flogo button.close').on('click', function(){
    $('footer .flogo').toggleClass('f_open')
    $('.footer .finfo').slideUp()
})

});