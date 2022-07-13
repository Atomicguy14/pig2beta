var bg, bg_Image;
var ground, ground_Image;
var pig, pigl_Image, pigr_Image;
var floor, floor_Image;
var turtle, turtle_Image, turtleGroup;
var broom, broom_Image;


function preload () {
 bg_Image = loadImage ("bg.png");
ground_Image = loadImage ("ground.png");
pigl_Image = loadImage ("pigl.png");
pigr_Image = loadImage ("pigr.png");
floor_Image = loadImage ("floor.png");
turtle_Image = loadImage ("turtle.png");
broom_Image = loadImage ("broom.png");

 
} 

function setup () {
    createCanvas (windowWidth, windowHeight);
    bg = createSprite(900, 400,2000,1000);
    bg.addImage (bg_Image);
    bg.scale = 1.1;

    ground = createSprite(950, 990, );
    ground.addImage(ground_Image);
    ground.scale = 1.58;

    pig = createSprite (910, 780);
    pig.addImage ("pigl",pigl_Image);
    pig.addImage ("pigr",pigr_Image);
    pig.scale = 0.3;
    //pig.debug = true;

    floor = createSprite (950, 885);
    floor.addImage(floor_Image);
    floor.scale = 1.58;

    broom = createSprite (pig.x, pig.y);
    broom.addImage (broom_Image);
    broom.scale = 0.7;
    broom.velocityY = 0.5;
    

    turtleGroup = new Group;


}


function draw () {
    background (0);
if (keyDown("RIGHT_ARROW")) {
    pig.x += 10;
    pig.changeImage("pigr");
} 

if (keyDown("LEFT_ARROW")) {
    pig.x -= 10;
    pig.changeImage("pigl");
}

if (keyDown("UP_ARROW") && pig.y >= 550) {
    pig.velocityY = -10;
    
}
pig.velocityY =  pig.velocityY + 0.5;


pig.collide(ground);
spawnTurtles();
    drawSprites();
}


function spawnTurtles () {
    if (World.frameCount % 140 === 0) {
turtle = createSprite (1800, 800);
turtle.scale = 0.3;
turtle.x = Math.round (random(1800, 800));
turtle.addImage (turtle_Image);
turtle.velocityX = -6;
turtleGroup.add(turtle);
turtle.lifetime = 300;
    }
}