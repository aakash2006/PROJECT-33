var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
  var particle;
var particles = [];
var plinkos = [];
var divisions = [];

var line;

var divisionHeight=300;

gameState = "PLAY";

var turn = 0;
var score = 0;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 50; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 25; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 50; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 25; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

  } 


function draw() {
  background("black");
  textSize(20)
 text("Score : "+score,20,40);
 fill("white");
 textSize(35)
 text("500",10,550);
 text("500",90,550);
 text("200",170,550);
 text("200",250,550);
 text("100",330,550);
 text("100",410,550);
 text("200",490,550);
 text("200",570,550);
 text("500",650,550);
 text("500",730,550);
  Engine.update(engine);

  if(gameState == "END")
  {
   textSize(100);
   text("GAME OVER",100,260)
  } 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }

   if(particle!=null)
   {
     particle.display();

     if(particle.body.position.y>760)
     {
       if(particle.body.position.x>5 && particle.body.position.x<160)
       {
         score = score+500;
         particle = null;
         if(turn>=5) gameState = "END";
       }else if(particle.body.position.x > 161 && particle.body.position.x < 320)
       {
         score = score+200
         particle = null;
         if(turn>=5) gameState = "END";
       }else if(particle.body.position.x > 321 && particle.body.position.x < 480)
       {
         score = score+100
         particle = null;
         if(turn>=5) gameState = "END";
       }else if(particle.body.position.x > 481 && particle.body.position.x < 640)
       {
        score = score+200
        particle = null;
        if(turn>=5) gameState = "END";
       }else if(particle.body.position.x > 641 && particle.body.position.x < 800)
       {
        score = score+500
        particle = null;
        if(turn>=5) gameState = "END";
       }
     }
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
}

function mousePressed(){
  if(gameState!=="END")
  {
    turn++;
    particle = new Particle(mouseX,10,10,10)
  }
}