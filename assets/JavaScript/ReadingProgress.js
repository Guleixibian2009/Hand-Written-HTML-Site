"use strict";
$(document).ready(function(){
    function GetScrollY() {
        return document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
    }

    //What we need: WholeBodyHeight, CurrentScrollY, CurrentWindowHeight
    //Then the percentage is: CurrentScrollY / (WholeBodyHeight - CurrentWindowHeight) * 100 (%)
    //There must be "- CurrentWindowHeight" or it won't get to 100%
    function GetPercentage(){
        var BodyHeight = $(document).height();
        var CurrentWindowHeight = $(window).height();
        //Modern browser || Safari || IE
        var ScrollY = GetScrollY();
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

        //Fix the Author div's position
        //We also need the percentage of Header + margin-top
        //Then it will be ${ScrollY} / ${HeaderHeight}
        function GetHeaderHeight(){
            var HeaderHeight = $(".Header").outerHeight();
            var GridGap = parseInt($(".Wrapper").css("gap"));
            var MarginTop = parseInt($("body").css("margin-top"));
            var PaddingTop = parseInt($("body").css("padding-top"));
            var WholeHeight = HeaderHeight + MarginTop + PaddingTop + GridGap;
            var HeaderHeight = WholeHeight.toFixed(2);
            return HeaderHeight;
        }

        var HeaderHeight = GetHeaderHeight();
        var ScrollY = GetScrollY();
        if (ScrollY > HeaderHeight) {
            $(".Author").addClass("Author_Fixed");
        } else {
            $(".Author").removeClass("Author_Fixed");
        }
    });

    $(window).resize(function(){
        var width = GetBannerWidth();
        $("#Progress_Bar").css("width",`${width}%`);
    });
});

