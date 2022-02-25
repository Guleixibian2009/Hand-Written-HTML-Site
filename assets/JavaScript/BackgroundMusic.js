$(document).ready(function(){
    $("#Music_Stop").hide();
    $("#Music_Start").click(function(){
        $("#Music_Start").hide(300);
        $("#Music_Stop").show(300);
        // Both " and / must be escaped
        $("#Music_Start").after(" <audio id=\"BGM\" autoplay=\"autoplay\" src=\"..\/Hand-Written-HTML-Site\/assets\/Musics\/Move.mp3\"></audio>");
    });

    $("#Music_Stop").click(function(){
        $("#Music_Start").show(300);
        $("#Music_Stop").hide(300);
        $("#BGM").remove();
    });
});