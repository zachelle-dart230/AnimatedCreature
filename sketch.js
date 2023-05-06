let extraCanvas;
let x = 100;
let y = 80;
let eyeX1 = 150;
let eyeX2 = 250;
let eyeY = 150;
let mouthY = 300;
let d = 0;
let brow = 0;

function setup() {
  createCanvas(400, 400);
  extraCanvas = createGraphics(400, 400);
  extraCanvas.clear();
  background(0);
}

function draw() {
	
  // trails
  //if (mouseIsPressed) {
    extraCanvas.fill(255, 150);
    extraCanvas.noStroke();
    let starX = random(width);
    let starY = random(height);
    extraCanvas.ellipse(starX, starY, 10, 10);
  
  image(extraCanvas, 0, 0);
  
  noStroke();
  rectMode(CORNER);
  fill(807,190,10,400)
  rect(0,80,400,120);
  fill(807,19,244);
  rect(0,200,400,200);

  fill(255);

  fill(255, 180);
  fill(255, 220);
  fill(255);

  //head
  fill(255, 185, 245, 180);
  stroke(255, 180);
  strokeWeight(10);
  ellipseMode(CENTER);
  ellipse(200, 200, 300, 390);

  //eyes
  fill(0);
  stroke(255);
  strokeWeight(3);
  ellipse(eyeX1, eyeY, 30);
  ellipse(eyeX1 + 100, eyeY, 30);
  
  //cheek
  fill(245, 120, 170);
  noStroke();
  ellipse(80, 220, 40, 20);
  ellipse(330, 220, 40, 20);

  noFill();
  stroke(157, 121, 242);
  bezier(120, 100, 140, brow, 160, brow, 180, 100);
  bezier(220, 100, 240, brow, 260, brow, 280, 100);
  if (mouseY < 150) {
    } else { brow = 90;
    brow = 100;
  }

  if (mouseX > 120 && mouseX < 180) {
    eyeX1 = mouseX;
  } else {
    eyeX1 = eyeX1;
  }

  if (mouseY < 200 && mouseY > 150) {
    eyeY = mouseY;
  } else 
    eyeY = eyeY;
 ellipse(200, 250, 200, 10)
  }
 
 