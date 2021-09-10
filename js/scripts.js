$(document).ready(function () {
  $(window).scroll(function () {
    if ($(window).scrollTop() != 0) {
      $("#bg_text_1").css(
        "transform",
        "translateX(-" + (2980 - $(window).scrollTop() * 0.2) + "px)"
      );
      // $('#bg_text_2').css('transform', 'translateX(-' + (1000 - $(window).scrollTop() * 0.2) + 'px)');
      // $('.img_4').css('transform', 'translateY(' + (($(window).scrollTop() / 8) - 270) + 'px)');
      $(".improve_bg").css(
        "transform",
        "translateY(" + $(window).scrollTop() / 9.5 + "px)"
      );

      // if ( $(window).width() == 1024 ) {
      //     $('.img_2').css('transform', 'translateY(' + (($(window).scrollTop() / 4.3) - 550) + 'px)');
      // } else if ( $(window).width() == 768 ) {
      //     $('.img_2').css('transform', 'translateY(' + (($(window).scrollTop() / 4.3) - 630) + 'px)');
      // } else if ( $(window).width() <= 450 ) {
      //     $('.img_2').css('transform', 'translateY(' + (($(window).scrollTop() / 4.3) - 770) + 'px)');
      // } else {
      //     $('.img_2').css('transform', 'translateY(' + (($(window).scrollTop() / 4.3) - 430) + 'px)');
      // }
    } else {
      $("#bg_text_1, .improve_bg, .img_0").removeAttr("style");
    }
  });
});
