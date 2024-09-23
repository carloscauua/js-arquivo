function setup() {a
  createCanvas(600, 600);
}

function draw() {
  background('white');
 
  stroke('blue')
  fill('red');
  
// console.log(mouseIsPressed);
  
  if(mouseIsPressed){
  rect(mouseX , mouseY, 30, 45);
  }
}
    c
