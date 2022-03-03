"use strict";
$(document).ready(function(){
    function ShowOrHide(WindowWidth){
        if (WindowWidth <= 1100) {
            Sidebar.hide(200);
        } else {
            Sidebar.show(200);
        }
    }

    const Sidebar = $(".Sidebar");
    //Check the Width on opening
    var CurrentWindowWidth = parseInt($(window).width());
    ShowOrHide(CurrentWindowWidth);

    $(window).resize(function(){
        var CurrentWindowWidth = parseInt($(window).width());
        ShowOrHide(CurrentWindowWidth)
    });    
});