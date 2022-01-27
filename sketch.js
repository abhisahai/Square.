var box;

//predifined func runs 1 at strt
function setup() {
  //canvas
  createCanvas(400,400);
  //box stuff
  box = createSprite(200,200,30,30);
  box.shapeColor = 'black';
}

function draw() 
{
  background(255);
  if (keyDown('right')){
    box.x += 5;
  }
  if (keyDown('left')){
    box.x -= 5;
  }
  if (keyDown('up')){
    box.y -= 5;
  }
  if (keyDown('down')){
    box.y += 5;
  }
  
  drawSprites();
  
}




