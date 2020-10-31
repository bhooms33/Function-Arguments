var fixedRect, movingRect,newRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  newRect=createSprite(200,100,50,50);
  newRect.shapeColor = "green";
  newRect.debug = true;

}

function draw() {
  background("pink");  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

//console.log(movingRect.x-fixedRect.x);
//console.log(movingRect.width/2+fixedRect.width/2);
if(isTouching(movingRect,newRect))
{
  movingRect.shapeColor = "red";
  newRect.shapeColor = "red";
}
  else{
    movingRect.shapeColor = "green";
    newRect.shapeColor = "green";
  }
  drawSprites();
}
