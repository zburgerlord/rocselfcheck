


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

    allCells = document.querySelectorAll("td");

    allCells.forEach(function(item)
    {

      item.setAttribute("style", "");

    });



};


function clearEveryRow ()
{

    allDem = document.querySelectorAll("td")
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

function clearSingleSection ()
{


    theCells = document.querySelectorAll("td");

    theCells.forEach(function(item)
    {

            item.style.backgroundColor = "";


    });


};


function menuTime(event) {

// make sure it is a table row that is clicked


// get current row and position from mouse click

    var x = event.clientX;
    var y = event.clientY;

    currentRow = document.elementFromPoint(x, y).parentElement;
    currentCell = document.elementFromPoint(x, y);
    cellCheck = currentRow.childNodes;

    if (currentRow.classList != "content") {
      return;
    }

    if (currentCell.cellIndex == 2) {
      return;
    }

    else {

  //  console.log(currentRow);
  //  console.log(currentCell);

    var currentTop = currentRow.getBoundingClientRect().top;
    var currentTop1 = currentRow.offsetTop;
    var currentLeft = currentRow.getBoundingClientRect().left;
    var currentHeight = currentRow.offsetHeight;
    var currentWidth = currentRow.offsetWidth;
    var currentCellTop = currentCell.getBoundingClientRect().top;
    var currentCellLeft = currentCell.getBoundingClientRect().left;
    var currentCellWidth = currentCell.offsetWidth;
    var currentCellHeight = currentCell.offsetHeight;



//console.log("ROW - top: " + currentTop + " left: " + currentLeft + " width: " + currentWidth);
//console.log("CELL - top: " + currentCellTop + " left: " + currentCellLeft + " width: " + currentCellWidth);

//clear style and position div with buttons in table row

    overlay.setAttribute("style", "");
    butMet.setAttribute("style", "");
    butNotMet.setAttribute("style", "");
    butClear.setAttribute("style", "");


overlay.setAttribute("style", "position: fixed; top: "
    + currentCellTop + "px" +
    "; left: " + currentCellLeft + "px" +
    "; width: " + currentCellWidth + "px" +
    "; height: " + currentCellHeight + "px" +
    "; max-height: " + currentCellHeight + "px" +
    "; max-width: " + currentCellWidth + "px" + ";");

butMet.setAttribute("style", "position: fixed; top: "
    + (currentCellTop + (currentCellHeight * 0.10)) + "px" +
    "; left: " + (currentCellLeft + (currentCellWidth * 0.13)) + "px" +
    "; max-height: " + currentCellHeight + "px" +
    "; max-width: " + currentCellWidth + "px" + ";");

butNotMet.setAttribute("style", "position: fixed; top: "
    + (currentCellTop + (currentCellHeight * 0.40)) + "px" +
    "; left: " + (currentCellLeft + (currentCellWidth * 0.13)) + "px" +
    "; max-height: " + currentHeight + "px" +
    "; max-width: " + currentWidth + "px" + ";");


butClear.setAttribute("style", "position: fixed; top: "
    + (currentCellTop + (currentCellHeight * 0.70)) + "px" +
    "; left: " + (currentCellLeft + (currentCellWidth * 0.13)) + "px" +
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


    currentCell.style.backgroundColor = "#8DA7BE";


// check to see if both cells are the same color and then color the row instead


    currentRow.style.backgroundColor = "";

    if (cellCheck[1].getAttribute("style") == cellCheck[3].getAttribute("style")) {

        cellCheck[5].style.backgroundColor = "";
        cellCheck[5].style.backgroundColor = "#8DA7BE";

    }

    if (cellCheck[1].getAttribute("style") !== cellCheck[3].getAttribute("style")) {

        cellCheck[5].style.backgroundColor = "#F2E394";

    }



};

function notMet() {

// hide that shit (div and buttons) and adjust current cell color

      butMet.setAttribute("class", "hide");
      butNotMet.setAttribute("class", "hide");
      butClear.setAttribute("class", "hide");
      overlay.setAttribute("class", "hide");

      butMet.setAttribute("style", "display:none;");
      butNotMet.setAttribute("style", "display:none;");
      butClear.setAttribute("style", "display:none;");
      overlay.setAttribute("style", "display:none;");


    currentCell.style.backgroundColor = "#F2E394";

    cellCheck[5].style.backgroundColor = "";

    //if they are the same style or different style, then color last cell as "not met"

    if (cellCheck[1].getAttribute("style") == cellCheck[3].getAttribute("style")) {


        cellCheck[5].style.backgroundColor = "#F2E394";


    }

    if (cellCheck[1].getAttribute("style") !== cellCheck[3].getAttribute("style")) {

        cellCheck[5].style.backgroundColor = "#F2E394";

    }


};


function clearRow() {

// hide that shit (div and buttons) and adjust color or remove color if both criteria cells are cleared

      butMet.setAttribute("class", "hide");
      butNotMet.setAttribute("class", "hide");
      butClear.setAttribute("class", "hide");
      overlay.setAttribute("class", "hide");

      butMet.setAttribute("style", "display:none;");
      butNotMet.setAttribute("style", "display:none;");
      butClear.setAttribute("style", "display:none;");
      overlay.setAttribute("style", "display:none;");


    currentCell.style.backgroundColor = "";



    if (cellCheck[1].matches('[style=""]') && cellCheck[3].matches('[style=""]')) {

        cellCheck[5].style.backgroundColor = "";

    }




};

document.onload = function() {

    cellCheck[1].style.backgroundColor = "";
    cellCheck[3].style.backgroundColor = "";
    cellCheck[5].style.backgroundColor = "";


}
