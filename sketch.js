var rocket,rocket2
var score =0
var rocketScore = 0
var rocket2Score = 0
var gameState = "start"
var gameOver;
var rocket1Failure = 0
var rocket2Failure = 0

function preload(){
  backIMG = loadImage("background.jpg")
  rocketIMG = loadImage("rocket.png")
  asteroidIMG = loadImage("asteroid.png")
  gameoverIMG = loadImage("restart.png")
  winIMG = loadImage("youWin.jpg")
  win2IMG = loadImage("youWin2.jpg")
}

function setup(){
  createCanvas(650,500)
  back = createSprite(250, 250, 500,500)
  back.addImage(backIMG)
  rocket = createSprite(175, 430, 20, 30)
  rocket.addImage(rocketIMG)
  rocket.scale = 0.10
  
  rocket2= createSprite(466, 430, 20, 30)
  rocket2.addImage(rocketIMG)
  rocket2.scale= 0.10
  edge = createEdgeSprites(); 
  
  obstacle1 = new Group()
  obstacle2 = new Group()
  
  rocket.setCollider("circle",0,0,80)
  rocket2.setCollider("circle",0,0,80)
     
  gameOver = createSprite(325, 200)
  gameOver.addImage(gameoverIMG)
  gameOver.scale = 0.8
  gameOver.visible = false
  
  youWin = createSprite(125, 340)
  youWin.addImage(winIMG)
  youWin.visible = false
  youWin.scale = 0.3
  youWin2 = createSprite(500, 340)
  youWin2.addImage(win2IMG)
  youWin2.visible = false
  youWin2.scale = 0.35
}

function draw(){
  background("white")

  drawSprites()
  
  if(gameState === "start"){
    textSize(45)
  fill("red")
 text(rocketScore,280, 480)
  textSize(45)
 fill("cyan")
 text(rocket2Score,340, 480)
  stroke("white") 
  for (var i = 0; i < 500; i=i+5) { 
    line(325,i,325,i+5);
  }
    textSize(25)
    fill("red")
    text("Fails: " + rocket1Failure, 25, 475)
    fill("cyan")
    text("Fails: " + rocket2Failure, 540, 475)
    
    if(keyDown(UP_ARROW)){
    rocket.y = rocket.y -5
  }
  if(keyDown(DOWN_ARROW)){
     rocket.y = rocket.y +5
  }
  if(keyDown("W")){
    rocket2.y = rocket2.y - 5
  }
   if(keyDown("S")){
     rocket2.y = rocket2.y +5
  }
    
 enemies();
    if(obstacle1.isTouching(rocket)){
      rocket.x = 175;
      rocket.y = 430;
      rocket1Failure = rocket1Failure + 1
    }
    
    if(obstacle2.isTouching(rocket)){
      rocket.x = 175;
      rocket.y = 430;
      rocket1Failure = rocket1Failure + 1
    }
  
      if(obstacle1.isTouching(rocket2)){
      rocket2.x = 486;
      rocket2.y = 430;
      rocket2Failure = rocket2Failure + 1
    }
    
    if(obstacle2.isTouching(rocket2)){
      rocket2.x = 486;
      rocket2.y = 430;
      rocket2Failure = rocket2Failure + 1
      
    }
  }
  
  
  
  
  if(obstacle1.isTouching(rocket) || obstacle2.isTouching(rocket)){
    
  }else if(gameState === "end"){
    obstacle1.destroyEach();
    obstacle2.destroyEach();
  }
    
  if(rocket.isTouching(edge)){
      rocketScore = rocketScore+1
      rocket.x = 175
      rocket.y = 430
    
    }
  if(rocket2.isTouching(edge)){
      rocket2Score = rocket2Score+1
      rocket2.x = 486
      rocket2.y = 430
    }
  if(rocketScore === 10){
    gameOver.visible = true
    youWin.visible = true
    obstacle1.setVelocityXEach(0)
    obstacle2.setVelocityXEach(0)
    obstacle1.setLifetimeEach(0)
    obstacle2.setLifetimeEach(0)
    
  }
  if(rocket2Score === 10){
    gameOver.visible = true
    youWin2.visible = true
    obstacle1.setVelocityXEach(0)
    obstacle2.setVelocityXEach(0)
    obstacle1.setLifetimeEach(0)
    obstacle2.setLifetimeEach(0)
    
  }
  if(rocket1Failure === 1){
    gameOver.visible = true
    youWin2.visible = true
    obstacle1.setVelocityXEach(0)
    obstacle2.setVelocityXEach(0)
    obstacle1.setLifetimeEach(0)
    obstacle2.setLifetimeEach(0)
    
  }
  if(rocket2Failure === 1){
    gameOver.visible = true
    youWin.visible = true
    obstacle1.setVelocityXEach(0)
    obstacle2.setVelocityXEach(0)
    obstacle1.setLifetimeEach(0)
    obstacle2.setLifetimeEach(0)
    
  }
  


function enemies(){
  if(frameCount%20=== 0){
   var asteroid = createSprite(-20, 50)  
   gameState = "start"
   asteroid.addImage(asteroidIMG)
    asteroid.scale = 0.10
   asteroid.y = random(30, 380)
    asteroid.velocityX = 10
    obstacle1.add(asteroid)
    
   var asteroid2 = createSprite(670, 10)
   asteroid2.addImage(asteroidIMG)
    asteroid2.scale = 0.10
   asteroid2.y = random(30, 380)
    asteroid2.velocityX = -10
    obstacle2.add(asteroid2)
}
}                      
  
  
  
  
  
    
}