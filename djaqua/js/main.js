$(document).ready(function(){
    let scrolling;

    let fixObj = $('.exp h2');
    let fixArea = $('.exp');
    let fixTop = 120;
    let fixBtm = 0;
    let fixStart;
    let fixEnd;

    objFixed();

    $(window).scroll(function(){
        objFixed();
    });

    $(window).resize(function(){
        objFixed();
    });

    function objFixed(){
        // console.log(scrolling);
        scrolling = $(window).scrollTop();
        fixStart = fixArea.offset().top - fixTop;
        fixEnd = fixArea.offset().top + fixArea.height() - fixObj.height() - fixBtm - fixTop;

        if(scrolling < fixStart){
            fixObj.removeClass('fixed');
            fixObj.removeClass('end');
        }else if((scrolling >= fixStart) && (scrolling < fixEnd)){
            fixObj.addClass('fixed');
            fixObj.removeClass('end');
        }else{
            fixObj.removeClass('fixed');
            fixObj.addClass('end');
        }
    }

    const swiper_dp = new Swiper('.display .dp', {

        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },

        loop: true,
        centeredSlides: true,
        
        slidesPerView: "auto", 
        spaceBetween: 16,
        breakpoints: {
          640: {
              spaceBetween: 30, 
          },
          1200: {
              spaceBetween: 35,
        },
          1550: {
              spaceBetween: 40,
          },
      },
    });

})

