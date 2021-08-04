$( document ).ready(function() {
    
    $(window).scroll(function() {
        var offset = $('#bg_text_1').offset();
        var posY = offset.top - $(window).scrollTop();
        console.lo
        $('#bg_text_1').css('transform', 'translateX(-' + (posY + 400) * 2.4 +'px)')
    })
});