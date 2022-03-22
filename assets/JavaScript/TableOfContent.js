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
            HeadingList[HeadingList.length] = el;
        }
    }
    //Next turn them into <li> and give them correct classes
    var OutputList = `<h3>Table Of Contents</h3><ul id="TOC">`
    var heading = 0;
    var subheading = 0;
    HeadingList.forEach(el => {
        if (el.nodeName == "H3"){
            heading++;
            subheading = 0;
            var outputClass = "TOC_Item_H3";
            el.id = $(el).text();
            var output = `<li class="${outputClass}">${heading}. ${el.innerHTML}</li>`
        } else if (el.nodeName == "H4"){
            subheading++
            var outputClass = "TOC_Item_H4";
            el.id = $(el).text();
            var output = `<li class="${outputClass}">${heading}.${subheading} ${el.innerHTML}</li>`
        }
        OutputList = OutputList + output;
    });
    OutputList = OutputList + `</ul>`;
    //Finally output!
    $("nav.TOC").html(OutputList);


    //First highlight the first <li> by giving it an extra class

    //On Scroll, go through the array

    //Get the element's YOffSet

    //If it's smaller than 20 and bigger than -20

    //Highlight it and remove the older one
})