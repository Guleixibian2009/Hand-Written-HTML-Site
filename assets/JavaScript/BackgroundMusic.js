$(document).ready(
    function(){
        $("#Music_Stop").hide();
        $("#Music_Start").click(
            function(){
                $("#Music_Start").hide();
                $("#Music_Stop").show();
                $("#Music_Start").append(" <audio src=\"../assets/Musics/Move.mp3\"  autoplay=\"autoplay\"> </audio> ");
            }
        );
        $("#Music_Stop").click(
            function(){
                $("#Music_Start").show();
                $("#Music_Stop").hide();
            }
        )
    }
);