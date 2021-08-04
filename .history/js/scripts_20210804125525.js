$( document ).ready(function() {
    var scrollEventHandler = function() {
        if(isScrolledIntoView(document.getElementsByClassName('bg_text')[0])) {
            console.log("a")
            unbindScrollEventHandler();
        } else {
            console.log("b")
        }  
    }

    function unbindScrollEventHandler() {
        $(document).unbind('scroll', scrollEventHandler);
    }
    
    $(document).scroll(scrollEventHandler);
    
    function isScrolledIntoView(el) {
        var elemTop = el.getBoundingClientRect().top;
        var elemBottom = el.getBoundingClientRect().bottom;
    
        isVisible = elemTop < window.innerHeight && elemBottom >= 0;
        return isVisible;
    }
});