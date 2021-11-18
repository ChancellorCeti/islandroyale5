var canvas;
var backgroundImage;
var bgImg;
var sprite;
var spritegroup;
var powerups;
var powerups2;
var database;
var powerupimg,powerupimage2;
var form, player;
var playerCount;
var gameimage;
var allPlayers;
var playerimg2;
var playerimg3;
var playerimg4;
var playerimg;
var player1,player2,player3,player4;
var players=[];
var gameState=0;

function preload() {
  spritegroup=new Group();
  backgroundImage = loadImage("./assets/island.jpg");
  gameimage=loadImage("./assets/gameimage.jpg");
  playerimg=loadImage("./assets/playerimg.png");
  playerimg2=loadImage("./assets/playerimg1.png");
  playerimg3=loadImage("./assets/playerimg2.png");
  playerimg4=loadImage("./assets/playerimg3.png");
  powerupimg=loadImage("./assets/powerupimg1.png");
  powerupimage2=loadImage("./assets/powerupimg2.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  
  game = new Game();
  game.getState();
  game.start();

  

}

function draw() {
  background(backgroundImage);
  if (playerCount === 4) {
    game.update(1);

  }

  if (gameState === 1) {
    spawnPowerUps();
    game.play();
  }

drawSprites();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
function spawnPowerUps(){
  if(frameCount%120===0){
    
     sprite = createSprite(10, 10,10,10);
      sprite.addImage("sprite", powerupimg);

      sprite.scale = scale;
      
    sprite.x = random(150, width - 150);
        //y = random(-height * 4.5, height - 400);
      sprite.y=random(100,height-100);
      spritegroup.add(sprite);
      console.log(sprite);
  }
}