/* ui.js */

<<<<<<< HEAD
//main swiper
$(function() {
    var swiper = new Swiper('.main-slide .swiper-container', {
        pagination: {
            el: ".swiper-pagination",
        },
    });
});
=======

$( document ).ready(function() {
    //브라우저 체크
    function isMobileYn(){
        var filter = "win16|win32|win64|mac|macintel";
        if (navigator.platform ) {
            if (filter.indexOf(navigator.platform.toLowerCase()) < 0) {
                return true;
            } else {
                return false;
            }
        }
        return false;
    }

    if (isMobileYn()) {
        //모바일 브라우저
        console.log('mobile');
        alert('mobile');
    } else {
        //PC 브라우저
        console.log('pc');
    }
});

>>>>>>> 574b5a546cc3857260de12e16b36222c3b57d638
