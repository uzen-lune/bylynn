$(function(){
    var includes1 = $('[data-include1="header"]');
    var includes2 = $('[data-include2="aside"]');
    var includes3 = $('[data-include3="footer"]');
    var includes4 = $('[data-include4="search-layer"]');
    var includes5 = $('[data-include5="box-wrap"]');
    jQuery.each(includes1, function(){
       $(this).load('header.html');
    });
    jQuery.each(includes2, function(){
      $(this).load('aside.html');
    });
    jQuery.each(includes3, function(){
      $(this).load('footer.html');
    });
    jQuery.each(includes4, function(){
      $(this).load('search-layer.html');
    });
    jQuery.each(includes5, function(){
      $(this).load('box-wrap.html');
    });
  });