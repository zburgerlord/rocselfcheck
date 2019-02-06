


var overlay = document.getElementById("overlay");
var butMet = document.getElementById("butMet");
var butNotMet = document.getElementById("butNotMet");
var butClear = document.getElementById("butClear");

var currentRow;
var currentTop;
var currentLeft;
var currentHeight;
var currentWidth;

window.addEventListener("resize", cleanz);
window.addEventListener("wheel", cleanz);

classy();
cleanz();

function cleanz() {


    butMet.setAttribute("class", "hide");
    butNotMet.setAttribute("class", "hide");
    butClear.setAttribute("class", "hide");
    overlay.setAttribute("class", "hide");
    butMet.setAttribute("style", "display: none;");
    butNotMet.setAttribute("style", "display: none;");
    butClear.setAttribute("style", "display: none;");
    overlay.setAttribute("style", "display: none;");
};

function classy ()
{

    allDem = document.querySelectorAll("tr")
    allDem.forEach(function(item)
    {

        item.setAttribute("onclick", "menuTime(event)");
        if (item.classList == "header")
        {
            return;
        }

        else
        {
            item.setAttribute("class", "content");
        }

    });



};


function clearEveryRow ()
{

    allDem = document.querySelectorAll("tr")
    allDem.forEach(function(item)
    {

        if (item.classList == "header")
        {
            return;
        }

        else
        {
            item.style.backgroundColor = "";
        }

    });



};

function clearSingleSection (element)
{

    var parent = element.parentNode;

    var theRows = parent.querySelectorAll("tr");

    theRows.forEach(function(item)
    {

        if (item.classList == "header")
        {
            return;
        }
        else
        {
            item.style.backgroundColor = "";

        }
    });


};


function menuTime(event) {

// make sure it is a table row that is clicked


// get current row and position from mouse click

    var x = event.clientX;
    var y = event.clientY;

    currentRow = document.elementFromPoint(x, y).parentElement;

    if (currentRow.classList != "content") {
      return;
    }

    else {

    console.log(currentRow);

    currentTop = currentRow.getBoundingClientRect().top;
    currentTop1 = currentRow.offsetTop;
    currentLeft = currentRow.getBoundingClientRect().left;
    currentHeight = currentRow.offsetHeight;
    currentWidth = currentRow.offsetWidth;



console.log("top: " + currentTop + " left: " + currentLeft + " width: " + currentWidth);

//clear style and position div with buttons in table row

    overlay.setAttribute("style", "");
    butMet.setAttribute("style", "");
    butNotMet.setAttribute("style", "");
    butClear.setAttribute("style", "");


overlay.setAttribute("style", "position: fixed; top: "
    + currentTop + "px" +
    "; left: " + currentLeft + "px" +
    "; width: " + currentWidth + "px" +
    "; height: " + currentHeight + "px" +
    "; max-height: " + currentHeight + "px" +
    "; max-width: " + currentWidth + "px" + ";");

butMet.setAttribute("style", "position: fixed; top: "
    + currentTop + "px" +
    "; left: " + (currentLeft + (currentWidth * 0.05)) + "px" +
    "; max-height: " + currentHeight + "px" +
    "; max-width: " + currentWidth + "px" + ";");

butNotMet.setAttribute("style", "position: fixed; top: "
    + currentTop + "px" +
    "; left: " + (currentLeft + (currentWidth * 0.35)) + "px" +
    "; max-height: " + currentHeight + "px" +
    "; max-width: " + currentWidth + "px" + ";");


butClear.setAttribute("style", "position: fixed; top: "
    + currentTop + "px" +
    "; left: " + (currentLeft + (currentWidth * 0.65)) + "px" +
    "; max-height: " + currentHeight + "px" +
    "; max-width: " + currentWidth + "px" + ";");

// show div and buttons

    overlay.setAttribute("class", "");
    butMet.setAttribute("class", "");
    butNotMet.setAttribute("class", "");
    butClear.setAttribute("class", "");

  };

};


function met() {

// hide that shit (div and buttons) and adjust color

    butMet.setAttribute("class", "hide");
    butNotMet.setAttribute("class", "hide");
    butClear.setAttribute("class", "hide");
    overlay.setAttribute("class", "hide");

    butMet.setAttribute("style", "display:none;");
    butNotMet.setAttribute("style", "display:none;");
    butClear.setAttribute("style", "display:none;");
    overlay.setAttribute("style", "display:none;");


    currentRow.style.backgroundColor = "#C6FF9E";


};

function notMet() {

// hide that shit (div and buttons) and adjust color

      butMet.setAttribute("class", "hide");
      butNotMet.setAttribute("class", "hide");
      butClear.setAttribute("class", "hide");
      overlay.setAttribute("class", "hide");

      butMet.setAttribute("style", "display:none;");
      butNotMet.setAttribute("style", "display:none;");
      butClear.setAttribute("style", "display:none;");
      overlay.setAttribute("style", "display:none;");


    currentRow.style.backgroundColor = "#FFA69E";

};


function clearRow() {

// hide that shit (div and buttons) and adjust color

      butMet.setAttribute("class", "hide");
      butNotMet.setAttribute("class", "hide");
      butClear.setAttribute("class", "hide");
      overlay.setAttribute("class", "hide");

      butMet.setAttribute("style", "display:none;");
      butNotMet.setAttribute("style", "display:none;");
      butClear.setAttribute("style", "display:none;");
      overlay.setAttribute("style", "display:none;");


    currentRow.style.backgroundColor = "";

};
