var path;
var runner;
var invisibleBoundary_1, invisibleBoundary_2;

function preload() {
  //pre-load images
  pathImg = loadImage("path.png");
  runnerImg = loadAnimation("Runner-1.png", "Runner-2.png");

}

function setup() {
  createCanvas(400, 400);
  //create sprites here
  path = createSprite(200, 200);
  path.addImage(pathImg);
  path.velocityY = 4;
  path.scale = 1.2;

  runner = createSprite(300, 300);
  runner.addAnimation("running", runnerImg);
  runner.scale = 0.1

  invisibleBoundary_1 = createSprite(35, 200, 25, 400);
  invisibleBoundary_1.visible = false
  drawSprites();
}


function draw() {
  background(0);
  if (path.y > 400) {
    path.y = height / 2;
  }
  runner.collide(invisibleBoundary_1);
  runner.x = World.mouseX;
  if (runner.x > 300) {
    runner.x = 305;
  }
  if (runner.x < 100) {
    runner.x = 100;
  }

  drawSprites();
}

















