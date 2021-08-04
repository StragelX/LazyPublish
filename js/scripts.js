$( document ).ready(function() {
    $(window).scroll(function() {
        if ($(window).scrollTop() != 0) {
            $('#bg_text_1').css('transform', 'translateX(-' + (2980 - $(window).scrollTop() * 0.2) +'px)');

            $('#bg_text_2').css('transform', 'translateX(-' + (1000 - $(window).scrollTop() * 0.2) +'px)');

            // $('.img_1').css('transform', 'translateY(' + (($(window).scrollTop() / 5.2) - 420) +'px)');
            $('.img_2').css('transform', 'translateY(' + (($(window).scrollTop() / 4.3) - 500) +'px)');
            // $('.img_3').css('transform', 'translateY(' + (($(window).scrollTop() / 5) - 650) +'px)');
            $('.img_4').css('transform', 'translateY(' + (($(window).scrollTop() / 8) - 500) +'px)');
            // $('.img_5').css('transform', 'translateY(' + (($(window).scrollTop() / 6) - 400) +'px)');
        } else {
            $('#bg_text_1, #bg_text_2').removeAttr("style");
        }
    })
});