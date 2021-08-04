$( document ).ready(function() {
    var p = $(".bg_text");
    var offset = p.offset();

    $(document).scroll(
        function(){
            console.log(offset)
        }
    )
});