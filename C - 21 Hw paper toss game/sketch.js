// CREATED BY AADI GOLECHA ON 3rd OF JULY
//paper toss game


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;
var ball;

var binWall1, binWall2;

var btn1;

function setup() {
  createCanvas(1400,800);
  engine = Engine.create();
  world = engine.world;

  //creating button for applying force 
  btn1 = createImg('push.png');
  btn1.position (220,30);
  btn1.size(100,100);
  btn1.mouseClicked(hForce);



  //creating case
  ground =new Ground(700,790,1400,20);
  right = new Ground(1390,400,20,800);
  left = new Ground(10,400,20,800);
  top_wall = new Ground(700,10,1400,20);

  //creating bin
  binWall1 = new Ground(1300,680,20,200);
  binWall2 = new Ground(1100,680,20,200);

  var ballOptions = 
  {
    isStatic : false,
    restitution : 0.3,
    friction : 0,
    density : 1.2
  }

  ball = Bodies.circle(200,10, 20,ballOptions);
  World.add(world,ball);
 
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);

 ellipse(ball.position.x, ball.position.y, 20);

  ground.show();
  top_wall.show();
  left.show();
  right.show();

  binWall1.show();
  binWall2.show();
  
  Engine.update(engine);
}

function hForce()
{
  Matter.Body.applyForce(ball, {x :0, y : 0} , {x :40, y : 0} );
}
