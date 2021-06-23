var snow1,snow1img
var snow5,snow5img
const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;


function preload(){
  snow1img = loadImage("snow1.jpg");
  snow5img = loadImage("snow5.png");

}
function setup() {
  createCanvas(800, 750);
  snow1 = createSprite(200, 200, 50, 50);
  snow1.addImage("snowy",snow5img);
  snow1.scale=0.2
  engine = Engine.create();
  world = engine.world;
 snowBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, snowBody);
	
	Engine.run(engine);

}

function draw() {
  background(snow1img);
  snow1.x = snowBody.position.x;
  snow1.y = snowBody.position.y;
  if(snow1.y > 470&&snowBody.position.y>470) {
    Matter.Body.setStatic(snowBody,true);
    World.remove(world,snowBody);
  }
  console.log(snow1.y);
  console.log(snow1.x);
  drawSprites();
}
function keyPressed() {

	if(keyCode === RIGHT_ARROW){
    snowBody.position.x = snowBody.position.x + 20;
	}
	
        if(keyCode === LEFT_ARROW){
          snowBody.position.x = snowBody.position.x - 20;
	}

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(snowBody,false); 
	}
}