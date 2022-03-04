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
    window.setTimeout(BannerDisappear, 6000);
});