"use strict";

// Open and close menu for mobile nav
$('.menu').click(function() {
    if ($('.navbar').parent().hasClass('mobile-nav')) {
        $('.navbar').parent().removeClass('mobile-nav')
        $('.menu').attr("src", "./images/icon-menu.svg")
    }
    else {
        $('.navbar').parent().addClass('mobile-nav')
        $('.menu').attr("src", "./images/icon-menu-close.svg")
    }
});