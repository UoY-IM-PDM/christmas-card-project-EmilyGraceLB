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

let buildingSelection = [];
//stores images

let buildingObject = [];
//stores building objects

function preload(){
    spriteImg = loadImage("assets/Player 1 sprite CC (3).png");
    backgroundGravel = loadImage("assets/background start file.png");
    backgroundGravel2 = loadImage("assets/background second stage.png");
    buildingSelection [0] = loadImage("assets/long market.png");
    buildingSelection [1] = loadImage("assets/christmas lights on market.png");
    buildingSelection [2] = loadImage("assets/chrima tree 100 100 copy.png");
    buildingSelection [3] = loadImage("assets/market mixed lights.png");
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

    constructor(){
        this.topBuildingX = 600;
        this.topBuildingY = random(50,300);
        // this.topBuildingW = 200;
        // this.topBuildingH = random(50,450);

        this.speedBuilding = 1;

        this.botBuildingX = 600;
        this.botBuildingY = random(300,400);
        // this.botBuildingW = 200;
        // this.botBuildingH = random(50,300);      
    }
    drawbuilding(){
            image(this.selectedImage, this.topBuildingX, this.topBuildingY);
            image(this.selectedImage, this.botBuildingX, this.botBuildingY);
        }
    
    buildingMove(){
        this.topBuildingX += - this.speedBuilding;
        this.botBuildingX += - this.speedBuilding;
    }

    selectImage(){
        this.selectedImage = random(buildingSelection);
    }

}

function setup(){
    createCanvas(600,600);
    sprite1 = new sprite();
    buildingObject.push(new building());
    buildingObject[0].selectImage();

}

function draw(){
    background(255);
    image(backgroundGravel,0,0);
    for(let i = buildingObject.length -1; i >= 0; i--){
        
        buildingObject[i].drawbuilding();
        buildingObject[i].buildingMove();
    }
    sprite1.show();
    keyPressed();
    if (frameCount % 350 == 0) {
            building1 = new building();
            building1.selectImage();
            buildingObject.push(building1);
    }
    // sprite1.spriteYDown();

}

function keyPressed(){
    if(key === 'w'){
        sprite1.spriteYUp();
    }
    if(key === 's'){
        sprite1.spriteYDown();
    }
}