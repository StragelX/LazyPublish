$( document ).ready(function() {
    $(window).scroll(function() {
        if ($(window).scrollTop() != 0) {
            $('#bg_text_1').css('transform', 'translateX(-' + (2980 - $(window).scrollTop() * 0.2) +'px)');

            $('#bg_text_2').css('transform', 'translateX(-' + (1000 - $(window).scrollTop() * 0.2) +'px)');

            $('.img_1').css('transform', 'translateY(-' + (100 - $(window).scrollTop() * 0.2) +'px)');
        } else {
            $('#bg_text_1, #bg_text_2').removeAttr("style");
        }
    })
});