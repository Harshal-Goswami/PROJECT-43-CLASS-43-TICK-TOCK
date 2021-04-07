var CLOCK , CLOCKImg;

function setup() {
  createCanvas(800,400);
 var CLOCK = createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  
  if(keyDown === RIGHT_ARROW){
    CLOCK.velocityX = 20;
   }
   if(keyDown === LEFT_ARROW){
    CLOCK.velocityY = - 20;
   }
  drawSprites();
}