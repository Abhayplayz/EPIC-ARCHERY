var player, computer;
var playerImg, computerImg;
var base1, base2;
var ground, invisibleGround;

function preload(){
player = loadImage("player.png");
computer = loadImage("player.png");
base1 = loadImage("base1.png");
base2 = loadImage("base2.png");
  
}
function setup() {
  createCanvas(400, 400);
  
 invisibleGround = createSprite(200,250,400,10);
 invisibleGround.visible = false;
  
 player = createSprite(100,250,20,50);
 player.scale=0.5;
  
 computer = createSprite(200,150,20,50);
 computer.scale=0.5;
  
 base1 = createSprite(100,200,30,60);
 base1.scale=0.5;
  
 base2 = createSprite(290,100,10,50);
 base2.scale=0.5;
  
}
function draw() {
  background("grey");
  stroke("black")
  textSize(20)
  text("EPIC ARCHERY, 450, 50");
  
}
