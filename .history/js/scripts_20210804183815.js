$( document ).ready(function() {
    $(window).scroll(function() {
        if ($(window).scrollTop() != 0) {
            $('#bg_text_1').css('transform', 'translateX(-' + (2980 - $(window).scrollTop() * 0.2) + 'px)');
            $('#bg_text_2').css('transform', 'translateX(-' + (1000 - $(window).scrollTop() * 0.2) + 'px)');
            $('.img_2').css('transform', 'translateY(' + (($(window).scrollTop() / 4.3) - 500) + 'px)');
            $('.img_4').css('transform', 'translateY(' + (($(window).scrollTop() / 8) - 500) + 'px)');
            $('.improve_bg').css('transform', 'translateY(' + ($(window).scrollTop() / 9.5) + 'px)');
            $('.img_0').css('transform', 'translateY(' + ($(window).scrollTop() / 8) + 'px)');
        } else {
            $('#bg_text_1, .improve_bg, .img_0').removeAttr("style");
        }
    })
});

// img_0