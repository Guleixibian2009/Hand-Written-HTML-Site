"use strict";
//The animation for the buttons
$(document).ready(function(){
    const TipBar = $("div#Tip_Bar");
    const ButtonGroup = $("div.Util_Buttons");
    const ReadAload = $("button#Read_Aloud");
    const BGMusic = $("button#BG_Music");
    const BackToTop = $("button#Back_To_Top");
    const FullScreen = $("button#Full_Screen");
    const ShareLink = $("button#Share_Link");
    const UtilsMain = $("button#Utils_Main");
    const VolumeChooser = $("button#Volume_Wrapper");

    function OnStart(){
        $(TipBar).hide();
        $(ReadAload).hide();
        $(BGMusic).hide();
        $(BackToTop).hide();
        $(FullScreen).hide();
        $(ShareLink).hide();
        $(VolumeChooser).hide();
        $(UtilsMain).show();
    }

    function OnMainHover(){
        $(VolumeChooser).show(1000);
        $(ReadAload).show(1000);
        $(BGMusic).show(800);
        $(BackToTop).show(600);
        $(FullScreen).show(400);
        $(ShareLink).show(200);
    }

    function MainNotHover(){
        $(VolumeChooser).hide(1000);
        $(ReadAload).hide(200);
        $(BGMusic).hide(400);
        $(BackToTop).hide(600);
        $(FullScreen).hide(800);
        $(ShareLink).hide(1000);
    }

    OnStart();

    $(ButtonGroup).mouseenter(function(){
        OnMainHover();
    });

    $(ButtonGroup).mouseleave(function(){
        MainNotHover();
    });
});

//The volume Chooser
$(document).ready(function(){
    const VolumeChooser = $("input#Volume");
    window.CurrentVolume = {
        volume : "1.0"
    };

    $(VolumeChooser).bind("input propertychange", function(){
        window.CurrentVolume = {
            volume : VolumeChooser.val()
        };
    });
});

//The Read Aload Button
$(document).ready(function(){
    const Article = $("header.Header").text() + $("main.Main_Body").text() + $("footer.Footer").text();
    const ReadAload = $("button#Read_Aloud");
    const TipBar = $("div#Tip_Bar");
    var msg = undefined;
    var ReadStatus = 2;
    //Not Playing = 0; Playing = 1; Unstarted = 2;

    $(ReadAload).click(function(){
        switch (ReadStatus) {
            case 0:
                ReadStatus = 1;
                window.speechSynthesis.resume(msg);
                $(TipBar).html("<i class=\"fa fa-info\"></i> <span>Now reading the article for you!</span>");
                $(TipBar).fadeIn(200);
                window.setTimeout(function(){
                    $(TipBar).fadeOut(200);
                }, 3000);
                break;
            case 1:
                ReadStatus = 0;
                window.speechSynthesis.pause(msg);
                $(TipBar).html("<i class=\"fa fa-info\"></i> <span>The reading has stopped</span>");
                $(TipBar).fadeIn(200);
                window.setTimeout(function(){
                    $(TipBar).fadeOut(200);
                }, 3000);
                break;
            case 2:
                ReadStatus = 1;
                msg = new SpeechSynthesisUtterance();
                msg.lang = "en";
                msg.text = Article;
                msg.voice = window.speechSynthesis.getVoices()[2];
                speechSynthesis.speak(msg);
                $(TipBar).html("<i class=\"fa fa-info\"></i> <span>Now reading the article for you!</span>");
                $(TipBar).fadeIn(200);
                window.setTimeout(function(){
                    $(TipBar).fadeOut(200);
                }, 3000);
                break;
        }
    });
});

//The Backgroud Music Button
$(document).ready(function(){
    const VolumeChooser = $("input#Volume");
    const MusicPath = "https://bitbucket.org/guleixibian2009/hand-written-html-site/raw/master/assets/Musics/Move.mp3";
    const TipBar = $("div#Tip_Bar");
    const BGMusic = $("button#BG_Music");
    var MusicStatus = 0;
    //Not Playing = 0; Playing = 1;

    var Music = new Howl({
        src: [MusicPath],
        autoplay: false,
        loop: true,
        volume: 0.0,
        preload: true
    });

    $(BGMusic).click(function(){
        if (MusicStatus == 0){
            MusicStatus = 1;
            Music.play();
            Music.fade(0.0, 1.0, 1000);
            $(TipBar).html("<i class=\"fa fa-info\"></i> <span>Now playing: Axero\/Itro---Move!</span>");
            $(TipBar).fadeIn(200);
            window.setTimeout(function(){
                $(TipBar).fadeOut(200);
            }, 3000);

            $(VolumeChooser).bind("input propertychange", function(){
                if (MusicStatus == 1) {
                    Howler.volume(parseFloat(window.CurrentVolume.volume));
                }
            });
        } else {
            MusicStatus = 0;
            Music.fade(1.0, 0.0, 1000);
            Music.pause();
            $(TipBar).html("<i class=\"fa fa-info\"></i> <span>The music has stopped</span>");
            $(TipBar).fadeIn(200);
            window.setTimeout(function(){
                $(TipBar).fadeOut(200);
            }, 3000);
        }
    });
});

//The Back To Top Button
$(document).ready(function(){
    const BackToTop = $("button#Back_To_Top");

    $(BackToTop).click(function(){
        //flesher/jQuery.scrollTo method to create a linear animation
        $.scrollTo(0,1000);
    });
});

//The Full Screen Button
$(document).ready(function(){
    const FullScreen = $("button#Full_Screen");
    var ScreenStatus = 0;

    function StartFullScreen(element){
        ScreenStatus = 1;
        if(element.requestFullscreen) {
            element.requestFullscreen();
        } else if(element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if(element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        } else if(element.msRequestFullscreen) {
            element.msRequestFullscreen();
        } else {
            window.alert("Sorry, your browser doesn't support RequestFullScreen.\nPlease press F11 manually.");
        }
    }

    function exitFullscreen() {
        ScreenStatus = 0;
        if(document.exitFullscreen) {
            document.exitFullscreen();
        } else if(document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if(document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else {
            window.alert("Sorry, your browser doesn't support ExitFullScreen.\nPlease press F11 or ESC manually.");
        }
    }

    $(FullScreen).click(function(){
        if (ScreenStatus == 0){
            StartFullScreen(document.documentElement);
        } else {
            exitFullscreen();
        }
    });
});

//The Share Link Button
$(document).ready(function(){
    const ShareLink = $("button#Share_Link");

    function GetLink(){
        const Link = document.URL;
        return Link;
    }

    $(ShareLink).click(function(){
        var CurrentLink = GetLink();
        const Clip = new ClipboardJS("button#Share_Link",{
            text : function(){
                return CurrentLink;
            }
        });
        
        Clip.on('success',(e)=>{
            e.clearSelection();
            Clip.destroy();

            const TipBar = $("div#Tip_Bar");
            $(TipBar).html("<i class=\"fa fa-clipboard\"></i> <span>Successfully copied link to clipboard!</span>");
            $(TipBar).fadeIn(200);
            window.setTimeout(function(){
                $(TipBar).fadeOut(200);
            }, 3000);
        });
          
        Clip.on('error',()=>{
            const TipBar = $("div#Tip_Bar");
            $(TipBar).html("<i class=\"fa fa-clipboard\"></i> <span>Copy failed!</span>");
            $(TipBar).fadeIn(200);
            window.setTimeout(function(){
                $(TipBar).fadeOut(200);
            }, 3000);
            Clip.destroy();
        });
    });
});