$( document ).ready(function() {
    $(window).scroll(function() {
        var offset = $('#bg_text_1').offset();
        var posY = offset.top - $(window).scrollTop();
        console.log($(this).scrollTop(), posY)
        if ($(window).scrollTop() != 0) {
            $('#bg_text_1').css('transform', 'translateX(-' + (2980 - $(window).scrollTop() * 0.2) +'px)');
        } else {
            $('#bg_text_1').removeAttr("style");
        }
        
    })
});