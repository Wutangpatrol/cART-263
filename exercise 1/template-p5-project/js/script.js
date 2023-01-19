/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";


/**
Description of preload
*/
function preload() {

}


/**
Description of setup
*/


function setup() {
    createCanvas (500,500); // canvas of 500 by 500 pixels 
    

}


/**
Description of draw()
*/
function draw() {
   
     let size = width/3 ;  // create variable that is one third the length of canvas 
  
    for ( let i = 0 ; i < 3 ; i ++){ // loop for the lines to multiply 
    line (i  * size , 0 , i * size , 500); // lines on the vertical 
    line ( 0 , i * size , 500 , i * size ); // lines on horizons
}

}

 function mouseClicked () { // create a function that happens when the mouse is clicked 
    
    let size = width / 3 ;  // variable that puts equals one third of the size 
    if ( mouseX <= 166 && mouseY <= 166 ) { // if the mouse position is in the top left square 
      
    textAlign (CENTER,CENTER); // centers the text 
    textSize (170); // set the text to a bigger size 
    text ( "X" ,84,104); // set the text as X and the position of it ( top left ) 

    textAlign (CENTER,CENTER); // centers the text 
    textSize (170); // set the text to a bigger size 
    text ( "O", 248, 270); // set the text as O and the position ( middle in firs row ); 
}   

    if ( mouseX <= 166 && mouseY >= 332 ){   // if the mouse position is in to bottom left square 

    textAlign (CENTER,CENTER); // centers the text 
    textSize (170);// set the text bigger size 
    text ( "X" , 84, 420 ); // set the text as X and and the position of it ( bottom left )
    
    textAlign (CENTER,CENTER); // centers the text 
    textSize (170);  // set the text size bigger (170) 
    text ( "O", 250 , 420);  // set the text as O and it position (middle second row )
 } 

    if ( mouseX >= 332 && mouseY <= 166 ){  // if the mouse position is in top right square 

    textAlign (CENTER,CENTER); // center the text 
    textSize (170);  // set the text size bigger 
    text ( "X" , 416, 104 );  // set the text as x and the position of it ( top right square ) 

    textAlign (CENTER,CENTER); // centers the text 
    textSize (170); // set the text font bigger (170); 
    text ( "O", 416, 420);  // set the text as O and its location ( bottom right square )
}


 }

    