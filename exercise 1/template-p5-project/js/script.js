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
    createCanvas (500,500);
    

}


/**
Description of draw()
*/
function draw() {
   
  
    let size = width/3 ; 
  
    for ( let i = 0 ; i < 3 ; i ++){
//rect (i*size , 0 , size, size); 
//rect ( i * size , size , size, size ); 
//rect ( i * size, size* 2 , size , size ); 
      
      line (i  * size , 0 , i * size , 500); 
      line ( 0 , i * size , 500 , i * size ); 
}

}

 
function mouseClicked () {
    
    let size = width / 3 ; 


textSize (150);
text ("X", mouseX, mouseY ); 

 
//fill (0); 



}

    