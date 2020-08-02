
/* Create Control Panel */

function deltaDifferenceTitle(){
    let title = document.createElement("h1");
        title.classList.add("delta-difference-heading");
        title.setAttribute("onClick","toggle_controls();");
    let titelText = document.createTextNode("The Delta Difference");
        title.appendChild(titelText);
    return title;
}

function deltaDifferenceToggleButton(){
    let button = document.createElement("button");
        button.classList.add("toggle-delta-button");
        button.setAttribute("onClick","toggle_mockup(); saveDeltaStyleSetting();");
    let buttonText = document.createTextNode("Toggle");
        button.appendChild(buttonText);
    return button;
}

function deltaDifferenceMoveUpButton(){
    let controls = document.createElement("div");
        controls.classList.add("delta-difference__move")
        controls.innerHTML =   "<input type='text' id='up-ammount' placeholder='Enter Number' value=''>";
        controls.innerHTML +=  "<button class='move-delta-button' onClick='move_mockup(); saveDeltaStyleSetting();'>Move MockUp</button>";
    return controls;
}

function deltaDifferenceOpacityButton(){
    let button = document.createElement("button");
        button.classList.add("opacity-delta-button");
        button.setAttribute("onClick","change_delta_opacity();");
    let buttonText = document.createTextNode("Change Opacity");
        button.appendChild(buttonText);
    return button;
}

function deltaDifferenceControls(){
    let div = document.createElement("div");
        div.classList.add("delta-difference__controls");
        div.appendChild(deltaDifferenceTitle());
        div.appendChild(deltaDifferenceToggleButton());
        div.appendChild(deltaDifferenceMoveUpButton());
        div.appendChild(deltaDifferenceOpacityButton());
    return div;
}

window.onload = function() {
     let mainDiv = document.getElementById("delta-difference");
        mainDiv.appendChild(deltaDifferenceControls());
};
