"use strict";
$(document).ready(function(){
    $(".Copy_Button").click(function(){
        var clipboard = new ClipboardJS(".Copy_Button",{
            target:(trigger) => trigger.previousElementSibling,
        });

        clipboard.on('success',(e)=>{
            console.log("Successfully copied to clipboard!");
            e.clearSelection();
        });
          
        clipboard.on('error',()=>{
            console.error("Copy Failed!");
        });

        const Button = $(".Copy_Button");
        Button.html("<i class=\"fa fa-check fa-fw\"></i>");
        window.setTimeout(function(){
            Button.html("<i class=\"fa fa-clone fa-fw\"></i>");
        },1000);
    });
});