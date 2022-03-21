"use strict";
$(document).ready(function(){
    //First get the main article div
    const Article = document.getElementsByClassName("Main_Body_Article")[0];
    const AritcleChildren = Article.getElementsByTagName("*");
    var HeadingList = [];
    //Then get all h3/h4 elements and put them into an array
    for (let i = 0; i < AritcleChildren.length; i++) {
        const el = AritcleChildren.item(i);
        if (el.nodeName == "H3" || el.nodeName == "H4") {
            console.log(el ,"is h3 or h4!");
            HeadingList[HeadingList.length + 1] = el;
        } else {
            console.debug("el is not h3 or h4");
        }
    }
    
    //Next turn them into <li> and give them correct classes

    //Finally wrap them in a <ul> and output!


    //First highlight the first <li> by giving it an extra class

    //On Scroll, go through the array

    //Get the element's YOffSet

    //If it's smaller than 20 and bigger than -20

    //Highlight it and remove the older one
})