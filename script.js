/* Declare variables below to save the different sections (divs) of your story*/
//first button options
let frogButton = document.querySelector(".option-one");
let snailButton = document.querySelector(".option-two");
//two different first option screen
let frogHat = document.querySelector(".option-one-screen");
let snailHat = document.querySelector(".option-two-screen");
//two different end option screens
let frogEnd = document.querySelector(".option-one-end");
let snailEnd = document.querySelector(".option-two-end");


/* When you're ready to make event handlers, uncomment the code below. Then fill in the blanks with the correct variables! */
frogButton.onclick=function(){ 
frogHat.style.display="block";
    
};

snailButton.onclick=function(){
snailHat.style.display="block";
    
};


frogHat.onmouseover=function(){
frogEnd.style.display="block";
};

snailHat.onmouseover=function(){
snailEnd.style.display="block";
};




