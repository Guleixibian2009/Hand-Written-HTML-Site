"use strict";
$(document).ready(function(){
    //What we need: WholeBodyHeight, CurrentScrollY, CurrentWindowHeight
    //Then the percentage is: CurrentScrollY / (WholeBodyHeight - CurrentWindowHeight) * 100 (%)
    //There must be "- CurrentWindowHeight" or it won't get to 100%
    function GetPercentage(){
        var BodyHeight = $(document).height();
        var CurrentWindowHeight = $(window).height();
        //Modern browser || Safari || IE
        var ScrollY = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
        var percentage = (ScrollY / (BodyHeight - CurrentWindowHeight)) * 100;
        return percentage;
    }

    function GetBannerWidth(){
        const percentage = GetPercentage();
        const width = percentage.toFixed(2);
        return width;
    }

    $(window).scroll(function(){
        //Get Progress_Bar width
        var width = GetBannerWidth();
        $("#Progress_Bar").css("width",`${width}%`);
    });

    $(window).resize(function(){
        var width = GetBannerWidth();
        $("#Progress_Bar").css("width",`${width}%`);
    });
});