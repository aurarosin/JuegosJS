var fixedRect, movingRect;
var gameObject1, gameObject2, gameObject3, gameObject4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  gameObject1 = createSprite(200, 400, 50, 80);
  gameObject1.shapeColor = "green";

  gameObject2 = createSprite(300, 400, 50, 80);
  gameObject2.shapeColor = "green";

  gameObject3 = createSprite(100, 400, 50, 80);
  gameObject3.shapeColor = "green";

  gameObject4 = createSprite(100, 600, 50, 80);
  gameObject4.shapeColor = "green";

}

function isTouching(object1, object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) {
      return true;

  }
  else {
    return false;

  }
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,gameObject4)){
    movingRect.shapeColor = "blue";
    gameObject4.shapeColor = "blue";
  }else if (isTouching(movingRect,gameObject1)){
    movingRect.shapeColor = "pink";
    gameObject1.shapeColor = "pink";
  }else{
    movingRect.shapeColor = "green";
    gameObject4.shapeColor = "green";
    gameObject1.shapeColor = "green";
  }





  drawSprites();
}


