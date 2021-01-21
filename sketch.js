const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground , platform1 , platform2;

function preload(){
    polygonImage = loadImage("polygon.png")
}
function setup(){
    var canvas = createCanvas(2000,1000);

    engine = Engine.create();
    world = engine.world;

    polygon = Bodies.circle(200,600,30);
    World.add(world,polygon)
    
 
    ground = new Ground(1000,970,2000,20);
    platform1 = new Ground(800,800,400,20);
    platform2 = new Ground(1300,500,300,20);

    
    slingshot = new SlingShot(this.polygon,{x:200,y:600});


    //Platform1
    //4th layer
    fill("blue")
    box1 = new Box(710,780); 
    box2 = new Box(740,780);
    box3 = new Box(770,780);
    box4 = new Box(800,780);
    box5 = new Box(830,780,);
    box6 = new Box(860,780);
    box7 = new Box(890,780);

    //3rd layer
    fill("pink")
    box8 = new Box(740,740);
    box9 = new Box(770,740);
    box10 = new Box(800,740);
    box11 = new Box(830,740);
    box12 = new Box(860,740);

    //2nd layer
    fill("green");
    box13 = new Box(770,700,);
    box14 = new Box(800,700);
    box15 = new Box(830,700);

    //1st layer
    fill("yellow")
    box16 = new Box(800,660);

    //Platform2
     //3rd layer
     fill("pink")
     box17 = new Box(1180,460);
     box18 = new Box(1240,460);
     box19 = new Box(1300,460);
     box20 = new Box(1360,460);
     box21 = new Box(1420,460);

     //2nd layer
     fill("green")
     box22 = new Box(1240,420);
     box23 = new Box(1300,420);
     box24 = new Box(1360,420);

     //1st layer
     fill("yellow")
     box25 = new Box(1300,380);
}

function draw(){
    background(0);

    Engine.update(engine);

    imageMode(CENTER);
    image(polygonImage,polygon.position.x,polygon.position.y,30,30)

    ground.display();
    platform1.display();
    platform2.display();

    polygon.display();
    slingshot.display();

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box5.display();
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
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();

    box21.display();
    box22.display();
    box23.display();
    box24.display();
    box25.display();
}

function mouseDragged(){
    Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
 }
 
 
 function mouseReleased(){
     slingshot.fly();
 }
