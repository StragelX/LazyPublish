$( document ).ready(function() {
    
    $(window).scroll(function() {
        var offset = $('#bg_text_1').offset();
        var posY = offset.top - $(window).scrollTop();
        $('#bg_text_1').css('transform', 'translateX(-' + posY * 3.6 +'px)')
    })
});