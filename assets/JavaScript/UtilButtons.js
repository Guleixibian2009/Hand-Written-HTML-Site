"use strict";
//The animation for the buttons
$(document).ready(function(){
    const ButtonGroup = $(".Util_Buttons");
    const BGMusic = $("#BG_Music");
    const BackToTop = $("#Back_To_Top");
    const FullScreen = $("#Full_Screen");
    const PageZoom = $("#Page_Zoom");
    const UtilsMain = $("#Utils_Main");

    function OnStart(){
        $(BGMusic).hide();
        $(BackToTop).hide();
        $(FullScreen).hide();
        $(PageZoom).hide();
        $(UtilsMain).show();
    }

    function OnMainHover(){
        $(BGMusic).show(800);
        $(BackToTop).show(600);
        $(FullScreen).show(400);
        $(PageZoom).show(200);
    }

    function MainNotHover(){
        $(BGMusic).hide(200);
        $(BackToTop).hide(400);
        $(FullScreen).hide(600);
        $(PageZoom).hide(800);
    }

    OnStart();

    $(ButtonGroup).mouseenter(function(){
        OnMainHover();
    });

    $(ButtonGroup).mouseleave(function(){
        MainNotHover();
    });
});

//The Backgroud Music Button
$(document).ready(function(){
    const BGMusic = $("#BG_Music");
    var status = 0;
    // Not Playing = 0; Playing = 1;

    function Start(){
        status = 1;
        // Both " and / must be escaped!
        $(BGMusic).after(" <audio id=\"BGM\" autoplay=\"autoplay\" src=\"https:\/\/bitbucket.org\/guleixibian2009\/hand-written-html-site\/raw\/master\/assets\/Musics\/Move.mp3\"></audio>");
    }

    function Stop(){
        status = 0;
        // Both " and / must be escaped!
        $("#BGM").remove();
    }

    $(BGMusic).click(function(){
        if (status == 0) {
            Start();
        } else {
            Stop();
        }
    });
});

//The Back To Top Button
$(document).ready(function(){
    const BackToTop = $("#Back_To_Top");

    $(BackToTop).click(function(){
        //flesher/jQuery.scrollTo method to create a linear animation
        $.scrollTo(0,1000);
    });
});

//The Full Screen Button
$(document).ready(function(){
    const FullScreen = $("#Full_Screen");
    var ScreenStatus = 0;

    function StartFullScreen(element){
        ScreenStatus = 1;
        if(element.requestFullscreen) {
            element.requestFullscreen();
        } else if(element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if(element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        } else if(element.msRequestFullscreen) {
            element.msRequestFullscreen();
        } else {
            window.alert("Sorry, your browser doesn't support RequestFullScreen.\nPlease press F11 manually.");
        }
    }

    function exitFullscreen() {
        ScreenStatus = 0;
        if(document.exitFullscreen) {
            document.exitFullscreen();
        } else if(document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if(document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else {
            window.alert("Sorry, your browser doesn't support ExitFullScreen.\nPlease press F11 or ESC manually.");
        }
    }

    $(FullScreen).click(function(){
        if (ScreenStatus == 0){
            StartFullScreen(document.documentElement);
        } else {
            exitFullscreen();
        }
    });
});