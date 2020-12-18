var bullet,wall;
 var speed, weight;

  function setup() { 
      createCanvas(1600, 800);
       speed=random(223,521)
        weight=random(30,52)
        thickness=random(22,83)
         bullet=createSprite(50, 200, 50,50);
          bullet.velocityX = speed; bullet.shapeColor=color(255);
           wall=createSprite(1000,200, 60, height/2)
            wall.shapeColor="white"}
            
             function draw()
              { background(0);
             if(collider(bullet,wall)){
                  bullet.velocityX=0;
                  var dfor=0.5*speed*speed*weight/(thickness*thickness*thickness)
                  if(dfor>10){
                      wall.shapeColor=color(255,0,0);
                  }
                  if(dfor<10){
                  wall.shapeColor=color(230,230,0);
                  }
                  
              }
              drawSprites();
              }
   



















              