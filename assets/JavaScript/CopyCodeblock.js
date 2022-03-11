"use strict";
$(document).ready(function(){
    const ButtonGroup = "button.Copy_Button";
    $(ButtonGroup).hide(1);

    $("div.Code_Block").mouseenter(function(){
        const Button = $(this).children("button");
        $(Button).fadeIn(200);
    });

    $("div.Code_Block").mouseleave(function(){
        const Button = $(this).children("button");
        $(Button).fadeOut(200);
    });

    $(".Copy_Button").click(function(){
        const CodeBlock = $(this).prev("span");
        var CopyCode = CodeBlock.text();

        const Clip = new ClipboardJS(".Copy_Button",{
            text : function(){
                return CopyCode;
            }
        });
        
        Clip.on('success',(e)=>{
            e.clearSelection();
            Clip.destroy();

            const TipBar = $("#Tip_Bar");
            const Button = $(".Copy_Button");
            Button.html("<i class=\"fa fa-check fa-fw\"></i>");
            window.setTimeout(function(){
                Button.html("<i class=\"fa fa-clone fa-fw\"></i>");
            },1000);
            $(TipBar).html("<i class=\"fa fa-clipboard\"></i> <span>Successfully copied to clipboard!</span>");
            $(TipBar).fadeIn(200);
            window.setTimeout(function(){
                $(TipBar).fadeOut(200);
            }, 3000);
        });
          
        Clip.on('error',()=>{
            console.error("Copy Failed!");
            Clip.destroy();
        });
    });
});