var bg
var ss,ssImg
var alien,a1,a2,a3,a4,a5,a6,a7,a8
var laser
var gamestate = "play"
var alienGroup,laserGroup
var score = 0


function preload()
{
 bg = loadImage("Assets/bg1.gif")
 ssImg = loadImage("Assets/ss2.png")
 a1 = loadImage("Assets/a1.png")
 a2 = loadImage("Assets/a2.png")
 a3 = loadImage("Assets/a3.png")
 a4 = loadImage("Assets/a5.png")
 a5 = loadImage("Assets/a9.png")
 a6 = loadImage("Assets/a10.png")
 a7 = loadImage("Assets/a11.png")
 a8 = loadImage("Assets/a14.png")

}

function setup() {
  createCanvas(1200,600);
  

  
 alienGroup = new Group()
 laserGroup = new Group()
 ss = createSprite(100,350)
 ss.addImage(ssImg)
 ss.scale = 0.4

  

  
}

function draw() 
{
 background(0)
 image(bg,0,0,1200,600)
 drawSprites() 

 fill("white")
  textSize(30)
  text("score:"+ score,50,50)

  if(gamestate === "play"){
    if(keyDown(UP_ARROW)){
      ss.y -= 5
    }

    if(keyDown(DOWN_ARROW)){
      ss.y += 5
    }
  }

 if(keyDown("space")){
  releaseLaser()
 }
  

}


function releaseLaser(){
  laser = createSprite(200,ss.position.y,60,5)
  laser.shapeColor = "white"
  laser.velocityX = 10
  laser.lifetime = 120
  laserGroup.add(laser)
}



