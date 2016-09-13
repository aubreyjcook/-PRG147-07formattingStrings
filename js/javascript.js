//debug message
//alert("Page Loaded");

//writes a text block to the paragraph id
function writeToParagraph() {
    //debug message
    //alert("writeToParagraph Loaded");
    
    document.getElementById("paragraph").innerHTML = "";
    
}


//function runtime at page load
window.onload = function () {
    //debug message
    //alert("Functions Loaded");
    
    writeToParagraph();
}