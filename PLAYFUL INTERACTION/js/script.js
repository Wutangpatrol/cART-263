

let cam ; 
let colorToMatch ;
let tolerance = 5;  // how much room i have to match the color 


function setup () {
    createCanvas (500,500); 
    cam = createCapture (VIDEO); 
    cam.hide (); 

    let w = width/video.width; 
    let h = height / video.height; 

    colorToMatch = color (255, 240, 120); 

}

function draw () {
  
    translate (width, 0); 
    scale(-1,1) ;
    image (cam, 0 , 0, 500,500 ); 

    let myPixel = findColor( cam, colorToMatch, tolerance); // function to scan the video and find the first pixel of the  color im looking for
if ( myPixel !== undefined) {

    fill(colorToMatch); // create a little circle to draw when if statement is returned 
    stroke (255); 
    strokeWeight (2) ; 
    circle (myPixel.x , myPixel.y , 30); // x and y are the return values (vector) 
}

}

function mousePressed() { // function to update the color we are looking for 
loadPixels (); 
colorToMatch = get (mouseX, mouseY); 

}

function findColor (input, c , tolerance ){ // input = frame of the video

    if ( input.width === 0 || input.height === 0 ){
        return undefined ; 
        }

    let matchR = c[0]; // extract the colors 
    let matchG = c[1]; 
    let matchB = c[2]; 


 input.loadPixels ();  // for each frame we load the pixels 
    for ( let y = 0 ; y < input.height ; y ++) { // for loop too look through all the pixels 
        for (let x = 0 ; x < input.width ; x ++ ){ // look through all the pixels 


            let index = ( y * cam.width + x ) * 4 ; // grab the index
            let r = cam.pixels[index]; // grab the rgb's value from that
            let g = cam.pixels[index+1]; 
            let b = cam.pixels[index+2]; 

            

            if ( r >= matchR- tolerance  && r <= matchR + tolerance && // if the red value is greater than the matching red value minus our tolerance and if the red value is less than the matching red color minus that ( is it bracketed between those values )
                g >= matchG- tolerance && g <= matchG + tolerance && // it kinda is like collision detection , but instd of x and y e got 3 values, r, g and b 
                b >= matchB - tolerance && b <= matchB + tolerance){

                    return createVector  ( x , y ) ; // if that matches, the result is returned as a vector ( x and y value ( position))
                    // return makes it stop to search if found, then return as anything ( shape, x, y etc )


                }

        }
    }

}