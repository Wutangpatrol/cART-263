//variable that holds the data table file
let table;


let points = []; //array holding datapoints 

//variables that holds specific strings related to the event in the dataset 
let myEvent1;
let myEvent2;
let myEvent3;
let myEvent4;
let myEvent5;
let myEvent6;
let myEvent7;
let myEvent8;

// variables that holds specific strings related to the magnitude in the dataset 
let mag1;
let mag2;
let mag3;
let mag4;
let mag5;
let mag6;
let mag7;
let mag8;

//variable that holds spectifc strings related to the deathtoll in the dataset
var death2;
var death1;
var death3;
var death4;
var death5;
var death6;
var death7;
var death8;

function preload() {
  //my table is comma separated value "csv"
  //and has a header specifying the columns labels
  table = loadTable("EARTHQUAKES.csv", "csv", "header");
}

function setup() {
  createCanvas(650, 450);

   
  console.log(table.getRowCount() + " total rows in table");
   console.log(table.getColumnCount() + " total columns in table");

  //console.log(table.getString(7, 3));

  //set inital values of variables to specific data in table 
  var death2 = table.getString(1, 0);
  var death1 = table.getString(0, 0);
  var death3 = table.getString(2, 0);
  var death4 = table.getString(3, 0);
  var death5 = table.getString(4, 0);
  var death6 = table.getString(5, 0);
  var death7 = table.getString(6, 0);
  var death8 = table.getString(7, 0);

  myEvent1 = table.getString(0, 3);
  myEvent2 = table.getString(1, 3);
  myEvent3 = table.getString(2, 3);
  myEvent4 = table.getString(3, 3);
  myEvent5 = table.getString(4, 3);
  myEvent6 = table.getString(5, 3);
  myEvent7 = table.getString(6, 3);
  myEvent8 = table.getString(7, 3);

  mag1 = table.getString(0, 2);
  mag2 = table.getString(1, 2);
  mag3 = table.getString(2, 2);
  mag4 = table.getString(3, 2);
  mag5 = table.getString(4, 2);
  mag6 = table.getString(5, 2);
  mag7 = table.getString(6, 2);
  mag8 = table.getString(7, 2);

//cycle through rows & columns of the table
  for (var r = 0; r < table.getRowCount(); r++) {
    for (var c = 0; c < table.getColumnCount(); c++) {}
  }

  
  for (var r = 0; r < table.getRowCount(); r++) {
    points[r] = new DataPoint(
      table.getString(0, 1),

      //table.getString(r, 1),
      table.getString(r, 2),
      table.getString(r, 3),
      table.getString(r, 4),
      table.getString(r, 5),
      table.getString(r, 0),
      table.getString(0, 0),
      table.getString(1, 0),
      table.getString(2, 0),
      table.getString(3, 0),
      table.getString(4, 0),
      table.getString(5, 0),
      table.getString(6, 0),
      table.getString(7, 0)
    ); // pass through values in each row
  }
}

function draw() {
  background(0); // set background to black

  for (let i = points.length - 1; i >= 1; i--) {
    points[i].drawYearly();   //activate the method 
    points[i].drawEvent();
    points[i].drawStats();
    points[i].drawMag();
  }
}

class DataPoint {
    //properties of constructor 
  constructor(
    Year,
    Magnitude,
    Event,
    Location,
    Date,
    Deathtoll,
    death,
    death2,
    death3,
    death4,
    death5,
    death6,
    death7,
    death8
  ) {
    this.year = Year;
    this.magnitude = Magnitude;
    this.event = Event;
    this.location = Location;
    this.date = Date;
    this.deathtoll = Deathtoll;

    this.death1 = death;
    this.death2 = death2;
    this.death3 = death3;
    this.death4 = death4;
    this.death5 = death5;
    this.death6 = death6;
    this.death7 = death7;
    this.death8 = death8;
  }

  drawYearly() { // draw the years increasing 
    noStroke(); 
    fill(255, 0, 0, 10);// set the text to white with low opacity
    textSize(25); //size 25 for text
    frameCount % 180 === 0 ? this.year++ : null; // modulo to make the text count increase
    text(this.year, 30, 25); // set the text to begin at 2001 
  }

  drawStats() { //draws the representation of deathtolls
    this.x = random(275, 375); //set to the middle of canvas 
    this.y = random(175, 275);//set to the middle of canvas 

    //if statement correlating the year to the appropriate deathtoll
    if (this.year == "2001") { 
      stroke(255, 0, 0, 100); // set to white with medium opacity 
      // fill(0,50);
      noFill(); 
      ellipse(this.x, this.y, int(this.death1) * 6);  //set the size of ellipse depending on the specific string (death1), and position to the middle
    }

    if (this.year == "2002") {
      stroke(255, 0, 0, 100);
      // fill(0,50);
      noFill();
      ellipse(this.x, this.y, int(this.death2) * 6);
    }

    if (this.year == "2003") {
      stroke(255, 0, 0, 100);
      // fill(0,50);
      noFill();
      ellipse(this.x, this.y, int(this.death3) * 6);
    }
    if (this.year == "2004") {
      stroke(255, 0, 0, 100);
      // fill(0,50);
      noFill();
      ellipse(this.x, this.y, int(this.death4) * 3);
    }
    if (this.year == "2005") {
      stroke(255, 0, 0, 100);
      // fill(0,50);
      noFill();
      ellipse(this.x, this.y, int(this.death5) * 6);
    }

    if (this.year == "2006") {
      stroke(255, 0, 0, 100);
      //  fill(0,50);
      noFill();
      ellipse(this.x, this.y, int(this.death6) * 6);
    }
    if (this.year == "2007") {
      stroke(255, 0, 0, 100);
      // fill(0,50);
      noFill();
      ellipse(this.x, this.y, int(this.death7 / 100));
    }

    if (this.year == "2008") {
      stroke(255, 0, 0, 100);
      noFill();
      ellipse(this.x, this.y, int(this.death8) * 6);
    }

  }

  drawEvent() { // draws the text for the name of the earthquake 
    
    // if statement to correlate the year to the name of the earthquake
    if (this.year == "2001") {
      fill(255); // puts the text in white 
      textSize(18);
      text(myEvent1, 550, 420); // set the text to the correponding name of earthquake
    }

    if (this.year == "2002") {
      fill(255);
      textSize(18);
      text(myEvent2, 530, 420);
    }

    if (this.year == "2003") {
      fill(255);
      textSize(18);
      text(myEvent3, 530, 420);
    }
    if (this.year == "2004") {
      fill(255, 0, 0);
      textSize(18);
      text(myEvent4, 475, 420);
    }
    if (this.year == "2005") {
      fill(255);
      textSize(18);
      text(myEvent5, 530, 420);
    }

    if (this.year == "2006") {
      fill(255);
      textSize(18);
      text(myEvent6, 530, 420);
    }
    if (this.year == "2007") {
      fill(255);
      textSize(18);
      text(myEvent7, 530, 420);
    }
    if (this.year == "2008") {
      fill(255);
      textSize(18);
      text(myEvent8, 530, 420);
    }
  }

  drawMag() {  // draws the text for the magnitude of the earthquakes 

    //if statement to correlate the year with the magnitude of the earthquake 
    if (this.year == "2001") {
      stroke(255, 2); // set the text with white countour
      noFill(); 
      textSize(420);
      textAlign(CENTER, CENTER); //sets the current alignement for drawwing text
      text(mag1, 320, 255); // correlates the text with the specific magnitude in the dataset
    }

    if (this.year == "2002") {
      stroke(255, 2);
      noFill();
      textSize(420);
      textAlign(CENTER, CENTER);
      text(mag2, 320, 255);
    }
    if (this.year == "2003") {
      stroke(255, 2);
      noFill();
      textSize(420);
      textAlign(CENTER, CENTER);
      text(mag3, 320, 255);
    }
    if (this.year == "2004") {
      stroke(255, 0, 0, 10.5);
      noFill();
      textSize(420);
      textAlign(CENTER, CENTER);
      text(mag4, 320, 255);
    }
    if (this.year == "2005") {
      stroke(255, 4);
      noFill();
      textSize(420);
      textAlign(CENTER, CENTER);
      text(mag5, 320, 255);
    }
    if (this.year == "2006") {
      stroke(255, 2);
      noFill();
      textSize(420);
      textAlign(CENTER, CENTER);
      text(mag6, 320, 255);
    }
    if (this.year == "2007") {
      stroke(255, 10);
      noFill();
      textSize(420);
      textAlign(CENTER, CENTER);
      text(mag7, 320, 255);
    }
    if (this.year == "2008") {
      stroke(255, 3.5);
      noFill();
      textSize(420);
      textAlign(CENTER, CENTER);
      text(mag8, 320, 255);
    }

    //if statement to clear the canvas after year 2008
    if (this.year >= "2009") {
        clear();
      }
  }
}
