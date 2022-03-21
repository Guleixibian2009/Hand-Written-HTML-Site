"use strict";
$(document).ready(function(){
    const StartButton = document.getElementById('Start_Like_Survey');
    const Dialog = document.getElementById('Like_Survey');
    const Select = document.getElementsByTagName('select')[0];
    const Output = document.getElementById('Output');
    const ConfirmButton = document.getElementById('confirm');

    StartButton.addEventListener('click',function(){
        if (typeof Dialog.showModal === "function"){
            Dialog.showModal();
        } else {
            alert("Sorry, your browser doesn't support the <dialog> tag.");
        }
    });

    Select.addEventListener("change", function(){
        ConfirmButton.value = Select.options[Select.selectedIndex].id;
    });

    Dialog.addEventListener("close", function(){
        var value = Dialog.returnValue;
        switch (value){
            case "option1":{
                Output.innerHTML = "Thank you! I'll always try to make it better. You can download the source code if you wish!";
                break;
            }
            case "option2":{
                Output.innerHTML = "Have some great ideas? Open an issue and contribute on GitHub!";
                break;
            }
            case "option3":{
                Output.innerHTML = "I'm sorry to hear that. If you really do have some opinions, please <a href=\"mailto://guleixibian2009@outlook.com\">contact me</a>."
                break;
            }
        }
    });
});