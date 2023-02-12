class Particle {
    constructor() {
      // let me pass parameters for the array of particle
      if (seconds >= 25) {
        // if the sketch as run for more than or 25 seconds, clear paricles
      } else {
        this.x = map(noise(xoff), 0, 1, 17, width); // sets and maps the location of x position of particle
        this.y = map(noise(xoff2), 0, 1, 3, width); // sets and maps the location of y position of particle
  
        this.vx = random(-1, -1); // add velocity
        this.vy = random(1, -1); // add velocity
  
        this.r = map(this.x, 0, width, 255, 0); // sets and map the value of R ;
        this.g = map(this.y, 0, height, 0, 255); // sets and map the value of G ;
        this.b = map(
          dist(width / 2, height / 2, this.x, this.y),
          0,
          width / 2,
          0,
          255
        ); // sets and map the value of B ;
  
        this.alpha = 200; // sets the opacity to 200, higher;
  
        angle += 2; // sets angle of movement ;
  
        xoff += 0.003; // sets offset of movement ;
        xoff2 += 0.003; // sets offset of movement ;
      }
    }
  
    finished() {
      // function to remove particles
      return this.alpha < 0; // when the alpha, opacity is 0, smaller ; deletes the first element of the array
    }
  
    update() {
      if (dist(width / 2, height / 2, this.x, this.y) > 140) { // this is an if statement i found on the internet, but i can't find back where it did come from. 
        //if statement  for distance of two points.
        this.alpha -= 7;
      } else {
        this.x += this.vx;
        this.y += this.vy;
        this.alpha -= 7;
      }
    }
  
    show() {
      // function that displays the particles
      if (seconds >= 14) {
        // if 14 seconds have passed
        this.vx = random(-20, -1); // resets the velocity of movement  x position
        this.vy = random(10, -10); // resets the velocity of movement y position
        drawingContext.shadowBlur = 15; // creates a shadow blur on the particles of 15 diameter
        drawingContext.shadowColor = color(0); // creates the color of shadow
  
        fill(0, this.alpha); // sets the fill to zero and opacity and transparency
        ellipse(this.x, this.y, 9); // create ellipse of 9 diameter
  
        this.alpha -= 4; // sets the transparency
      } else {
        stroke(r, g, b, 180); // create stroke color random , and 180 opacity
        drawingContext.shadowBlur = 10; // creates a shawdow blur on particle
        drawingContext.shadowColor = color(90, 55, 190); // create the color of shawdow
        fill(this.r, this.g, this.b, 255); // fills the particle of random rainbow colors
        ellipse(this.x, this.y, 12); // creates ellipse of 12 diameter
      }
    }
  }