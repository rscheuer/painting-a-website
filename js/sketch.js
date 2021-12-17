var w = window.innerWidth;
var h = window.innerHeight;  

// var fr = 80;

function setup() {
  canvas=createCanvas(w, h);
  // frameRate(100);
  noStroke()
}

function draw(){
    let speed = abs(mouseX - pmouseX);
    // line(mouseX, mouseY, pmouseX, pmouseY)
    if(mouseIsPressed){
      ellipse(mouseX, mouseY, 10+speed*0.5)
    }
}

