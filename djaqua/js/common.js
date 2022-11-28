$(window).on('load', function () {

    let pcMo;
    let winW;
    pcChk();

    $(window).resize(function(){
        pcChk();
    });

    function pcChk(){
        winW = $(window).width();
        if(winW > 640){
            pcMo = 'pc';
        }else{
            pcMo = 'mobile';
        }
    }

    $('.header .gnb>ul>li').on('mouseenter focusin', function(){
        if(pcMo == 'pc'){
            $('.header').addClass('menu_open');
        }
    });
    $('.header').on('mouseleave', function(){
        $('.header').removeClass('menu_open');
    });
    $('.header .gnb>ul>li:last-child>ul>li:last-child>a').on('focusout', function(){
        $('.header').removeClass('menu_open');
    });

    let scrolling;
    scrollChk();

    $(window).scroll(function(){
        scrollChk();
    });

    function scrollChk(){ 
        scrolling = $(window).scrollTop();
        // console.log(scrolling);
        if(scrolling > 0){
            $('.header').addClass('fixed');
        }else{
            $('.header').removeClass('fixed');
        }
    }

    $('.header .gnb .gnb_open').on('click', function(){
        $('.header').addClass('menu_mobile');
    });
    $('.header .gnb .gnb_close').on('click', function(){
        $('.header').removeClass('menu_mobile');
    });

    $('.header .gnb>ul>li>a').on('click', function(e){
        if(pcMo == 'mobile'){
            e.preventDefault();
            $(this).parents('li').toggleClass('sub_open');
        }
    });
    
    let headerH = $('header').height();
    // console.log(headerH,'헤더높이');
    let expTop = $('.exp').offset().top;
    // console.log(expTop,'체험상단');
    let expH = $('.exp').height();
    // console.log(expH,'체험높이');

    headerFixed();

    $(window).scroll(function(){
        headerFixed();
    });

    $(window).resize(function(){
        headerFixed();
    });

    function headerFixed(){
        if((scrolling >= expTop - headerH) && (scrolling <= expTop + headerH + expH)){
            $('.header').addClass('blue');
        }
        else{
            $('.header').removeClass('blue');
        }
    }
});