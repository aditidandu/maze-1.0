var w1, w2, w3, w4, w5, w6, w7, w8, w9, w10
var player, playerImage, playerImage2
function preload(){
playerImage = loadAnimation("boy-1.png","boy-2.png", "boy-3.png", "boy-4.png", "boy-5.png" )
playerImage2 = loadAnimation("boy-1-flip.png")
}
function setup() {

  createCanvas(800,800);
  player = createSprite(25,25, 40, 40)
  player.addAnimation("running", playerImage)
  player.addAnimation("run", playerImage2)

  player.scale = 0.15
  w1 = createSprite(100, 50, 200, 3);
  w2 = createSprite(250, 50, 3, 100);
  w3 = createSprite(150, 100, 200, 3);
  w4 = createSprite(100, 150, 500, 3);
  w5 = createSprite(300, 75, 3, 50);
  w6 = createSprite(400, 100, 200, 3);

}

function draw() {
  background("yellow"); 

  if(keyIsDown(RIGHT_ARROW)){
    player.x +=1
    player.changeAnimation("running", playerImage)

      }
      
  if(keyIsDown(LEFT_ARROW)){
    player.x +=-1
    player.changeAnimation("run", playerImage2)
      }
  drawSprites();

}