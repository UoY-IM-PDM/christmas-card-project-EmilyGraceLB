let spriteImg;
let sprite1;
let building1;
let backgroundGravel;
let backgroundGravel2;
let longMarket;
let marketWithTrees;
let christmasTree;
let marketMixedLights;

let buildings = [ longMarket, marketWithTrees, christmasTree, marketMixedLights]

let spawnBuild = true;

function preload(){
    spriteImg = loadImage("assets/Player 1 sprite CC (3).png");
    backgroundGravel = loadImage("assets/background start file.png");
    backgroundGravel2 = loadImage("assets/background second stage.png");
    longMarket = loadImage("assets/long market.png");
    marketWithTrees = loadImage("assets/christmas lights on market.png");
    christmasTree = loadImage("assets/christmas tree (1).png");
    marketMixedLights = loadImage("assets/market mixed lights.png");
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

    constructor(){
        this.topBuildingX = 600;
        this.topBuildingY = 0;
        this.topBuildingW = 200;
        this.topBuildingH = random(50,450);

        this.speedBuilding = 1;

        this.botBuildingX = 600;
        this.botBuildingY = random(250,600);
        this.botBuildingW = 200;        
    }
    drawbuilding(topImage){
            image(topImage, this.topBuildingX, this.topBuildingY );
            //image(longMarket, this.topBuildingX, this.topBuildingY)
            image(marketWithTrees, this.botBuildingX, this.botBuildingY);
        }
    
    buildingMove(){
        this.topBuildingX += - this.speedBuilding;
        this.botBuildingX += - this.speedBuilding;
        if(this.topBuildingX === 300){
            spawnBuild = true;
        }
    }
}



function setup(){
    createCanvas(600,600);
    sprite1 = new sprite();
    building1 = new building();
    building2 = new building();
    building3 = new building();
}

function draw(){
    background(255);
    image(backgroundGravel,0,0);

    sprite1.show();
    keyPressed();
    // sprite1.spriteYDown();
    building1.drawbuilding(christmasTree);
    randomiseBuildings();
    building1.buildingMove();
    //building1.drawbuilding();



}

function keyPressed(){
    if(key === 'w'){
        sprite1.spriteYUp();
    }
    if(key === 's'){
        sprite1.spriteYDown();
    }
}

function randomiseBuildings(){
    let topRandom = random(1,5);
    if (topRandom === '1'){
        building1.drawbuilding(christmasTree);
    }
    else if (topRandom === '2'){
        topImage = marketWithTrees
    }
    else if (topRandom === '3'){
        topImage = christmasTree
    }
    //else if (topRandom === '4'){
    //   image(longMarket)
    //}
    else{
        topImage = longMarket
    }
    
    building1.drawbuilding(topImage);

    if (spawnBuild === True) {
        building1.drawbuilding(topImage, 0);
    }
}
// toprandom(1, 5)
// if (random = 1)
// print ("hello")
// draw marketwithtrees
// elif (random = 2)
// print ("hey")
// draw long market

//botrandom