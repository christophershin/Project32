const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground, polygon;
var Slingshot;
var score=0;

var block1, block2, block3, block4, block5, block6, block7;
var block8, block9, block10,block11,block12;
var block13, block14, block15;
var block16;

function preload(){
    polygon=loadImage("TowerSiege-1-main/polygon.png")
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground= new Ground(600,400,1200,10);

    block8=new Block(330,235,30,40);
    block9=new Block(360,235,30,40);
    block10=new Block(390,235,30,40);
    block11=new Block(420,235,30,40);
    block12=new Block(450,235,30,40);

    block13=new Block(360,195,30,40);
    block14=new Block(390,195,30,40);
    block15=new Block(420,195,30,40);

    block16=new Block(390,155,30,40);

    polygon=new Polygon(100,200,40,40);
    polygon=bodyA
    Slingshot=new SlingShot(100,200,20,20);

    Text("SCORE :"+score,750,40)
}


function draw(){

    background("black");
    Engine.update(engine);

    ground.display();
    block8.display();
    block9.display();
    block9.display();
    block9.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();

    block13.display();
    block14.display();
    block15.display();

    block16.display();

    polygon.display();
    Slingshot.display();
}


function mouseDragged(){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    }


function mouseReleased(){
    Slingshot.fly();
}

function keyPressed(){

    if(keycode ==32){
        Slingshot.attach(this.polygon)
    }
}