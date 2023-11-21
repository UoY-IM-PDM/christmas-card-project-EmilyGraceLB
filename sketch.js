let spriteImg;

class sprite {
    spriteY;
    spriteSpeed;

    constructor(){
        this.spriteY = 0;
        this.spriteSpeed = 1;
    }
    show(){
        image(spriteImg, x, spriteY, 50, 50 );
    }
}

function preload(){
    spriteImg = loadImage("assets/Player 1 sprite CC (3).png");
}

function setup(){
    createCanvas(800,800);
    let sprite = new sprite();
}

function draw(){
    background(255);
    sprite.show();

}
