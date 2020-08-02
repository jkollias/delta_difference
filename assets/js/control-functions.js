

/* Control functions */

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
