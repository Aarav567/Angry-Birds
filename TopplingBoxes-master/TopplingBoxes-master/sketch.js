const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground1;
var Bird1;
var Pig1, P2;
var Log1, Log2 ,Log3, Log4, Log5;
var Stand1, St2;
var BG;
var BGsprite;
var highground;
var slingshot1;





function setup(){
    var canvas = createCanvas(400,400);
  
  
    engine = Engine.create();
    world = engine.world;
    ground1= new  Ground(200,390,400,20);
    Bird1= new Bird(mouseX,mouseY,30,30);
    Pig1= new Pig(325,363,35,35);
    Log1= new Log(285,361,40,40);
    Log2= new Log(365,361,40,40);
    Stand1= new Stand(325,333,130,15);
    P2= new Pig(325,309,35,35);   //Pig 2
    Log3= new Log(285,306,40,40);
    Log4= new Log(365,306,40,40);
    St2= new Stand(325,278,130,15); //St2
    Log5= new Log(325,251,40,40);
    highground= new HighGround(0,400,300,300);
    slingshot1 = new Slingshot(Bird1.body,{x:mouseX, y:mouseY})



}

function draw(){
    background("white");
    Engine.update(engine);

        



    ground1.display();
    Bird1.display();
    Pig1.display();
    Log1.display();
    Log2.display();
    Stand1.display();
    P2.display();
    Log3.display();
    Log4.display();
    St2.display();
    Log5.display();
    highground.display();
    slingshot1.display();

}



function mouseDragged(){
    Matter.Body.setPosition(Bird1.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
    slingshot1.fly();
}





