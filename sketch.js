const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
const Constraint=Matter.Constraint

var engine,world
var stage1,stage2;
var gameState=1;

function preload(){
  myImagee=loadImage("fire.png")
  ground2=loadImage("m2.jpg")
}


function setup() {
  createCanvas(1200,600);

engine=Engine.create()
world=engine.world



ground=new Ground(600,580,1200,30)

box=new Box(1350,40,300,100)

stone1=new Stone(1300,-40)
stone2=new Stone(1300,80)


arrow1= new Arrow(1000,300,50);
arrow2= new Arrow(1000,200,50);
arrow3= new Arrow(1000,100,50);
arrow4= new Arrow(1000,0,50);
arrow5= new Arrow(900,300,50);
arrow6= new Arrow(900,200,50);
arrow7= new Arrow(900,100,50);
arrow8= new Arrow(800,300,50);
arrow9= new Arrow(800,200,50);
arrow10= new Arrow(800,100,50);
arrow11= new Arrow(800,0,50);
arrow12= new Arrow(700,300,50);
arrow13= new Arrow(700,200,50);
arrow14= new Arrow(700,100,50);
arrow15= new Arrow(700,0,50);
arrow16= new Arrow(1200,300,50);
arrow17= new Arrow(1200,200,50);
arrow18= new Arrow(1200,100,50);
arrow19= new Arrow(1200,0,50);
arrow20= new Arrow(1300,300,50);
arrow21= new Arrow(1300,200,50);
arrow22= new Arrow(1300,100,50);
arrow23= new Arrow(1300,0,50);
arrow24= new Arrow(1000,300,50);
arrow25= new Arrow(1000,300,50);
arrow26= new Arrow(1000,300,50);
arrow27= new Arrow(1000,300,50);

bahu=new Bahubali(1100,300)

enemy=new Enemy(200,500)
enemy1=new Enemy(220,500)
enemy2=new Enemy(240,500)
enemy3=new Enemy(330,500)
enemy4=new Enemy(260,500)
enemy5=new Enemy(350,500)
enemy6=new Enemy(280,500)
enemy7=new Enemy(380,500)
enemy8=new Enemy(300,500)
enemy9=new Enemy(400,500)
enemy10=new Enemy(420,500)
enemy11=new Enemy(70,500)
enemy12=new Enemy(90,500)
enemy13=new Enemy(130,500)
enemy14=new Enemy(110,500)
enemy15=new Enemy(150,500)
enemy16=new Enemy(10,500)
enemy17=new Enemy(170,500)
enemy18=new Enemy(180,500)
enemy19=new Enemy(0,500)
enemy20=new Enemy(40,500)
enemy21=new Enemy(50,500)

stage1=createSprite(1000,550,50,50);
stage2=createSprite(1100,550,50,50);
stage3=createSprite(900,550,50,50)

chain1=new Chain(stone1.body,box.body)
chain2=new Chain(stone2.body,box.body)

ground1=new Ground(0,550,30,500)



}



function draw() {
  background(255,255,255);  
  image (ground2,0,0,1200,600)
  
Engine.update(engine)

drawSprites();

if(gameState==1){



box.display();
chain1.display();
chain2.display();
stone1.display();
stone2.display();
ground.display();

bahu.display();
if (mousePressedOver(stage1)){
  
    Matter.Body.setStatic(stone1.body,false) 
    Matter.Body.applyForce(stone1.body,stone1.body.position,{x:-1,y:0.5});

    Matter.Body.setStatic(stone2.body,false) 
    Matter.Body.applyForce(stone2.body,stone2.body.position,{x:-1,y:0.5});

    Matter.Body.applyForce(box.body,box.body.position,{x:-1,y:0.5});


   
}

if (mousePressedOver(stage2)){
   
    Matter.Body.setStatic(arrow1.body,false) 
    Matter.Body.applyForce(arrow1.body,arrow1.body.position,{x:-2.5,y:0.5});
    
}

if (arrow1.body.position.y>560) {
  image (myImagee,200,515,300,100);

}

if(mousePressedOver(stage3)){
  gameState=2
}
}

if (gameState==2){
  enemy.display();
  enemy1.display();
  enemy2.display();
  enemy3.display();
  enemy4.display();
  enemy5.display();
  enemy6.display();
  enemy7.display();
  enemy8.display();
  enemy9.display();
  enemy10.display();
  enemy11.display();
  enemy12.display();
  enemy13.display();
  enemy14.display();
  enemy15.display();
  enemy16.display();
  enemy17.display();
  enemy18.display();
  enemy19.display();
  enemy20.display();
  enemy21.display();

  arrow1.display();
  arrow2.display();
  arrow3.display();
  arrow4.display();
  arrow5.display();
  arrow6.display();
  arrow7.display();
  arrow8.display();
  arrow9.display();
  arrow10.display();
  arrow11.display();
  arrow12.display();
  arrow13.display();
  arrow14.display();
  arrow15.display();
  arrow16.display();
  arrow17.display();
  arrow18.display();
  arrow19.display();
  arrow20.display();
  arrow21.display();
  arrow22.display();
  arrow23.display();
  arrow24.display();
  arrow25.display();
  arrow26.display();
  arrow27.display();

  if (mousePressedOver(stage2)){
   
    Matter.Body.setStatic(arrow1.body,false) 
    Matter.Body.applyForce(arrow1.body,arrow1.body.position,{x:-2.5,y:0.5});

    Matter.Body.setStatic(arrow2.body,false) 
    Matter.Body.applyForce(arrow2.body,arrow2.body.position,{x:-2.5,y:0.5});
    
    Matter.Body.setStatic(arrow3.body,false) 
    Matter.Body.applyForce(arrow3.body,arrow3.body.position,{x:-2.5,y:0.5});
    
    Matter.Body.setStatic(arrow4.body,false) 
    Matter.Body.applyForce(arrow4.body,arrow4.body.position,{x:-2.5,y:0.5});
    
    Matter.Body.setStatic(arrow5.body,false) 
    Matter.Body.applyForce(arrow5.body,arrow5.body.position,{x:-2.5,y:0.5});
    
    Matter.Body.setStatic(arrow6.body,false) 
    Matter.Body.applyForce(arrow6.body,arrow6.body.position,{x:-2.5,y:0.5});
    
    Matter.Body.setStatic(arrow7.body,false) 
    Matter.Body.applyForce(arrow7.body,arrow6.body.position,{x:-2.5,y:0.5});
    
    Matter.Body.setStatic(arrow8.body,false) 
    Matter.Body.applyForce(arrow8.body,arrow6.body.position,{x:-2.5,y:0.5});
    
    Matter.Body.setStatic(arrow9.body,false) 
    Matter.Body.applyForce(arrow9.body,arrow6.body.position,{x:-2.5,y:0.5});
    
    Matter.Body.setStatic(arrow10.body,false) 
    Matter.Body.applyForce(arrow10.body,arrow6.body.position,{x:-2.5,y:0.5});
    
    Matter.Body.setStatic(arrow11.body,false) 
    Matter.Body.applyForce(arrow11.body,arrow6.body.position,{x:-2.5,y:0.5});
    
    Matter.Body.setStatic(arrow12.body,false) 
    Matter.Body.applyForce(arrow12.body,arrow6.body.position,{x:-2.5,y:0.5});
    
    Matter.Body.setStatic(arrow13.body,false) 
    Matter.Body.applyForce(arrow13.body,arrow6.body.position,{x:-2.5,y:0.5});
    
    Matter.Body.setStatic(arrow14.body,false) 
    Matter.Body.applyForce(arrow14.body,arrow6.body.position,{x:-2.5,y:0.5});
    
    Matter.Body.setStatic(arrow15.body,false) 
    Matter.Body.applyForce(arrow15.body,arrow6.body.position,{x:-2.5,y:0.5});
    

    Matter.Body.setStatic(arrow16.body,false) 
    Matter.Body.applyForce(arrow16.body,arrow6.body.position,{x:-2.5,y:0.5});
    
    Matter.Body.setStatic(arrow17.body,false) 
    Matter.Body.applyForce(arrow17.body,arrow6.body.position,{x:-2.5,y:0.5});
    
    Matter.Body.setStatic(arrow18.body,false) 
    Matter.Body.applyForce(arrow18.body,arrow6.body.position,{x:-2.5,y:0.5});
    
    Matter.Body.setStatic(arrow19.body,false) 
    Matter.Body.applyForce(arrow9.body,arrow6.body.position,{x:-2.5,y:0.5});
    
    Matter.Body.setStatic(arrow20.body,false) 
    Matter.Body.applyForce(arrow20.body,arrow6.body.position,{x:-2.5,y:0.5});
    
    Matter.Body.setStatic(arrow21.body,false) 
    Matter.Body.applyForce(arrow21.body,arrow6.body.position,{x:-2.5,y:0.5});
    
    Matter.Body.setStatic(arrow22.body,false) 
    Matter.Body.applyForce(arrow22.body,arrow6.body.position,{x:-2.5,y:0.5});
    
    Matter.Body.setStatic(arrow23.body,false) 
    Matter.Body.applyForce(arrow23.body,arrow6.body.position,{x:-2.5,y:0.5});
    
    Matter.Body.setStatic(arrow24.body,false) 
    Matter.Body.applyForce(arrow24.body,arrow6.body.position,{x:-2.5,y:0.5});
    
    Matter.Body.setStatic(arrow25.body,false) 
    Matter.Body.applyForce(arrow25.body,arrow6.body.position,{x:-2.5,y:0.5});

    Matter.Body.setStatic(arrow26.body,false) 
    Matter.Body.applyForce(arrow26.body,arrow6.body.position,{x:-2.5,y:0.5});
    
    
    Matter.Body.setStatic(arrow27.body,false) 
    Matter.Body.applyForce(arrow27.body,arrow6.body.position,{x:-2.5,y:0.5});
    
}

}






}



 



    
     
    


   