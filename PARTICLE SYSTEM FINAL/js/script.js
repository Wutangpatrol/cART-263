// caught in a storm while going to a party 
// Project from Tania Gaboriault 


var xoff2 = 10000; // Declare a var named xoff2 , assigned the value 10000;

var xoff = 0; // declare a var named xoff, assigned the value 0;

let angle = 0; // declare a var named angle, assigned the value 0 ;
var milliseconds = 0; // declare a var named milliseconds, assigned the value 0 ;
var seconds = 0; // declare a var named seconds, assigned the value 0 ;
let particles = []; // dcreate an empty array ;

function setup() {
  // setup the sketch
  createCanvas(500, 500); // set the canvas size500p x 500p

  colorMode(RGB); // set the color mode to RGB

  r = random(255); // assign value between 0 and 255 (randomly) to R ;
  g = random(255); // assign value between 0 and 255 to G ;
  b = random(255); // asssign value between 0 and 255 to B
}

function draw() {
  //
  if (seconds >= 14) {
    // if 14 seconds has passed,

    background(202); // set the background t0 white-greyish;
  } else {
    //if before 14 seconds ,
    background(145, 90, 90, 50); // set background pinkish ;
  }

  milliseconds = millis(); //  return the number of milliseconds from starting the program.

  seconds = milliseconds / 1000; // equation to calculate the seconds

  for (let i = 0; i < 5; i++) {
    //  for loop to create objects in each array element. 5 particles.
    let p = new Particle(); // Pass the index from the for loop to my new objects

    particles.push(p); //saves the current drawing style settings and transformations
  }

  for (let i = particles.length - 1; i >= 0; i--) {
    // an array to loop through objects to move them

    particles[i].update(); // method to update the particles
    particles[i].show(); // method to show the particles

    if (particles[i].finished()) {
      // remove this particle /

      particles.splice(i, 1);
    }
  }
}