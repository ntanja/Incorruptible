$(document).ready(function () {
    //zoom slider  
    $('.first-script, .second-script').click(function () {
        $('.script-zoom').show();
    });
    $('.zoom-close').click(function () {
        $('.script-zoom').hide();
    });
    
    //show contact form
    $('.show-form').click(function () {
        $('.gift-form').show();
    });
    $('.close-form').click(function () {
        $('.gift-form').hide();
    });
});
