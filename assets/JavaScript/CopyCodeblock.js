"use strict";
$(document).ready(function(){
    const Button = "button.Copy_Button";
    $(Button).hide(1);

    $("div.Code_Block").mouseenter(function(){
        $(Button).fadeIn(200);
    });

    $("div.Code_Block").mouseleave(function(){
        $(Button).fadeOut(200);
    });

    $(".Copy_Button").click(function(){
        const CodeBlock = $(".Copy_Button").prev("span");
        var CopyCode = CodeBlock.text();

        const Clip = new ClipboardJS(".Copy_Button",{
            text : function(){
                return CopyCode;
            }
        });
        
        Clip.on('success',(e)=>{
            console.log("Successfully copied to clipboard!");
            e.clearSelection();
            Clip.destroy();

            const Button = $(".Copy_Button");
            Button.html("<i class=\"fa fa-check fa-fw\"></i>");
            window.setTimeout(function(){
                Button.html("<i class=\"fa fa-clone fa-fw\"></i>");
            },1000);
        });
          
        Clip.on('error',()=>{
            console.error("Copy Failed!");
            Clip.destroy();
        });
    });
});