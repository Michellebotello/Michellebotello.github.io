let img; //declare global variable to hold image object

//preload() runs once, before all other functions
function preload(){ 
  img = loadImage('Unknown.png'); //load image after uploading to file system
}

function setup() {
  createCanvas(400, 400);
  console.log("the setup function runs one time"); //this prints to the console
}// makes the canvas element for our sketch 


function draw() { 
  background(240, 200, 0 );

  describe ('A canvas with a yellow background'); 

//draw an ellipse in the middle of the canvas
  //the stuff inside the parentheses are called parameters (parameters modify how a function/method do their thing)

   
  
  fill(0, 185, 270);
  //the stuff inside the parentheses are called parameters (parameters modify how a function/method do their thing)
  
   
    // Draw the line.  
  line (205, 2, 215, 900 ); 
  
  
    
  
  rect (0, 330, 500, 70)
describe ('A rectangle with no outline on a yellow canvas.')

  fill(315, 45, 10);
  // stroke(255,255,0);
  
  circle ( 220, 10, 165 ); 
  describe ('A circle with a red outline on a yellow canvas') 
  
  
   // Draw the line.  
  line (120, 200, 120, 380 ); 
  
  
  fill(90,60,20);
 // rect(105,200,30,130);

  
  
  fill(225, 230, 0);
  // stroke(5,5,10);

  // Draw the line.
  line (55, 250, 55, 360 ); 
   
  circle ( 300, 200, 150 ); 
  describe ('A circle with a soft green outline on a yellow canvas')
  
  fill(315, 145, 0);
  // stroke(255,255,0);
  
  
  
  
  circle ( 210, 200, 90 );
  describe ('A circle with a orange outline on a yellow canvas')       
  
  // Draw the line.
  line (155, 260, 155, 380 );
  
  circle ( 20, 20, 200 );
  describe ('A circle with a orange outline on a yellow canvas')       
  // Draw the line.
  line (15, 20, 15, 380 ); 
  
  
    fill(35, 205, 0 );
  // stroke(255,255,0);
  
   // Draw the line.  
  line (300, 700, 300, 180 ); 
  
    circle ( 112, 200, 105 ); 
  describe ('A circle with a soft green outline on a yellow canvas') 


  
   fill(167, 70, 0);
  // stroke(255,255,0); 
  
   
  circle ( 165, 270, 77 ); 
  describe ('A circle with a red outline on a yellow canvas') 
  
  
// Draw the line.
  line (255, 260, 255, 380); 
  
  
  fill(315, 45, 0);
  // stroke(255,255,0);
  
  circle ( 45, 240, 80 ); 
  describe ('A circle with a red outline on a yellow canvas') 
  
  //the image function draws the image object into the canvas
  //the parameters of the image() function are the image object to use, the x and y coordinates where you want the image, followed by the width and height
  image(img,mouseX-100,mouseY-20,120,100);
  
  console.log(mouseX + ", " + mouseY);
}



