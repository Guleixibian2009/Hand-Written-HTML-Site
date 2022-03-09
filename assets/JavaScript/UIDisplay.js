"use strict";
$(document).ready(function(){
    //Update_Data
    //Horizontal = 1, Vertical = 0
    function ShowOrHide(WindowWidth){
        if (WindowWidth <= 1000) {
            Update_Data.show(200);
        } else {
            Update_Data.hide(200);
        }
    }

    const Update_Data = $(".Main_Body_Update_Data");
    //Check the Width on opening
    var CurrentWindowWidth = parseInt($(window).width());
    ShowOrHide(CurrentWindowWidth);

    $(window).resize(function(){
        var CurrentWindowWidth = parseInt($(window).width());
        ShowOrHide(CurrentWindowWidth)
    });    

    //Survey_Banner
    const banner = $(".Survey_Banner");
    function BannerDisappear(){
        $(banner).hide(500);
    }
    window.setTimeout(BannerDisappear, 10000);

    //Scroll_Bar
    var Moving = false;
    var Scrolling = false;
    var Timer = undefined;
    function onMove(){
        $("*").css({
            "scrollbar-color": "skyblue peachpuff"
        });
        $("::-webkit-scrollbar-thumb").css({
            "background-color": "skyblue"
        });
    }

    function onStay(){
        $("*").css({
            "scrollbar-color": "rgba(135, 206, 235, 0.6) rgba(255, 218, 185, 0.6)"
        });
        $("::-webkit-scrollbar-thumb").css({
            "background-color": "rgba(135, 206, 235, 0.6)"
        });
    }

    $(window).mousemove(function(){
        Moving = true;
        clearTimeout(Timer);
        onMove();
        Timer = setTimeout(function(){
            Moving = false;
            onStay();
        },1000);
    });

    //jQuery/jQuery-mousewheel API from GitHub
    $(window).mousewheel(function(){
        Scrolling = true;
        clearTimeout(Timer);
        onMove();
        Timer = setTimeout(function(){
            Scrolling = false;
            onStay();
        },1000);
    })
});