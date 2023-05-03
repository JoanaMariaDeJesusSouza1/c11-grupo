var trex ,trexRunner;
var ground;



//preload carrega as midías
function preload(){
  //animação do Trex
  trexRunner = loadAnimation("trex1.png", "trex3.png", "trex4.png");
 

}


//setup faz a configuração
function setup(){
  createCanvas(600,200);

  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trexRunner);
  trex.scale = 0.5; 
  trex.x=50;


  ground =  createSprite(300,190,600,2)


 
}
//draw faz o movimento, a ação do jogo
function draw(){
  background("white");


  
  if(keyDown("space")){
    trex.velocityY = -10;
  }

 //criando a gravidade
  trex.velocityY += 0.5; 


     
 //coordenadas do mouse na tela
   text("X: "+mouseX+"  / Y: "+mouseY,mouseX,mouseY);

  //colisão do trex com as bordas
  trex.collide(ground);

  
  drawSprites();

}

