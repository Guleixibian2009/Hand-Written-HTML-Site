"use strict";
$(document).ready(function(){
    const Music_Button = $("#Music");
    var status = 0;
    // Not Playing = 0; Playing = 1;
    document.getElementById("Music").innerHTML = " <i class=\"fas fa-play\"></i> Music!";

    function Start(){
        status = 1;
        $(Music_Button).slideToggle(200);
        window.setTimeout(function(){
            document.getElementById("Music").innerHTML = "\<i class=\"fas fa-pause\"\>\</i\> Axero/Itro--Move";
        }, 200);
        // Both " and / must be escaped!
        $(Music_Button).after(" <audio id=\"BGM\" autoplay=\"autoplay\" src=\"..\/Hand-Written-HTML-Site\/assets\/Musics\/Move.mp3\"></audio>");
        $(Music_Button).slideToggle(200);
    }

    function Stop(){
        status = 0;
        $(Music_Button).slideToggle(200);
        window.setTimeout(function(){
            document.getElementById("Music").innerHTML = " <i class=\"fas fa-play\"></i> Music!";
        }, 200);
        // Both " and / must be escaped!
        $("#BGM").remove();
        $(Music_Button).slideToggle(200);
    }

    $(Music_Button).click(function(){
        if (status == 0) {
            Start();
        } else {
            Stop();
        }
    });
});