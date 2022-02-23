$(document).ready(
    function(){
        $("#Music_Stop").hide();
        $("#Music_Start").click(
            function(){
                $("#Music_Start").hide(300);
                $("#Music_Stop").show(300);
                $("audio #BGM").css({"autoplay" : "autoplay", "loop" : "loop"});
            }
        );
        $("#Music_Stop").click(
            function(){
                $("#Music_Start").show(300);
                $("#Music_Stop").hide(300);
                $("audio #BGM").css({"autoplay" : "false", "loop" : "false"});
            }
        );
    }
);