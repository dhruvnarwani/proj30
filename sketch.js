
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var engine, world;
var ground, stand;
function preload() {
    
    polygonImg = loadImage("polygon.png");
}

function setup(){
    var canvas = createCanvas(1200,400);

    polygon = Bodies.rectangle(150, 300, 100, 50);
    
    
    ground = new Ground(200, 100, 200, 50);
    stand = new Ground(400, 200, 100, 30);
    
    box1 = new box(380, 300, 30, 40);
    box2 = new box(400, 300, 30, 40);
    box3 = new box(420, 300, 30, 40);
    box4 = new box(440, 300, 30, 40);
    box5 = new box(460, 300, 30, 40);
    box6 = new box(480, 300, 30, 40);
    box7 = new box(380, 350, 30, 40);
    box8 = new box(400, 350, 30, 40);
    box9 = new box(420, 350, 30, 40);
    box10 = new box(440, 350, 30, 40);
    box11 = new box(460, 350, 30, 40);
    box12 = new box(480, 350, 30, 40);
    box13 = new box(500, 350, 30, 40);
    box14 = new box(520, 350, 30, 40);

    slingshot = new SlingShot(polygon.body,{x:200, y:50});
    


    
}

function draw(){
    

   box1.display();
   box2.display();
   box3.display();
   box4.display();
   box5.display();
   box6.display();
   box7.display();
   box8.display();
   box9.display();
   box10.display();
   box11.display();
   box12.display();
   box13.display();
   box14.display();

    ground.display();
    stand.display();

    Engine.update(engine);
   
}


function mouseDragged(){
    
        Matter.Body.setPosition(Box.body, {x: mouseX , y: mouseY});
    
}


function mouseReleased(){
    slingshot.fly();
    
}

function keyPressed(){
    if(keyCode === 32){
       slingshot.attach(Box.body);
    }
}