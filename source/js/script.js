// MAIN JS file

$(document).ready(function() {
    console.log('test');
    
    // show footer at the bootom of the page
    $(window).scroll(function() {
        
        if($(window).scrollTop() + $(window).height() == $(document).height()) {
            $('.footer-wrap').css('visibility', 'initial');

        }else {
            $('.footer-wrap').css('visibility', 'hidden');
        }
    });

});
