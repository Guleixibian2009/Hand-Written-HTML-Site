"use strict";
$(document).ready(function(){
    //What we need: WholeBodyHeight, CurrentScrollY
    //Then the percentage is: (CurrentScrollY + CurrentWindowHeight) / WholeBodyHeight * 100 (%)
    //There must be "+ CurrentWindowHeight" or it won't get to 100%
    function GetWidth(){
        var BodyHeight = $(document).height();
        var CurrentWindowHeight = $(window).height();
        //Modern browser || Safari || IE
        var ScrollY = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
        var percentage = (ScrollY / (BodyHeight - CurrentWindowHeight)) * 100;
        const width = percentage.toFixed(2);
        return width;
    }

    $(window).scroll(function(){
        var width = GetWidth();
        $("#Progress_Bar").css("width",`${width}%`);
    });

    $(window).resize(function(){
        var width = GetWidth();
        $("#Progress_Bar").css("width",`${width}%`);
    });
});