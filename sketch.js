let spriteImg;
let sprite1;
let building1;
let backgroundGravel;
let backgroundGravel2;
let longMarket;
let marketWithTrees;
let christmasTree;
let marketMixedLights;
let check;
let myFont;

let buildingSelection = [];
//stores images

let buildingObject = [];
//stores building objects

function preload(){
    spriteImg = loadImage("assets/Player 1 sprite CC (3).png");
    backgroundGravel = loadImage("assets/background start file.png");
    backgroundGravel2 = loadImage("assets/background second stage.png");
    buildingSelection [0] = loadImage("assets/long market resize.png");
    buildingSelection [1] = loadImage("assets/Blank market resized.png");
    buildingSelection [2] = loadImage("assets/chrima tree 100 100 copy.png");
    buildingSelection [3] = loadImage("assets/market with trees.png");
//images for buildings
    myFont = loadFont("assets/Terminus (TTF) 500.ttf");
}

class sprite {
    spriteY;
    spriteSpeed;
    spriteX;
    spriteH;

    constructor(){
        this.spriteY = 300;
        this.spriteSpeed = 1;
        this.spriteX = 0;
        this.spriteH = 80;
    }
   show(){
        image(spriteImg, this.spriteX, this.spriteY, 100, 100);
   }
   spriteYDown(){
        this.spriteY += this.spriteSpeed;
        if(this.spriteY === 550 ){
            this.spriteY = 550;
            this.spriteSpeed = 0;
        }
    }
    spriteYUp(){
        this.spriteY += - this.spriteSpeed;
        if(this.spriteY === 0){
            this.spriteY = 0;
            this.spriteSpeed = 0; 
        }
    }
   }

class building {

    topBuildingX;
    topBuildingY;
    topBuildingW;
    topBuildingH;
    speedBuilding;
    //top row of buildings
    botBuildingX;
    botBuildingY;
    botBuildingW;
    botBuildingH;
    //bottom row of buidlings
    selectedImage;
    hits;
    

    constructor(){
        this.topBuildingX = 600;
        this.topBuildingY = random(0,250);
        // this.topBuildingW = 200;
        // this.topBuildingH = random(50,450);

        this.speedBuilding = 1;

        this.botBuildingX = 600;
        this.botBuildingY = random(250,400);
        // this.botBuildingW = 200;
        // this.botBuildingH = random(50,300);      


    }
    drawbuilding(){
            image(this.selectedImage, this.topBuildingX, this.topBuildingY,);
            image(this.selectedImage, this.botBuildingX, this.botBuildingY);
        }
    
    buildingMove(){
        this.topBuildingX += - this.speedBuilding;
        this.botBuildingX += - this.speedBuilding;
    }

    selectImage(){
        this.selectedImage = random(buildingSelection);
    }
    // hits(sprite1){
    //     if(sprite1.spriteY < this.topBuildingY || sprite1.spriteY > this.botBuildingY){
    //         background(0);
    //         rectMode(CENTER);
    //         text("Game Over",250,250);
    //     }
    // } 

}

function setup(){
    createCanvas(500,500);
    sprite1 = new sprite();
    buildingObject.push(new building());
    buildingObject[0].selectImage();
    
}

function draw(){
    background(255);
    image(backgroundGravel,0,0);
    textFont(myFont);
    text("press SPACE to start", 150,250);
    textSize(20);
    if( keyPressed === 'SPACE_BAR'){
        image(backgroundGravel,0,0);
            for(let i = buildingObject.length -1; i >= 0; i--){
        
                buildingObject[i].drawbuilding();
                buildingObject[i].buildingMove();


            }
            hits();
            sprite1.show();
            keyPressed();
            if (frameCount % 300 == 0) {
                building1 = new building();
                building1.selectImage();
                buildingObject.push(building1);
            }
    // sprite1.spriteYDown();

        }
}

function keyPressed(){
    if(key === 'w'){
        sprite1.spriteYUp();
    }
    if(key === 's'){
        sprite1.spriteYDown();
    }
}

function hits(){

    // checks any y coordinate greater than the top left of the sprite
    // (sprite1.spriteY - 20) > buildingObject[0].topBuildingY && (sprite1.spriteY - 20) < (buildingObject[0].topBuildingY + 100)

    // checks any y coordinate less than the bottom left of the sprite
    //  (sprite1.spriteY + sprite1.spriteH) > buildingObject[0].topBuildingY && (sprite1.spriteY + sprite1.spriteH) < (buildingObject[0].topBuildingY + 100)

    // repeats above lines for bottom building as well

    // calulates top right corner of sprite and then checks if x coordiantes of buildings are equal to it
    // ((sprite1.spriteX + 60) == buildingObject[0].topBuildingX  (sprite1.spriteX + 60) == buildingObject[0].botBuildingX)



    if((((sprite1.spriteY - 20) > buildingObject[0].topBuildingY && (sprite1.spriteY - 20) < (buildingObject[0].topBuildingY + 100) || (sprite1.spriteY + sprite1.spriteH) > buildingObject[0].topBuildingY && (sprite1.spriteY + sprite1.spriteH) < (buildingObject[0].topBuildingY + 100) || ((sprite1.spriteY - 20) > buildingObject[0].botBuildingY && (sprite1.spriteY - 20) < (buildingObject[0].botBuildingY + 100) (sprite1.spriteY + sprite1.spriteH) > buildingObject[0].botBuildingY && (sprite1.spriteY + sprite1.spriteH) < (buildingObject[0].botBuildingY + 100))) && ((sprite1.spriteX + 60) == buildingObject[0].topBuildingX || (sprite1.spriteX + 60) == buildingObject[0].botBuildingX))) {
        // place code for what happens after collision here
        background(0);
        fill(255);
        text("GAME OVER",250,250);
        
    }
}

//game over function, clears canvas by redrawing a blank canvas with the game over text printed
//function gameOver(){
    //if(sprite1.spriteY === buildingObject.topBuildingY || buildingObject.botBuildingX && buildingObject.botBuildingY){
      //  background(0);
        //textSize(100);
        //fill(255);
        //text("GAME OVER",width/2, height/2);

    //}
//}

//game start function with right click
// function gameStart(){
//     if(mouseButton === RIGHT){
//         //begin game, call functions in draw that load sprite and let sprite move
//     }
//     else{
//         return false;
//  


