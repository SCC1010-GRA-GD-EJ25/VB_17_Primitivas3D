let tierra

function preload() {
  // put preload code here
  tierra = loadImage('./images/tierra.jpg')
}

function setup() {
  // put setup code here
  createCanvas(windowWidth,windowHeight, WEBGL)
}

function draw() {
  // put drawing code here
  background(0)
  //rotateX(frameCount * 0.01)
  //rotateY(frameCount * 0.01)
  //rotateZ(frameCount * 0.01)
  //box(150)
  translate(-450,-200,0)
  push()
  rotateX(frameCount * 0.01)
  rotateY(frameCount * 0.01)
  rotateZ(frameCount * 0.01)
  texture(tierra)
  plane(160,60,60)
  pop()
 
  translate(250,0,0)
  push()
  rotateX(frameCount * 0.01)
  rotateY(frameCount * 0.01)
  rotateZ(frameCount * 0.01)
  texture(tierra)
  sphere(80,30)
  pop()
 
  translate(250,0,0)
  push()
  rotateX(frameCount * 0.01)
  rotateY(frameCount * 0.01)
  rotateZ(frameCount * 0.01)
  texture(tierra)
  torus(60,40,30)
  pop()

  translate(250,0,0)
  push()
  rotateX(frameCount * 0.01)
  rotateY(frameCount * 0.01)
  rotateZ(frameCount * 0.01)
  texture(tierra)
  cone(80,80,30)
  pop()

  translate(-750,250,0)
  push()
  rotateX(frameCount * 0.01)
  rotateY(frameCount * 0.01)
  rotateZ(frameCount * 0.01)
  texture(tierra)
  box(100)
  pop()

  translate(250,0,0)
  push()
  rotateX(frameCount * 0.01)
  rotateY(frameCount * 0.01)
  rotateZ(frameCount * 0.01)
  texture(tierra)
  cylinder(80,120,30)
  pop()

  translate(250,0,0)
  push()
  rotateX(frameCount * 0.01)
  rotateY(frameCount * 0.01)
  rotateZ(frameCount * 0.01)
  texture(tierra)
  ellipsoid(80,60,40,30)
  pop()

}
