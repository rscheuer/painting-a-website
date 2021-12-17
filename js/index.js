let mouseX;
let mouseY;


document.addEventListener("mousemove", ()=>{
  mouseX = event.clientX;
  mouseY = event.clientY;
  // console.log([mouseX, mouseY])
  changeBG(mouseX,mouseY)
  
})

function changeBG(x, y){
  var hue = 0; //0-360
  var sat = 0; //0-100
  var light = 0; //0-100

  // console.log("Percent across width: ", x / w)

  var newSat = ((1-(x/w))*100).toPrecision(2)-1;

  if(newSat <=0){
    sat = 0 
  }else{
    sat = newSat
  }

  var newLight = ((x/w)*100).toPrecision(2)-1;

  if(newLight <=0){
    light = 0 
  }else{
    light = newLight
  }

  var newHue = ((y/h)*360).toPrecision(2)-1;

  // console.log(sat)
  sat.innerHTML = sat;

  document.body.style.background = "hsla("+newHue+","+sat+"%, "+light+"%, 1)"
}


// function mapNumbers (in_min, in_max, out_min, out_max) {
//   return (this - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
// }

// const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

// const changeColor = (e) => {
//   e.target.style.background = "rgba(255,197,82,1)";
// }

// const removeColor = (e) => {
//   e.target.style.background = "";
// }

// var children = grid.children;
// for (var i = 0; i < children.length; i++) {
//   var tableChild = children[i];
//   children[i].addEventListener("mouseover", changeColor);
//   children[i].addEventListener("mouseout", removeColor);
//   // Do stuff
// }