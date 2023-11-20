// let x;
// let y;

// let yDirection = 0;
//y direction of sprite for movement mechanics

// function setup(){
//     createCanvas(600,600);
//     background(0);
// }
// //leaving background in setup because i dont want it to change

// function draw(){
//     circle(x,y,50);
// }
// //circle current place holder for player Sprite
// function playerSprite(){

// }
// // function playerSprite will draw the player sprite 
// function spriteMove(){

// }
// //constantly changing the sprite's y coodinates so it looks like it is moving

// function keyPressed(){
//     if(keyCode === UP_ARROW){
//         yDirection = -1;
//     }
//     if(keyCode === DOWN_ARROW){
//         yDirection = 1;
//     }
// }
// // to move the sprite up and down on the y axis

// let x;
// let y;

// let yDirection = 0;
// //y direction of sprite for movement mechanics

// function setup(){
//     createCanvas(600,600);
//     background(0);
// }
// //leaving background in setup because i dont want it to change

// function draw(){
//     circle(x,y,50);
// }
// //circle current place holder for player Sprite
// function playerSprite(){

// }
// // function playerSprite will draw the player sprite 
// function spriteMove(){

// }
// //constantly changing the sprite's y coodinates so it looks like it is moving

// function keyPressed(){
//     if(keyCode === UP_ARROW){
//         yDirection = -1;
//     }
//     if(keyCode === DOWN_ARROW){
//         yDirection = 1;
//     }
// }
// // to move the sprite up and down on the y axis

//learning to use constructor functions 


function sprite() {
    this.y = height/2;

    this.show = function(){
        fill(255);
        circle(this.x,this.y,50);
    }
    this.up = function(){
        keyPressed();
    }
    this.down = function(){
        keyPressed();
    }
}

function buildings(){
    this.top = random(height/2);
    //top set of buildings
    this.bottom = random(height/2);
    //bottom set of buildings
    this.x = width;
    this.w = 20;
    //the width of the buildings
    this.speed = 3;
    //speed of which the buildings will slide to the left

    this.hits = function(sprite){
        if(sprite.y < this.top || sprite.y > height - this.bottom);
            if(sprite.x > this.x && sprite.x < this.x + this.w)
            return true;
    }

    this.show = function(){
        fill(255);
        rect(this.x, 0, this.w, this.top);
        rect(this.x, height-this.bottom, this.w, this.top);
    }

    this.update = function(){
        this.x -= this.speed
    }
    
    this.offscreen = function(){
        if( this.x < -this.w){
            return true;
        } else {
            return false;
        }
    }
}

let sprite;

function setup(){
    createCanvas(400,400);
    sprite = new sprite();
    buildings.push( new buildings());
}

function draw(){
    background(0);
    sprite.show();

    if(frameCount % 100 == 0 ){
        buildings.push(new buildings());
    }
    //creates new set of buildings using the modulus, every 100 frames
    for( let i = 0; i < buildings.length; i++){
        buildings[i].show();
        buildings[i].update();
    }

    if(buildings[i].hits(sprite)){
        
    }
    
    for( let i = buildings.length; i < buildings.length; i++){
        buildings[i].show();
        buildings[i].update();
        if( buildings[i].offscreen()){
            buildings.splice(i, 1);
            //splice gets rid of elements in the array, gets rid of the pipes when they are off screen
        }
    }
}

function keyPressed(){
    if(keyCode === UP_ARROW){
        yDirection = -1;
    }
    if(keyCode === DOWN_ARROW){
        yDirection = 1;
    }
}
// to move the sprite up and down on the y axis

function endGame(){
    
}