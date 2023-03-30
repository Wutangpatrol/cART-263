let colorToMatch ;
let tolerance = 5;  // how much room i have to match the color 


//const density = "Ñ@#W$9876543210?!abc;:+=-,._ "; // use const for a variable that i know isn't going to change
//const density = "@$=+-. ";                
const density = '       .:-i|=+%O#@'
//const density = '        .:░▒▓█';


let video;
let asciiDiv;

function setup() {
  createCanvas (500,500); 
 // noCanvas();

  video = createCapture(VIDEO);
 
  video.size(108,55);
  asciiDiv = createDiv();
  video.hide(); 

  let w = width/video.width ;
  let h = height/video.height; 


  colorToMatch = color (255, 240, 120); 


}

function draw() {

  
 // video (video, 0 , 0, 500,500 ); 
 video.loadPixels();
  let asciiImage = "";
  
  
    for (let j = 0; j < video.height; j++) {
    for (let i = 0; i < video.width; i++) {

      translate(width,0);
      scale(-1,1) ;
  

      const pixelIndex = (i + j * video.width) * 4;
      const r = video.pixels[pixelIndex + 0];
      const g = video.pixels[pixelIndex + 1];
      const b = video.pixels[pixelIndex + 2];
      const avg = (r + g + b) / 3;
      const len = density.length;
      const charIndex = floor(map(avg, 0, 255, 0, len));
      const c = density.charAt(charIndex);
      if (c == " ") asciiImage += "&nbsp;";
      else asciiImage += c;
    }
    asciiImage += '<br/>';
  }
  asciiDiv.html(asciiImage);
}
