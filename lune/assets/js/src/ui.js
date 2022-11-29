/* ui.js */


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
        $('body').addClass('mobile');
        $('body').removeClass('pc');
    } else {
        //PC 브라우저
        console.log('pc');
        $('body').addClass('pc');
        $('body').removeClass('mobile');
    }
});

