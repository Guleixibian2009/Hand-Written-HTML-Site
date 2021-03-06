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

    const Update_Data = $("div.Main_Body_Update_Data");
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
    var MouseDown = false;
    var Timer = undefined;
    function onMove(){
        $("html").css({
            "scrollbar-color": "skyblue peachpuff",
            "scrollbar-width": "thin"
        });
        $("div.Code_Block span").css({
            "scrollbar-color": "skyblue peachpuff",
            "scrollbar-width": "thin"
        });
        $("::-webkit-scrollbar-thumb").css({
            "background-color": "skyblue"
        });
    }

    function onStay(){
        $("html").css({
            "scrollbar-color": "rgba(135, 206, 235, 0.6) rgba(255, 218, 185, 0.6)"
        });
        $("div.Code_Block span").css({
            "scrollbar-color": "rgba(135, 206, 235, 0.6) rgba(255, 218, 185, 0.6)"
        });
        $("::-webkit-scrollbar-thumb").css({
            "background-color": "rgba(135, 206, 235, 0.6)"
        });
    }

    onMove();

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
    });

    $(window).mousedown(function(){
        MouseDown = true;
        clearTimeout(Timer);
        onMove();
        Timer = setTimeout(function(){
            MouseDown = false;
            onStay();
        },1000);
    });
});

//Follow mouse
$(document).ready(function(){
    const followOptions = {
        color : 'indianred',
        height : 10,
        width : 10,
        transitionDelay: 0,
        transitionDuration: 100
    };
    const follow = new MouseFollow(followOptions);
    follow.initialize();
});

//The title
document.title = "???Loading...";
$(document).ready(function(){
    document.title = "????Hand-Written-HTML-Site";
    window.onfocus = function(){
        window.setTimeout(function(){
            document.title = '????Hand-Written-HTML-Site';
        }, 200);
    };
    window.onblur = function(){
        window.setTimeout(function(){
            document.title = '???Loading...';
        }, 200);
    };
});

//Magictime effects
$(document).ready(function(){
    const Header = $("header.Header");
    const Author = $("aside.Sidebar");
    const Body = $("main.Main_Body");
    const TOC = $("nav.TOC");

    function ChangeAnimateClass(){
        $(Header).toggleClass('magictime slideUpReturn');
        $(Author).toggleClass('magictime perspectiveLeftReturn');
        $(Body).toggleClass('magictime slideDownReturn');
        $(TOC).toggleClass('magictime perspectiveRightReturn');
    }
    
    ChangeAnimateClass();
    window.setTimeout(ChangeAnimateClass, 1000);
});