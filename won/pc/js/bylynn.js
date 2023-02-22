$(document).ready(function() {
    //스와이퍼
    /*var swiper = new Swiper('.swiper', {
        slidesPerView: "auto",
        scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
            hide: true,

        },
    });*/
    
  
    $('.menu').click(function() {
        var a = $(this).css('background-image');
        console.log(a);
        var menucheck = a.includes('menu');
        if (menucheck == true) {
            $('.gnb').animate({
                left: 0
            });
            $('.menu').css({
                backgroundImage: "url(../images/close.svg)"
            });

        } else {
            $('.gnb').animate({
                left: "-100%"
            });
            $('.menu').css({
                backgroundImage: "url(../images/menu.svg)"
            });

        };

    });

    //slide-five
    var i = 0
    $('.slide_five .btn-prev').click(function(e) {
        e.preventDefault();
        var slide = $('.slide_five .slide-wrap .slide');
        var slideWidth = slide.width();
        var marginLeft = slide.css("margin-left");
        var a = slide.css('margin-right').replace('px', '');
        var margin = Number(a);
        var slideMove = slideWidth + (margin * 2);
        if (i < 1) {
            i++;
            $('.slide_five .slide-wrap').animate({
                left: i * slideMove
            });
            console.log(i);
        };
    });
    $('.slide_five .btn-next').click(function(e) {
        e.preventDefault();
        var slide = $('.slide_five .slide-wrap .slide');
        var slideWidth = slide.width();
        var marginLeft = slide.css("margin-left");
        var a = slide.css('margin-right').replace('px', '');
        var margin = Number(a);
        var slideMove = slideWidth + (margin * 2);
        if (i > -1) {
            i--;
            $('.slide_five .slide-wrap').animate({
                left: i * slideMove
            });
            console.log(i);
        };
    });

    /*search-layer*/
    $('.search').click(function() {
        /* var focus = ($(this).is(':focus'));
        if (focus == true) {
            $('.search-layer').css({
                display: "flex"
            });
        }; */
        $('.search-layer').fadeToggle(300);

    });
    
    /*$('html').click(function(e) {
        if (!$(e.target).hasClass(".txt")) {
            $('.search-layer').css({
                display: "none"
            });
        }
    });
    */





});
$(window).scroll(function() {
    var sctop = $(window).scrollTop();
    /*console.log(sctop);*/
    if (sctop > 70) {
        $('header').css({
            backgroundColor: "#fff",
        });
        $('.main-page header').css({
            backgroundColor: "rgba(255,255,255,0.8)",
        });
        $('.main-page header').css({
            boxShadow:"0 0 8px rgba(0, 0, 0, 0.25)"
        });
    } else {
        $('header').css({
            backgroundColor: "transparent",
            borderBottom: 0
        });
        $('.main-page header').css({
            boxShadow:"none"
        });
    };


    if (sctop > 1000) {
        $('.aside-top').css({
            display: "block"
        });
    } else {
        $('.aside-top').css({
            display: "none"
        });
    };
});