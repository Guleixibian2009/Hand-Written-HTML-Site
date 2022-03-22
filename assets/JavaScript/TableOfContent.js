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
    $("nav ul li:first").addClass("TOC_Current");
    //On Scroll, go through the array
    $(window).scroll(function(){
        for (let index = 0; index < HeadingList.length; index++) {
            //Get the element's distance to the top
            var heading = HeadingList[index];
            var OffsetY = heading.getBoundingClientRect().top;
            //If it's smaller than 50 and bigger than -50
            if (OffsetY < 50 && OffsetY > -50){
                $("li.TOC_Current").removeClass("TOC_Current");
                $(`nav ul li`).eq(index).addClass("TOC_Current");
            }
            //Highlight it and remove the older one
        }
    });

    //When clicked, get the id and it's YOffSet
    $("nav li").click(function(){
        var raw = $(this).text();
        var destination = raw.replace(/[0-9]+/g,"").replace(".","").replace(" ","");
        var heading = document.getElementById(destination);
        var headingY = heading.offsetTop;
        //Use jQuery.scrollTo to create a linear animation
        $.scrollTo(headingY-40,800);
    });

    $("nav h3").click(function(){
        $.scrollTo(0,800);
    });
});