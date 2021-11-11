var fundoImg;
var gatoImg1, gatoImg2, gatoImg3;
var ratoImg1, ratoImg2, ratoImg3;
var gato;
var rato;
function preload() {
    fundoImg = loadImage("garden.png");
    gatoImg1 = loadImage("cat1.png");
    ratoImg1 = loadImage("mouse1.png");
    gatoImg2 = loadAnimation("cat2.png", "cat3.png");
    ratoImg2 = loadAnimation("mouse2.png", "mouse3.png");
    gatoImg3 = loadImage("cat4.png");
    ratoImg3 = loadImage("mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    
    //crie os sprites de gato e rato aqui
    gato = createSprite(700, 600,50,50);
    gato.addAnimation("gatoSentado", gatoImg1);
    gato.scale = 0.2;
    rato = createSprite(100,600,50,50);
    rato.addAnimation("ratoParado", ratoImg1);
    rato.scale = 0.2;

}

function draw() {

    background(fundoImg);
    //Escreva a condição aqui para avaliar se o gato e o rato colidem
    if(gato.x - rato.x < (gato.width - rato.width)/2){
        gato.velocityX = 0;
        gato.addAnimation("ultimaImagemGato", gatoImg3);
        gato.changeAnimation("ultimaImagemGato");
        gato.x = 300;
        gato.scale = 0.2;
        rato.addAnimation("ultimaImagemRato", ratoImg3);
        rato.changeAnimation("ultimaImagemRato");
        rato.x = 200
        rato.scale = 0.2;
    }
    
    drawSprites();
    
}


function keyPressed(){

  //Para mover e alterar a animação, escreva o código aqui
if(keyCode ===LEFT_ARROW){
    rato.addAnimation("ratoProvocando",ratoImg2);
    rato.changeAnimation("ratoProvocando");
    rato.frameDelay = 25;
    gato.addAnimation("gatoCorrendo",gatoImg2);
    gato.changeAnimation("gatoCorrendo");
    gato.velocityX = -5;
    
}

}

