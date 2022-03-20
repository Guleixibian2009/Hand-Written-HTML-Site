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
        $("div#Progress_Bar").css("width",`${width}%`);

        //Fix the Author div's position
        //We also need the percentage of Header + margin-top
        //Then it will be ${ScrollY} / ${HeaderHeight}
        function GetHeaderHeight(){
            var HeaderHeight = $("header.Header").outerHeight();
            var GridGap = parseInt($("div.Wrapper").css("gap"));
            var MarginTop = parseInt($("body").css("margin-top"));
            var PaddingTop = parseInt($("body").css("padding-top"));
            var WholeHeight = HeaderHeight + MarginTop + PaddingTop + GridGap;
            var HeaderHeight = WholeHeight.toFixed(2);
            return HeaderHeight;
        }

        var HeaderHeight = GetHeaderHeight();
        var ScrollY = GetScrollY();
        if (ScrollY > HeaderHeight) {
            $("aside.Sidebar").addClass("Sidebar_Fixed");
            $("nav.TOC").addClass("TOC_Fixed");
        } else {
            $("aside.Sidebar").removeClass("Sidebar_Fixed");
            $("nav.TOC").removeClass("TOC_Fixed");
        }
    });

    $(window).resize(function(){
        var width = GetBannerWidth();
        $("div#Progress_Bar").css("width",`${width}%`);
    });
});

