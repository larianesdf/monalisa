function setup() {
  createCanvas(400, 400);
}

let olhoX
let olhoY


function draw() {
  background("black");

  //rosto
  fill("rgb(223,178,146)");
  circle(200, 200, 300);
  fill("#F5F3EE");
  circle(150, 150, 60); //olho esquerdo
  circle(250, 150, 60); //olho direito

  //pupilas rgb(126,109,109)
  fill("rgb(255,242,242)");
  //circle(150, 150, 10);
  //circle(250, 150, 10);
  
  
olhoY=map(mouseY,)
 olhoY=map(mouseX)
  
  OlhoY=map(mouseY, 0,400,125,170)
  olhoX=map(mouseX,0,400,125,170)
  
  circle(mouseX, mouseY, 10);
  

 
  
  
  
  
 
  //boca
  line(134, 265, 290, 265);

  //nari#C4A475
  fill("red");
  triangle(202, 184, 127, 224, 242, 223);

  if (mouseIsPressed) {
    console.log(mouseX, mouseY);
  }
}
