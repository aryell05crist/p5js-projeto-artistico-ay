function setup() {
 createCanvas(600, 600);
 background("black");
}
function draw() {
  stroke("blue,");
fill("deepskyblue");

  if(mouseIsPressed){
    circle(mouseX,mouseY,200,350);
  }
  }