"use strict";
$(document).ready(function(){
    //Horizontal = 1, Vertical = 0
    var PageStatus = 1;
    function ShowOrHide(WindowWidth){
        if (WindowWidth <= 1000) {
            Update_Data.show(200);
            console.debug("Showed!");
        } else {
            Update_Data.hide(200);
            console.debug("Hided!");
        }
    }

    const Update_Data = $(".Main_Body_Update_Data");
    console.debug(Update_Data);
    //Check the Width on opening
    var CurrentWindowWidth = parseInt($(window).width());
    ShowOrHide(CurrentWindowWidth);

    $(window).resize(function(){
        var CurrentWindowWidth = parseInt($(window).width());
        ShowOrHide(CurrentWindowWidth)
    });    

    const banner = $(".Survey_Banner");

    function BannerDisappear(){
        $(banner).hide(500);
    }

    window.setTimeout(BannerDisappear, 6000);
});