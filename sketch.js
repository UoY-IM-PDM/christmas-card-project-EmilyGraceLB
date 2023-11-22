let spriteImg;
let sprite1;
let building1;
let backgroundGravel;
let backgroundGravel2;

function preload(){
    spriteImg = loadImage("assets/Player 1 sprite CC (3).png");
    backgroundGravel = loadImage("assets/background start file.png");
    backgroundGravel2 = loadImage("assets/background second stage.png");
}

class sprite {
    spriteY;
    spriteSpeed;

    constructor(){
        this.spriteY = 300;
        this.spriteSpeed = 1;
    }
   show(){
        image(spriteImg, 0, this.spriteY, 100, 100);
   }
   spriteYDown(){
        this.spriteY += this.spriteSpeed;
        if(this.spriteY === 750 ){
            this.spriteY = 750;
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
    constructor(){
        this.topBuildingX = 800;
        this.topBuildingY = 0;
        this.topBuildingW = 200;
        this.topBuildingH = random(50,600);

        this.speedBuilding = 1;

        this.botBuildingX = 800;
        this.botBuildingY = random(400,800);
        this.botBuildingW = 200;        
    }
    drawbuilding(){
            rect(this.topBuildingX,this.topBuildingY, this.topBuildingW, this.topBuildingH );
            if(this.topBuildingX === 400){
                rect(this.topBuildingX,this.topBuildingY, this.topBuildingW, this.topBuildingH );
            }
            rect(this.botBuildingX, this.botBuildingY, this.botBuildingW);
            if(this.botBuildingX === 400){
                rect(this.botBuildingX, this.botBuildingY, this.botBuildingW);
            }
        }
    
    buildingMove(){
        this.topBuildingX += - this.speedBuilding;
        this.botBuildingX += - this.speedBuilding;
    }
}



function setup(){
    createCanvas(800,800);
    sprite1 = new sprite();
    building1 = new building();
}

function draw(){
    background(255);
    image(backgroundGravel,0,0);
    sprite1.show();
    keyPressed();
    // sprite1.spriteYDown();
    building1.drawbuilding();
    building1.buildingMove();

}

function keyPressed(){
    if(key === 'w'){
        sprite1.spriteYUp();
    }
    if(key === 's'){
        sprite1.spriteYDown();
    }
}

