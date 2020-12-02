function preload(){
  // put preload code here
}

// Width of the shape
 // Starting position of shape
 let valcount = 100;

 let xspeed = 4; // Speed of the shape
 let yspeed = 4.5; // Speed of the shape

 let xdirection = 1; // Left or Right
 let ydirection = 1; // Top to Bottom

 let p1 = "The assignment searched"
 let p2 = "doesn't exist."
 let p3 = "The dog ate it."

function setup() {

  createCanvas(windowWidth, windowHeight);
  background('#ff00ff');
  frameRate(50);
  angleMode(DEGREES)
  // Set the starting position of the shape
  xpos = 0;
  ypos = 0;

}


function draw() {


  // Update the position of the shape
  xpos = xpos + xspeed * xdirection;
  ypos = ypos + yspeed * ydirection;
  // Test to see if the shape exceeds the boundaries of the screen
  // If it does, reverse its direction by multiplying by -1
  if (xpos > width - 160 || xpos < 0) {
    xdirection *= -1;
  }
  if (ypos > height - 90 || ypos < 0) {
    ydirection *= -1;
  }


  push();
    noStroke();
    fill(lerpColor(color('cyan'),color('yellow'),frameCount/valcount));
    rect(xpos, ypos, 160, 90);
    pop();






  push();
  noFill();
  strokeWeight(2);
  stroke(lerpColor(color('yellow'),color('#ff00ff'),frameCount/valcount));
  rect(xpos, ypos, 160, 90);
  pop();




  push();
  noStroke();
  fill(lerpColor(color('#ff00ff'),color('cyan'),frameCount/valcount));
  textSize(25);
  translate(27, 52);
  text('Congrats!', xpos, ypos);
  pop();





 if (frameCount == valcount){
    frameCount = 0;
  }




}
