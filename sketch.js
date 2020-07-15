const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5;
var pig1, pig2;
var log1,log2,log3,log4;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);
 
    //1st layer
    
    box1 = new Box(700,320,70,70);
    box2 = new Box(800,320,70,70);
    pig1= new Pig(750,320,60,60);
    log1= new log(750,250,280,PI/2);


    //2nd layer

    box3= new Box(700,230,70,70);
   box4= new Box(800,230,70,70);
   pig2= new Pig(750,230,60,60);
   log2= new log(750,200,280,PI/2);

   //3rd layer

   box5= new Box(750,170,70,70);


//4th layer
log3= new log(700,170,160,PI/8);
log4= new log (800,170,160,-PI/8);
}



function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    ground.display();
    pig1.display();
    pig2.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
}