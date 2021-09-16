$(document).ready(function () {
  $(window).scroll(function () {
    if ($(window).scrollTop() != 0) {
      $("#bg_text_1").css(
        "transform",
        "translateX(-" + (2980 - $(window).scrollTop() * 0.2) + "px)"
      );
      $("#bg_text_2").css(
        "transform",
        "translateX(-" + (1000 - $(window).scrollTop() * 0.2) + "px)"
      );
    } else {
      $("#bg_text_1").removeAttr("style");
    }
  });

  setAdwantagesHeigth();

  window.onresize = function () {
    setAdwantagesHeigth();
  };
});

function setAdwantagesHeigth() {
  $(".adwantages .one").each(function () {
    $(this).css("height", $(this).css("width"));
  });
}
