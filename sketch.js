var player;
var playerIMG;
var star1,star2,star3,star4,star5,star6,star7,star8,star9,star10,star11,star12,star13,star14,star15,star16;
var star17,star18,star19,star20,star21,star22,star23,star24,star25,star26,star27,star28,star29,star30,star31,star32;
// lim = limite
var limesq,limdir,limcim,limbai;
function preload(){ // função que carregar todas as imagens e animações
  playerIMG = loadImage('assets/nave2.png')
}

function setup(){ // todas as configuraçoes dos objetos
  createCanvas(600,600);
  
  
  star1 = createSprite(random(1,600),random(1,600),10,10)
  star1.shapeColor = 'white';
  star2 = createSprite(random(1,600),random(1,600),10,10)
  star2.shapeColor = 'white';
  star3 = createSprite(random(1,600),random(1,600),10,10)
  star3.shapeColor = 'white';
  star4 = createSprite(random(1,600),random(1,600),10,10)
  star4.shapeColor = 'white';
  star5 = createSprite(random(1,600),random(1,600),10,10)
  star5.shapeColor = 'white';
  star6 = createSprite(random(1,600),random(1,600),10,10)
  star6.shapeColor = 'white';
  star7 = createSprite(random(1,600),random(1,600),10,10)
  star7.shapeColor = 'white';
  star8 = createSprite(random(1,600),random(1,600),10,10)
  star8.shapeColor = 'white';
  star9 = createSprite(random(1,600),random(1,600),10,10)
  star9.shapeColor = 'white';
  star10 = createSprite(random(1,600),random(1,600),10,10)
  star10.shapeColor = 'white';
  star11 = createSprite(random(1,600),random(1,600),10,10)
  star11.shapeColor = 'white';
  star12 = createSprite(random(1,600),random(1,600),10,10)
  star12.shapeColor = 'white';
  star13 = createSprite(random(1,600),random(1,600),10,10)
  star13.shapeColor = 'white';
  star14 = createSprite(random(1,600),random(1,600),10,10)
  star14.shapeColor = 'white';
  star15 = createSprite(random(1,600),random(1,600),10,10)
  star15.shapeColor = 'white';
  star16 = createSprite(random(1,600),random(1,600),10,10)
  star16.shapeColor = 'white';
  star17 = createSprite(random(1,600),random(1,600),10,10)
  star17.shapeColor = 'white';
  star18 = createSprite(random(1,600),random(1,600),10,10)
  star18.shapeColor = 'white';
  star19 = createSprite(random(1,600),random(1,600),10,10)
  star19.shapeColor = 'white';
  star20 = createSprite(random(1,600),random(1,600),10,10)
  star20.shapeColor = 'white';
  star21 = createSprite(random(1,600),random(1,600),10,10)
  star21.shapeColor = 'white';
  star22 = createSprite(random(1,600),random(1,600),10,10)
  star22.shapeColor = 'white';
  star23 = createSprite(random(1,600),random(1,600),10,10)
  star23.shapeColor = 'white';
  star24 = createSprite(random(1,600),random(1,600),10,10)
  star24.shapeColor = 'white';
  star25 = createSprite(random(1,600),random(1,600),10,10)
  star25.shapeColor = 'white';
  star26 = createSprite(random(1,600),random(1,600),10,10)
  star26.shapeColor = 'white';
  star27 = createSprite(random(1,600),random(1,600),10,10)
  star27.shapeColor = 'white';
  star28 = createSprite(random(1,600),random(1,600),10,10)
  star28.shapeColor = 'white';
  star29 = createSprite(random(1,600),random(1,600),10,10)
  star29.shapeColor = 'white';
  star30 = createSprite(random(1,600),random(1,600),10,10)
  star30.shapeColor = 'white';
  star31 = createSprite(random(1,600),random(1,600),10,10)
  star31.shapeColor = 'white';
  star32 = createSprite(random(1,600),random(1,600),10,10)
  star32.shapeColor = 'white';

  limesq = createSprite(0,300,30,600);
  limdir = createSprite(600,300,30,600);
  limcim = createSprite(300,0,600,30);
  limbai = createSprite(300,600,600,30);

  //player
  player = createSprite(300,500,100,100)
  player.addImage('nave',playerIMG);
  player.scale = 2;
  player.debug = true;
  player.setCollider('rectangle',-2,-2,85,-51,0)
  // player.shapeColor = 'MidnightBlue';
}

function draw(){
  background("black");
  if (keyDown(65)){
    player.x = player.x - 2;
  }
  if (keyDown(68)){
    player.x = player.x + 2;
  }
  if (keyDown(87)){
    player.y = player.y - 2;

  }
  if (keyDown(83)){
    player.y = player.y + 2;

  }
  
 
  if (player.isTouching(limesq) || player.isTouching(limdir) || player.isTouching(limcim) || player.isTouching(limbai)){
    fill('red')
    textSize(30);
    text('VOCÊ ESTÁ SAINDO',150,300);
    text('DA ÁREA DA MISSÃO',150,335)
  }
  console.log(player.x);
  



  drawSprites(); 
}

