"use strict";
$(document).ready(function(){
    //What we need: WholeBodyHeight, CurrentScrollY
    //Then the percentage is: (CurrentScrollY + CurrentWindowHeight) / WholeBodyHeight * 100 (%)
    //There must be "+ CurrentWindowHeight" or it won't get to 100%
    function OnScroll(){
        var BodyHeight = $(document).height();
        //Modern browser || Safari || IE
        var ScrollY = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
        var percentage = (ScrollY / BodyHeight) * 100;
        const width = percentage.toFixed(2);
        return width;
    }

    $(window).scroll(function(){
        var width = OnScroll();
        $("#Progress_Bar").css("width",`${width}%`);
    });
});