"use strict";
$(document).ready(function(){
    var banner = $(".Survey_Banner");

    function BannerDisappear(){
        $(banner).hide(500);
    }

    window.setTimeout(BannerDisappear, 6000);
});
