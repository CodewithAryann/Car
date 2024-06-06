function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(135, 206, 235);
  
  // road
  fill(50);
  rect(0, height / 2, width, height / 2);

  // car body
  let carX = mouseX;
  let carY = height / 2 + 50;
  fill(255, 0, 0); // Red 
  rect(carX - 40, carY - 20, 80, 30); // Body

  // Car windows
  fill(0, 191, 255); //  blue 
  rect(carX - 30, carY - 15, 20, 15); 
  rect(carX + 10, carY - 15, 20, 15); 

  // Car wheels
  fill(0); // Black 
  ellipse(carX - 25, carY + 10, 20, 20); 
  ellipse(carX + 25, carY + 10, 20, 20); 





  // Car headlights
  fill(255, 255, 0); // Yellow 
  ellipse(carX - 35, carY - 5, 10, 10); 
  ellipse(carX + 35, carY - 5, 10, 10); 

  // Car spoiler
  fill(255, 0, 0); // Red 
  rect(carX - 25, carY - 30, 50, 10); 
}