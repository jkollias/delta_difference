/* This file controls functions for local storage */
/* Dont have to reenter mockup setting when yuo implement a change */


const settingMockupDiv = document.getElementById("design-difference__mock-up");

function saveSettings(){
   if (typeof(Storage) !== "undefined"){
     localStorage.setItem("designDifferenceSettings", settingMockupDiv.getAttribute("style"));
   }
}


function restoreSettings(){
  if(typeof(Storage) !== "undefined" || typeof(Storage) !== null || typeof(Storage) !== " " ){
    let settings = localStorage.getItem("designDifferenceSettings");
    if(settings == " " || settings == null){
        console.log(settings);
    }else{
        console.log("There is a value");
        settingMockupDiv.setAttribute("style",settings);
    }
  }
}


restoreSettings();
