$( document ).ready(function() {
    

    $(window).scroll(function() {
        var offset = $('.bg_text').offset();
        var posY = offset.top - $(window).scrollTop();

        console.log(posY);
    })
});