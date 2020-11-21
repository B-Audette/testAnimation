var tID; //we will use this variable to clear the setInterval()

function stopAnimate() {
    console.log("animation started")
  clearInterval(tID);
} //end of stopAnimate()


function animateScript() {

  var position = 64; //start position for the image slicer
  const interval = 160; //100 ms of interval for the setInterval()
  const diff = 64; //diff as a variable for position offset
  
  tID = setInterval(() => {
  
    document.getElementById("image").style.backgroundPosition =
      `-${position}px 832px`;
    //we use the ES6 template literal to insert the variable "position"
    
    if (position < 576) {
      position = position + diff;
    }
    //we increment the position by 256 each time
    else {
      position = 64;
    }
    //reset the position to 256px, once position exceeds 1536px
    document.getElementById("image2").style.backgroundPosition =
    `-${position}px 704px`;
  //we use the ES6 template literal to insert the variable "position"
  
  if (position < 576) {
    position = position + diff;
  }
  //we increment the position by 256 each time
  else {
    position = 64;
  }
  //reset the position to 256px, once position exceeds 1536px

  document.getElementById("image3").style.backgroundPosition =
  `-${position}px 768px`;
//we use the ES6 template literal to insert the variable "position"

if (position < 312) {
  position = position + diff;
}
//we increment the position by 256 each time
else {
  position = 64;
}
document.getElementById("image4").style.backgroundPosition =
`-${position}px 640px`;
//we use the ES6 template literal to insert the variable "position"

if (position < 312) {
position = position + diff;
}
//we increment the position by 256 each time
else {
position = 64;
}

  }, interval); //end of setInterval
  
  
} //end of animateScript()
