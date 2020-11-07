var car, wall;



var  weight;

weight = random(400,1500);


function setup() {
  createCanvas(800,400);

  car = createSprite(50,200,80,30);
  car.velocityX = random(55,90);

  wall = createSprite(750,200,20,300);
  
  
}

function draw() {
  background(0);
  
  car.shapeColor = "white";

  wall.shapeColor = "brown";

  if(car.isTouching(wall)){
    car.velocityX = 0;
    wall.velocityX = 0;
  



   var deformation = 0.5 *weight *velocityX *velocityX/22509;
   if(deformation > 180)
   {
     car.shapeColor = color(255,0,0);
   }
   if(deformation < 180 && deformation > 100)
   {
     car.shapeColor = color(230,230,0);
   }
   if(deformation < 100)
   {
     car.shapeColor = color(0,255,0);
   }
}


  drawSprites();
}
