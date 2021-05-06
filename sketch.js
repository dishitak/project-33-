 Engine = Matter.Engine,
  World = Matter.World,
 Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var engine,world ;
var particle;
var divisions=[];
var particles = [particle];
var plinkos = [];
var line
var divisions;

var divisionHeight=300;
var gameState = "PLAY"
var count=0;
var score =0;



function setup()
 {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background(0);
  Engine.update(engine);
  textSize(35)
  text("Score : "+score,20,40);
  fill(225)


  textSize(20)
  text("500 ",5,550)
  text(" 500 ", 80,550) 





  ground.display();
  if (gameState=="END")
  {
    background("black");
    fill("white")
    textSize(80)
    text("Game Over",250,390);
  }
  
   /*for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if(frameCount%60===0){
     particles.push(new particle(random(width/2-30, width/2+30), 10,10));
     score++;
   }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }*/
}