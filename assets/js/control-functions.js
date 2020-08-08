/* Control functions */

function toggle_mockup(){
    mockUp = document.getElementById("design-difference__mock-up");
    mockUp.classList.toggle("hide-mockup");
}

function move_mockup(){
    mockUp = document.getElementById("design-difference__mock-up");
    let topInc = document.getElementById("up-ammount").value;
    mockUp.style.top = topInc+"px";
    console.log("Mockup is moved "+ topInc);
}

function toggle_controls(){
    main = document.getElementById("design-difference");
    main.classList.toggle("hide-controls");
}


function change_design_opacity(){
    let current_opacity = document.getElementById("design-difference__mock-up").style.opacity;
    current_opacity = Number(current_opacity);
    if(current_opacity <= .75 ){
        document.getElementById("design-difference__mock-up").style.opacity = current_opacity + .25;
    }else{
        document.getElementById("design-difference__mock-up").style.opacity = 0;
    }
}


function resetSettings(){
    document.getElementById("design-difference__mock-up").style.top = 0;
    document.getElementById("design-difference__mock-up").style.opacity = .5;
    let width = document.getElementById("design-difference__mock-up").dataset.width;
    if(typeof(Storage) !== "undefined"){
        localStorage.setItem("designDifferenceSettings"," opacity: .5; top: 0; width:"+width+"px;");
    }
}
