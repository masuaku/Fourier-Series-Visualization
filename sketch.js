let time = 0;
let wave = [];

function setup() {
  createCanvas(600, 400);
  slider = createSlider(2,100, 3);
  
}

function draw() {
  background(255);
  translate(200,200);
  
  let i = slider.value();
  
  let prevX = 0;
  let prevY = 0;
  let lastX = 0;
  let lastY = 0;
  
  for (let n = 1; n < i; n=n+2) {
    
  let radius = (300/(n*PI));
  let L = 2*PI;
  let x = radius*cos(n*PI*time/L);
  let y = radius*sin(n*PI*time/L); 
    
  stroke(0);
  strokeWeight(3);
  noFill();
  ellipse(lastX, lastY, 2*radius, 2*radius);
  
  stroke(204, 0, 0);
  strokeWeight(10);
  point(lastX, lastY);
  
  lastX = lastX + x;
  lastY = lastY + y;
    
  //Line from center to radius
  stroke(0);
  strokeWeight(3);
  line(prevX, prevY, lastX, lastY);
    
  prevX = prevX + x;
  prevY = prevY + y;
  } 
  
  translate(150,0);
  stroke(204, 0, 0);
  strokeWeight(3);
  wave.unshift(lastY);
  
  // Line from the outermost radius (cumulative) to graph start
  line(lastX-150, lastY, 0, lastY);
  
  beginShape();
  for (let i = 0; i < wave.length; i++){ 
    vertex(i, wave[i]);
  }
  endShape();
  
  time += 0.05;
}
