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
        $('body').addClass('mobile');
        $('body').removeClass('pc');
    } else {
        //PC 브라우저
        console.log('pc');
        $('body').addClass('pc');
        $('body').removeClass('mobile');
    }


    //display 필터
    var $dSort = $('.display-filter .btn-sort'),
        $dSortList = $('.display-filter .sort-list'),
        $dSortItem = $('.display-filter.sort-list.active li a');

        $dSort.on('click', function() {
            $dSortList.toggleClass('active');
        });
        $dSortItem.on('click', function() {
            console.log("xxx");
            $dSortList.removeClass('active');
        });


    //로그인 상위 카테고리
    $(".category-parent").click(function(){
        if($(this).hasClass("open")) {
            $(this).addClass("close").removeClass("open");
            $(this).next('.depth1').slideUp();
          } else {
            $(this).addClass("open").removeClass("close");
            $(this).next('.depth1').slideDown();
        }
    });

    //로그인 하위 카테고리 아코디언
    var acc = document.getElementsByClassName("category-link");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            console.log("click");
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
            } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
            } 
        });
    }

});


