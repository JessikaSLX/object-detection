img = "";

function setup() {
    canvas = createCanvas(600, 400);
    canvas.center();
}

function preload() {
  img = loadImage("dog_cat.jpg");
}

function draw() {
  image(img, 0, 0, 600, 400);

  fill("#800000");
  text("dog", 110, 115);
  noFill();
  stroke("#0000A0");
  rect(100, 100, 300, 280);
}

