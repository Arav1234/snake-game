const Engine = Matter.Engine;
const World = Matter.World;
const Bodies= Matter.Bodies;

var bgimg;
var wall1 , wall2 , wall3 , wall4;
var snake;

function preload(){
  
  bgimg = loadImage("bg of snake game.PNG");
  
}


function setup() {
  createCanvas(600, 600);
  
  engine = Engine.create();
  world = engine.world;

  // Create a snake
  snake = new Snake(300 , 300 , 15);

  // Create a wall for a border og playing area
 wall1 = createSprite(42,300,5,510);
 wall2 = createSprite(560,300,5,510);
 wall3 = createSprite(300,50,510,5);
 wall4 = createSprite(302,555,510,5);
 
 // for do invisible of wall
 wall1.visible = false;
 wall2.visible = false;
 wall3.visible = false;
 wall4.visible = false;
}

function draw() {
  background(bgimg);
  
  if (keyDown(LEFT_ARROW)) {
    snake.velocityX = -4;
    snake.velocityY = 0;
  
  }
  
if (keyDown(RIGHT_ARROW)) {
  snake.velocityX = 4;
  snake.velocityY = 0;
  
  }  
  
  if (keyDown(UP_ARROW)) {
    snake.velocityX = 0;
    snake.velocityY = -4;

  }
  
  if (keyDown(DOWN_ARROW)) {
    snake.velocityX =0;
    snake.velocityY = 4;
 
  } 
 /*if(snake.isTouching(wall1) || snake.isTouching(wall2)){

  snake.velocityX = 0;
  snake.velocityY = 0;
  textSize(24);
  fill("black");
  text("Game Over" , 250,300)

}
if(snake.isTouching(wall3) || snake.isTouching(wall4)){

  snake.velocityX = 0;
  snake.velocityY = 0;
  textSize(24);
  fill("black");
  text("Game Over" , 250,300)
  
}*/

 snake.display();

  
  drawSprites();
}