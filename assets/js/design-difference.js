/* Errors */
/* TODO: Rewrite these using try catch and in seperate file */

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
            console.log("Extension is not valid. Please use jpg, gif, png, svg, tiff, webp, or ico");
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

/* Errors End */


/* Image */

function designDifferenceMockUpImage(file, width){
    let mockup = document.createElement("img");
        mockup.id = "design-difference__mock-up";
        mockup.src = file;
        mockup.style.width = width+"px";
        mockup.style.opacity = ".5";
        mockup.dataset.width = width;
    return mockup;
}

/* Adding Resource Functions */

function addCssFile(file_name){
     var linkTag = document.createElement('link');
     linkTag.setAttribute('href',"assets/css/"+file_name);
     linkTag.setAttribute('rel',"stylesheet");
     linkTag.setAttribute('type',"text/css");
     document.head.appendChild(linkTag);
}


function addJavaScriptFile(script_file_name){
     var scriptTag = document.createElement('script');
     scriptTag.setAttribute('src',"assets/js/"+script_file_name);
     document.body.appendChild(scriptTag);
}



/* Main function */

function designDifference(file,file_width){
    window.onload = function(){
        addCssFile("design-difference.css");

        checkIfImageExists(file);
        checkWidth(file_width);

        let designDifferenceDiv = document.createElement("div");
            designDifferenceDiv.id = "design-difference";
            designDifferenceDiv.appendChild(designDifferenceMockUpImage(file,file_width));
        document.body.appendChild(designDifferenceDiv);

        addJavaScriptFile("create-control-elements.js");
        addJavaScriptFile("settings.js");
        addJavaScriptFile("control-functions.js");

    };

}
