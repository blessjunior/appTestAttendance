/**
 * Created by Bless on 1/6/16.
 */

$(document).ready(function () {

    submenuitems("");

});


function CheckboxAllCheck(elementId, elementName, checkedValue) {
    var i;
    var elements = (document.getElementsByName(elementName));

    for (i = 0; i < elements.length; i++) {

        if (document.getElementById(elements[i].id).childElementCount > 0) {

            var subElements = document.getElementById(elements[i].id).children;
            var j;

            for (j = 0; j < subElements.length; j++) {
                if (subElements[j].type == "checkbox") {
                    subElements[j].checked = checkedValue;
                }
            }
        }

        if (elements[i].type == "checkbox") {
            elements[i].checked = checkedValue;
        }
    }

}


/*
 Display submenus for currently selected menu option and hide the rest
 */
function submenuitems(selectedValue) {

    var i, controls;

    controls = document.getElementsByClassName("sub-menu");
    for (i = 0; i < controls.length; i++) {
        controls[i].style.display = "none";
    }

    controls = document.getElementsByClassName(selectedValue);
    for (i = 0; i < controls.length; i++) {
        controls[i].style.display = "block";
    }

}


/*
toggle element border.display: hide or show
 */
function hideshowelement(elementId){

    if (document.getElementById(elementId).style.display == "none") {
        showelement(elementId);

    } else {
        hideelement(elementId);
    }

}


/*
display hidden element
 */
function showelement(elementId){

        document.getElementById(elementId).style.display = "block";

}


/*
hide showing element
 */
function hideelement(elementId){

        document.getElementById(elementId).style.display = "none";

}


