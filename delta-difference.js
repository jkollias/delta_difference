/* Errors */

function checkIfImageExists(file){
    if(!file){
        return console.log("%cThere was an error with your file. Please check your image path or file name.","color: #d00; padding: 1em; font-weight: bold; box-sizing: border: box;");
    }
}

function getImageFileExtension(file){
    return file.split('.').pop();
}

function checkImageExtensionIsValid(file){
    let image_extensions = ["jpg","gif","png","svg","tiff","webp","ico"];
    let validExtension;
    for(let i = 0; i <= image_extensions.length; i++){
        if(getImageFileExtension(file) == image_extensions[i]){
            console.log("Extension is valid.");
            validExtension = true;
            return true;
        }else{
            console.log("Extension is not valid.");
            validExtension = false;

        }

    }
    return validExtension;
}



function checkWidth(width){
    if(width <= 0){
        return console.log("%cThere was an error with your width. Please use a positive number.","color: #d00; padding: 1em; font-weight: bold; box-sizing: border: box;");
    }else if(width == null){
        return console.log("%cThere was an error with your width. PLEASE ENTER A NUMBER.","color: #d00; padding: 1em; font-weight: bold; box-sizing: border: box;");
    }
}


/* Create Controls */
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
        button.setAttribute("onClick","toggle_mockup();");
    let buttonText = document.createTextNode("Toggle");
        button.appendChild(buttonText);
    return button;
}

function deltaDifferenceMoveUpButton(){
    let controls = document.createElement("div");
        controls.classList.add("delta-difference__move")
        controls.innerHTML =   "<input type='text' id='up-ammount' placeholder='Enter Number' value=''>";
        controls.innerHTML +=  "<button class='move-delta-button' onClick='move_mockup();'>Move MockUp</button>";
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


/* Image */

function deltaDifferenceMockUpImage(file, width){
    let mockup = document.createElement("img");
        mockup.id = "delta-difference__mock-up";
        mockup.src = file;
        mockup.style.width = width+"px";
        mockup.style.opacity = ".5";
    return mockup;
}


/* Main function */


function deltaDifference(file,file_width){
    checkIfImageExists(file);
    checkWidth(file_width);
    let deltaDifferenceDiv = document.createElement("div");
        deltaDifferenceDiv.id = "delta-difference";
        deltaDifferenceDiv.appendChild(deltaDifferenceControls());
        deltaDifferenceDiv.appendChild(deltaDifferenceMockUpImage(file,file_width));
    document.body.appendChild(deltaDifferenceDiv);
}


/* Main controller functions */

function toggle_mockup(){
    mockUp = document.getElementById("delta-difference__mock-up");
    mockUp.classList.toggle("hide-mockup");
}

function move_mockup(){
    mockUp = document.getElementById("delta-difference__mock-up");
    let topInc = document.getElementById("up-ammount").value;
    mockUp.style.top = topInc+"px";
    console.log("Mockup is moved "+ topInc);
}

function toggle_controls(){
    main = document.getElementById("delta-difference");
    main.classList.toggle("hide-controls");
}

function change_delta_opacity(){
    let current_opacity = document.getElementById("delta-difference__mock-up").style.opacity;
    current_opacity = Number(current_opacity);
    if(current_opacity <= .75 ){
        document.getElementById("delta-difference__mock-up").style.opacity = current_opacity + .25;
    }else{
        document.getElementById("delta-difference__mock-up").style.opacity = 0;
    }
}
