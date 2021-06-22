const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var polygon, polygon_img;
var score=0;
Text("SCORE: " +score,750,40);

function preload() {
    polygon_img = loadImage("polygon.png");
 }
 
 function setup() {
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);


    polygon = Bodies.circle(50,200,200);
    World.add(world,polygon);

    this.polygon

    ground = new Ground();

    slingShot = new SlingShot(this.polygon,{x:100,y:200});

    stand1 = new Ground(50,30,100,110);

    //level one
    block1 = new Box(300,235,30,40);
    block2 = new Box(330,235,30,40);
    block3 = new Box(360,235,30,40);
    block4 = new Box(390,235,30,40);
    block5 = new Box(420,235,30,40);
    block6 = new Box(450,235,30,40);
    block7 = new Box(480,235,30,40);
    //level two
    block8 = new Box(330,235,30,40);
    block9 = new Box(360,235,30,40);
    block10 = new Box(390,235,30,40);
    block11 = new Box(420,235,30,40);
    block12 = new Box(450,235,30,40);
    //level three
    block13 = new Box(360,195,30,40);
    block14 = new Box(390,235,30,40);
    block15 = new Box(420,235,30,40);
    //top
    block16 = new Box(390,155,30,40);
    // Engine.run(engine);
}

function draw() {
    background(180);
    Engine.update(engine);
    imageMode(CENTER);
    image(polygon_img.polygon.position.x,polygon.position.y,40,40);
    
    ground.display();
    stand1.display();

    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display(); 

    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();

    block13.display();
    block14.display();
    block15.display();
    block16.display();

    slingShot.display();
  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
  block8.score();
  block9.score();
  block10.score();
  block11.score();
  block12.score();
  block13.score();
  block14.score();
  block15.score();
  block16.score();

  blocks1.score();
  blocks2.score();
  blocks3.score();
  blocks4.score();
  blocks5.score();
  blocks6.score();
  blocks7.score();
  blocks8.score();
  blocks9.score();

    drawSprites();
}

function mouseDragged(){
    Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
  }
  function mouseReleased(){
    slingShot.fly();
  }

  function keyPressed(){
    if(keyCode === 32){
        slingShot.attach(this.polygon);
    }
  }

  async function getBackgroundImage(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();
 
    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11, 13);
    //console.log(hour);
 
    if (hour >= 06 && hour <= 18) {
      bg = "images/light.jpg";
    } else {
      bg = "images/dark.jpg";
    }
 
    backgroundImg = loadImage(bg);
    console.log(backgroundImg);
 }