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
