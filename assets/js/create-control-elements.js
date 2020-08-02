
/* Create Control Panel */

function designDifferenceTitle(){
    let title = document.createElement("h1");
        title.classList.add("design-difference-heading");
        title.setAttribute("onClick","toggle_controls();");
    let titelText = document.createTextNode("The Design Difference");
        title.appendChild(titelText);
    return title;
}

function designDifferenceToggleButton(){
    let button = document.createElement("button");
        button.classList.add("toggle-design-button");
        button.setAttribute("onClick","toggle_mockup();");
    let buttonText = document.createTextNode("Toggle");
        button.appendChild(buttonText);
    return button;
}

function designDifferenceMoveUpButton(){
    let controls = document.createElement("div");
        controls.classList.add("design-difference__move")
        controls.innerHTML =   "<input type='text' id='up-ammount' placeholder='Enter Number' value=''>";
        controls.innerHTML +=  "<button class='move-design-button' onClick='move_mockup();'>Move MockUp</button>";
    return controls;
}

function designDifferenceOpacityButton(){
    let button = document.createElement("button");
        button.classList.add("opacity-design-button");
        button.setAttribute("onClick","change_design_opacity();");
    let buttonText = document.createTextNode("Change Opacity");
        button.appendChild(buttonText);
    return button;
}

function designDifferenceControls(){
    let div = document.createElement("div");
        div.classList.add("design-difference__controls");
        div.appendChild(designDifferenceTitle());
        div.appendChild(designDifferenceToggleButton());
        div.appendChild(designDifferenceMoveUpButton());
        div.appendChild(designDifferenceOpacityButton());
    return div;
}

window.onload = function(){
     let mainDiv = document.getElementById("design-difference");
        mainDiv.appendChild(designDifferenceControls());
};
