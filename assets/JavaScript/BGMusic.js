"use strict";
$(document).ready(function(){
    const TipBar = $("#Tip_Bar");
    const BGMusic = $("#BG_Music");
    var status = 0;
    // Not Playing = 0; Playing = 1;

    var LoadQueue = new createjs.LoadQueue();
    LoadQueue.on("complete", MusicPlay, this);
    LoadQueue.loadFile({
        id  : "BGM",
        src : "https://bitbucket.org/guleixibian2009/hand-written-html-site/raw/master/assets/Musics/Move.mp3"
    });
    var music = createjs.Sound.play("BGM");
    music.paused = true;

    function MusicPlay(){
        $(BGMusic).click(function(){
            if (status == 0){
                status = 1;
                music.paused = false;
                $(TipBar).html("<i class=\"fa fa-info\"></i> <span>Now playing: Axero\/Itro---Move!</span>");
                $(TipBar).fadeIn(200);
                window.setTimeout(function(){
                    $(TipBar).fadeOut(200);
                }, 3000);
            } else {
                status = 0;
                music.paused = true;
                $(TipBar).html("<i class=\"fa fa-info\"></i> <span>The music has stopped</span>");
                $(TipBar).fadeIn(200);
                window.setTimeout(function(){
                    $(TipBar).fadeOut(200);
                }, 3000);
            }
        });
    }
});