const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13;
var backgroundImg,platform,ground;
var bird, slingShot;

function preload() {
    
}

function setup(){
    createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);

    ground = new Ground(600,height,1200,20);
    //platform = new Ground(150, 305, 300, 170);

    box1 = new Box(790,320,70,70);
    box2 = new Box(920,320,70,70);
    box6 = new Box(920,160,70,70);
    
   

    box3 = new Box(790,240,70,70);
    box4 = new Box(920,240,70,70);
  

    box5 = new Box(790,160,70,70);

    box7 = new Box(720,240,70,70);
    box8 = new Box(720,320,70,70);
    box9 = new Box(855,320,70,70);
    box10 = new Box(990,240,70,70);
    box11 = new Box(990,320,70,70);
    box12 = new Box(920,160,70,70);
    box13 = new Box(790,160,70,70);

    bird = new Bird(600,100);

    
    slingShot = new Slingshot(bird.body,{x:600,y:100});
}

function draw(){
    background("white");
    Engine.update(engine);
    strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();

    box3.display();
    box4.display();
    box6.display();
 

    box5.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();


    bird.display();
    //platform.display()
   
    slingShot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body,{x:mouseX, y:mouseY});
}

function mouseReleased(){
    slingShot.fly();
}



