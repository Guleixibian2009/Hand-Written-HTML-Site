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
        ConfirmButton.value = Select.value;
    });

    Dialog.addEventListener("close", function(){
        Output.innerText = Dialog.returnValue;
    });
});