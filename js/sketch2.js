var w = window.innerWidth;
var h = window.innerHeight;  

var x2 = 0;
var y2 = 0;
var px = 0;
var py = 0;
var easing = 0.05;
function setup() {
 createCanvas(w, h);
 stroke(0, 102);
  // background(150);  
}
function draw() {
 var targetX = mouseX;
 x2 += (targetX - x2) * easing;
 var targetY = mouseY;
 y2 += (targetY - y2) * easing;
 var weight = dist(x2, y2, px, py);
 strokeWeight(weight);
 line(x2, y2, px, py);
 py = y2;
 px = x2;
}