let x;
let y;

let yDirection = 0;
//y direction of sprite for movement mechanics

function setup(){
    createCanvas(600,600);
    background(0);
}
//leaving background in setup because i dont want it to change

function draw(){
    circle(x,y,50);
}
//circle current place holder for player Sprite
function playerSprite(){

}
// function playerSprite will draw the player sprite 
function spriteMove(){

}
//constantly changing the sprite's y coodinates so it looks like it is moving

function keyPressed(){
    if(keyCode === UP_ARROW){
        yDirection = -1;
    }
    if(keyCode === DOWN_ARROW){
        yDirection = 1;
    }
}
// to move the sprite up and down on the y axis