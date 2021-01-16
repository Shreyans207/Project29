const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground , platform1 , platform2;

function setup(){
    var canvas = createCanvas(2000,1000);

    engine = Engine.create();
    world = engine.world;
 
    ground = new Ground(1000,970,2000,20);
    platform1 = new Ground(800,800,400,20);
    platform2 = new Ground(1300,500,300,20);

    polygon = new Polygon(200,600,30);
    slingshot = new SlingShot(this.polygon,{x:200,y:600});


    //Platform1
    //4th layer
    box1 = new Box(710,780,30,40);
    box1.color(blue);
    box2 = new Box(740,780,30,40);
    box2.color(blue);
    box3 = new Box(770,780,30,40);
    box3.color(blue);
    box4 = new Box(800,780,30,40);
    box4.color(blue);
    box5 = new Box(830,780,30,40);
    box5.color(blue);
    box6 = new Box(860,780,30,40);
    box6.color(blue);
    box7 = new Box(890,780,30,40);
    box7.color(blue);

    //3rd layer
    box8 = new Box(740,740,30,40);
    box8.color(pink);
    box9 = new Box(770,740,30,40);
    box9.color(pink);
    box10 = new Box(800,740,30,40);
    box10.color(pink);
    box11 = new Box(830,740,30,40);
    box11.color(pink);
    box12 = new Box(860,740,30,40);
    box12.color(pink);

    //2nd layer
    box13 = new Box(770,700,30,40);
    box13.color(green);
    box14 = new Box(800,700,30,40);
    box14.color(green);
    box15 = new Box(830,700,30,40);
    box15.color(green);

    //1st layer
    box16 = new Box(800,660,30,40);
    box16.color(yellow);


    //Platform2
     //3rd layer
     box17 = new Box(1180,460,30,40);
     box17.color(pink);
     box18 = new Box(1240,460,30,40);
     box18.color(pink);
     box19 = new Box(1300,460,30,40);
     box19.color(pink);
     box20 = new Box(1360,460,30,40);
     box20.color(pink);
     box21 = new Box(1420,460,30,40);
     box21.color(pink);

     //2nd layer
     box22 = new Box(1240,420,30,40);
     box22.color(green);
     box23 = new Box(1300,420,30,40);
     box23.color(green);
     box24 = new Box(1360,420,30,40);
     box24.color(green);

     //1st layer
     box25 = new Box(1300,380,30,40);
     box25.color(yellow);
}

function draw(){
    background(255);

    Engine.update(engine);

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
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}