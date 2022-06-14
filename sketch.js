var girl, girlRunning, girlCollided;
var ground, invisibleGround, groundImage;




function preload() {
girlRunning = loadAnimation("girl_running.png", "girlRunning.png");
girlCollided = loadAnimation("girlDead.png");

groundImage = loadImage("ground2.png");


}

function setup() {
  createCanvas(600, 200);
  girl = createSprite(50,160,20,50);
  girl.addAnimation("running", girlRunning);
  girl.scale = 0.5;
  ground = createSprite(200,180,400,20);
  ground.addImage("ground", groundImage);
  ground.x = ground.width / 2;
  ground.velocityX = -4;
  invisibleGround = createSprite(200,900,400,20);
  invisibleGround.visible = false;
}

function draw() {
  background("#00");
  if(keyDown("space") && girl.y > 120) {
    girl.velocityY =-10;
  }

  girl.velocityY = girl.velocityY + 0.8;

  if(ground.x < 0) {
    ground.x = ground.width / 2
  }
  girl.collide(ground);
  drawSprites();
}

