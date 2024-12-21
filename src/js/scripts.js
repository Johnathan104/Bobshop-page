/*!
* Start Bootstrap - Grayscale v7.0.6 (https://startbootstrap.com/theme/grayscale)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
*/
//
// Scripts
// 

$(document).ready(function() {
    console.log("HEYYYYY")
    // hides the sign up box
    $("#signupBox").hide();
    console.log("halooo")
    // does something when the span is clicked
    $("#loginSwitch").click(function (e) { 
        e.preventDefault();
        console.log("has been clicked")
        $("#signupBox").show();
        $("#loginBox").hide();
    });
    $("#signupSwitch").click(function (e) { 
        e.preventDefault();
        $("#signupBox").hide();
        $("#loginBox").show();
    });

    // Navbar shrink function
    var navbarShrink = function () {
        var navbarCollapsible = $('#mainNav');
        if (!navbarCollapsible.length) {
            return;
        }
        if ($(window).scrollTop() === 0) {
            navbarCollapsible.removeClass('navbar-shrink');
        } else {
            navbarCollapsible.addClass('navbar-shrink');
        }
    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    $(window).on('scroll', navbarShrink);

});
