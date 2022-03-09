"use strict";
$(document).ready(function(){
    document.querySelectorAll('div.Code_Block > span').forEach(element => {
        hljs.highlightElement(element);
    });
});