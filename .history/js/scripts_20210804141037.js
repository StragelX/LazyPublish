$( document ).ready(function() {
    $(window).scroll(function() {
        var offset = $('#bg_text_1').offset();
        if ($(window).scrollTop() != 0) {
            $('#bg_text_1').css('transform', 'translateX(-' + (2980 - $(window).scrollTop() * 0.2) +'px)');
        } else {
            $('#bg_text_1').removeAttr("style");
        }
        
    })
});