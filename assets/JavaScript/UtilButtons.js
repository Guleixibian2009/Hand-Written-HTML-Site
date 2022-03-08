//The animation for the buttons
$(document).ready(function(){
    const ButtonGroup = $(".Util_Buttons");
    const BackToTop = $("#Back_To_Top");
    const FullScreen = $("#Full_Screen");
    const PageZoom = $("#Page_Zoom");
    const UtilsMain = $("#Utils_Main");

    function OnStart(){
        $(BackToTop).hide();
        $(FullScreen).hide();
        $(PageZoom).hide();
        $(UtilsMain).show();
    }

    function OnMainHover(){
        $(BackToTop).show(600);
        $(FullScreen).show(400);
        $(PageZoom).show(200);
    }

    function MainNotHover(){
        $(BackToTop).hide(200);
        $(FullScreen).hide(400);
        $(PageZoom).hide(600);
    }

    OnStart();

    $(ButtonGroup).mouseenter(function(){
        OnMainHover();
    });

    $(ButtonGroup).mouseleave(function(){
        MainNotHover();
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
