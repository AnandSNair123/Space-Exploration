var rocket_img1,rocket_img2,rocket_img3,rocket_img4,rocket_img5,rocket_img6,rocket_img7,rocket_img8,rocket_img9,rocket_img10,rocket_img11,rocket_img12;
var space_img,space;
var mercury_img,venus_img,earth_img,mars_img,jupiter_img,saturn_img,uranus_img,neptune_img,pluto_img;
var meteorite_img;
var meteorite,meteoriteGroup;
var rocket;
var mercury,venus,earth,mars,jupiter,saturn,uranus,neptune,pluto;
var coins,coins_img,coinsGroup;
var gameState;
var END=0;
var mercuryState = 1;
var venusState = 2;
var earthState = 3;
var marsState = 4;
var jupiterState = 5;
var saturnState = 6;
var uranusState = 7;
var neptuneState = 8;
var plutoState = 9;
var restart = 10;
var win = 11;
var start = 12;
var chooseRocket = 13;
var score = 0;
var resetState;
var mercuryr = 0;
var venusr = 1;
var earthr = 2;
var marsr = 3;
var jupiterr = 4;
var saturnr = 5;
var uranusr = 6 ;
var neptuner = 7;
var plutor = 8;
var gameover,gameover_img;
var scores;
var backgroundsprite,background_img;
var back,back_img;
var start,start_img;
var checkpointSound;
var gameovereffect;
var coinseffect;
var planet;
var congrats,congrats_img;
var textx = 60,texty = 270;
var logo,logo_img,play,play_img;
var rocket1,rocket2,rocket3,rocket4,rocket5,rocket6,rocket7,rocket8,rocket9,rocket10,rocket11,rocket12;
var winSound;


function preload(){
space_img = loadImage("space.jpg");
rocket_img1 = loadImage("1.png");
rocket_img2 = loadImage("2.png");
rocket_img3 = loadImage("3.png");
rocket_img4 = loadImage("4.png");
rocket_img5 = loadImage("5.png");
rocket_img6 = loadImage("6.png");
rocket_img7 = loadImage("7.png");
rocket_img8 = loadImage("8.png");
rocket_img9 = loadImage("9.png");
rocket_img10 = loadImage("10.png");
rocket_img11 = loadImage("11.png");
rocket_img12 = loadImage("12.png");
rocket_sound = loadSound("rocketsound.wav");
earth_img = loadImage("earth.png");
mars_img = loadImage("mars.png");
jupiter_img = loadImage("jupiter.png");
saturn_img = loadImage("saturn.png");
uranus_img = loadImage("uranus.png");
neptune_img = loadImage("neptune.png");
meteorite_img = loadImage("meteorite.png");
coins_img = loadImage("coins.png");
mercury_img = loadImage("mercury.png");
venus_img = loadImage("venus.png");
gameover_img = loadImage("game over.png");
background_img = loadImage("back.jpg");
back_img = loadImage("name.gif");
start_img = loadImage("play.png");
checkpointSound = loadSound("checkpoint.mp3");
gameovereffect = loadSound("gameover.mp3");
coinseffect = loadSound("coins.mp3");
pluto_img = loadImage("pluto.png");
congrats_img = loadImage("congratulations.jpg");
logo_img = loadAnimation("ground.png");
play_img = loadImage("play.png");
winSound = loadSound("win.wav");
}

function setup() {
 var canvas = createCanvas(1200,500);


 space = createSprite(600,250);
 space.addImage("space",space_img);
 space.velocityX = -(4+score/10);

 mercury = createSprite(1400,250,200,200);
 mercury.addImage(pluto_img);
 mercury.visible = false;
 mercury.scale = 0.9;

 venus = createSprite(1400,250,200,200);
 venus.addImage(venus_img);
 venus.visible = false;
 venus.scale = 0.7;

 earth = createSprite(1400,250,200,200);
 earth.addImage(earth_img);
 earth.visible = false;
 earth.scale = 0.8;

 mars = createSprite(1400,250,200,200);
 mars.addImage(mars_img);
 mars.visible = false;
 mars.scale = 0.9;
 

 jupiter = createSprite(1400,250,200,200);
 jupiter.addImage(jupiter_img);
 jupiter.visible = false;
 jupiter.scale = 1.3;

 saturn = createSprite(1400,250,200,200);
 saturn.addImage(saturn_img);
 saturn.visible = false;
 saturn.scale = 1.4;

 uranus = createSprite(1400,250,200,200);
 uranus.addImage(uranus_img);
 uranus.visible = false;
 uranus.scale = 1.4;

 neptune = createSprite(1400,250,200,200);
 neptune.addImage(neptune_img);
 neptune.visible = false;

 pluto = createSprite(1400,250,200,200);
 pluto.addImage(pluto_img);
 pluto.visible = false;

 rocket = createSprite(100,250,50,50);
 rocket.addImage("1",rocket_img1);
 rocket.addImage("2",rocket_img2);
 rocket.addImage("3",rocket_img3);
 rocket.addImage("4",rocket_img4);
 rocket.addImage("5",rocket_img5);
 rocket.addImage("6",rocket_img6);
 rocket.addImage("7",rocket_img7);
 rocket.addImage("8",rocket_img8);
 rocket.addImage("9",rocket_img9);
 rocket.addImage("10",rocket_img10);
 rocket.addImage("11",rocket_img11);
 rocket.addImage("12",rocket_img12);
 //rocket.scale = 0.5;
 //rocket.setCollider("rectangle",20,0,300,100);
 //rocket.visible = false;
 //rocket_sound.loop();

 gameover = createSprite(600,250);
 gameover.addImage(gameover_img);
 gameover.visible = false;

 back = createSprite(600,200);
 back.addAnimation("name",back_img);
 back.scale = 1.5;
 back.visible = false;

 start = createSprite(600,350);
 start.addImage(start_img);
 start.visible = false;
 start.scale = 0.5;

 logo = createSprite(600,150);
 logo.addAnimation("logo",logo_img);
 logo.visible = true;
 logo.scale = 0.7;

 play = createSprite(600,350);
 play.addImage(play_img);
 play.visible = true;

        rocket1 = createSprite(100,100);
        rocket1.addImage(rocket_img1);
        rocket1.rotation = -90;
        rocket1.visible = false;

        rocket2 = createSprite(300,100);
        rocket2.addImage(rocket_img2);
        rocket2.rotation = -90;
        rocket2.visible = false;

        rocket3 = createSprite(500,100);
        rocket3.addImage(rocket_img3);
        rocket3.rotation = -90;
        rocket3.visible = false;

        rocket4 = createSprite(700,100);
        rocket4.addImage(rocket_img4);
        rocket4.rotation = -90;
        rocket4.visible = false;

        rocket5 = createSprite(900,100);
        rocket5.addImage(rocket_img5);
        rocket5.rotation = -90;
        rocket5.visible = false;

        rocket6 = createSprite(1100,100);
        rocket6.addImage(rocket_img6);
        rocket6.rotation = -90;
        rocket6.visible = false;

        rocket7 = createSprite(100,400);
        rocket7.addImage(rocket_img7);
        rocket7.rotation = -90;
        rocket7.visible = false;

        rocket8 = createSprite(300,400);
        rocket8.addImage(rocket_img8);
        rocket8.rotation = -90;
        rocket8.visible = false;

        rocket9 = createSprite(500,400);
        rocket9.addImage(rocket_img9);
        rocket9.rotation = -90;
        rocket9.visible = false;

        rocket10 = createSprite(700,400);
        rocket10.addImage(rocket_img10);
        rocket10.rotation = -90;
        rocket10.visible = false;

        rocket11 = createSprite(900,400);
        rocket11.addImage(rocket_img11);
        rocket11.rotation = -90;
        rocket11.visible = false;

        rocket12 = createSprite(1100,400);
        rocket12.addImage(rocket_img12);
        rocket12.rotation = -90;
        rocket12.visible = false;



 coinsGroup = new Group();
 meteoriteGroup = new Group();
 gameState = start;
 resetState = mercuryr;
 
}

function draw() {
    background("black");
    
    if(gameState === start){
        background("gray");
        textx = 1000;
        texty = 1000;
        rocket.visible = false;
        //space.visible = false;
        space.velocityX = 0;
        coinsGroup.destroyEach();
        coinsGroup.setVelocityXEach(0);
        coinsGroup.setLifetimeEach(-1);
        

        meteoriteGroup.destroyEach();
        meteoriteGroup.setVelocityXEach(0);
        meteoriteGroup.setLifetimeEach(-1);

        

        if(mousePressedOver(play)){
            gameState = chooseRocket;
            play.visible = false;
            logo.visible = false;

        }

        

    }
    if(gameState === mercuryState){
        planet = "Mercury";
    }

    if(gameState === venusState){
        planet = "Venus";
    }

    if(gameState === earthState){
        planet = "Earth";
    }

    if(gameState === marsState){
        planet = "Mars";
    }

    if(gameState === jupiterState){
        planet = "Jupiter";
    }

    if(gameState === saturnState){
        planet = "Saturn";
    }

    if(gameState === uranusState){
        planet = "Uranus";
    }

    if(gameState === neptuneState){
        planet = "Neptune";
    }

    if(gameState === plutoState){
        planet = "Pluto";
    }

    if(gameState === chooseRocket){
texty = 270;
        rocket1.visible = true;
        rocket2.visible = true;
        rocket3.visible = true;
        rocket4.visible = true;
        rocket5.visible = true;
        rocket6.visible = true;
        rocket7.visible = true;
        rocket8.visible = true;
        rocket9.visible = true;
        rocket10.visible = true;
        rocket11.visible = true;
        rocket12.visible = true;

        
        coinsGroup.destroyEach();
        coinsGroup.setVelocityXEach(0);
        coinsGroup.setLifetimeEach(-1);
        textSize(30);

        meteoriteGroup.destroyEach();
        meteoriteGroup.setVelocityXEach(0);
        meteoriteGroup.setLifetimeEach(-1);

        if(mousePressedOver(rocket1)){
            gameState = mercuryState;
            rocket1.visible = false;
            rocket2.visible = false;
            rocket3.visible = false;
            rocket4.visible = false;
            rocket5.visible = false;
            rocket6.visible = false;
            rocket7.visible = false;
            rocket8.visible = false;
            rocket9.visible = false;
            rocket10.visible = false;
            rocket11.visible = false;
            rocket12.visible = false;
            rocket.changeImage("1",rocket_img1);

        }

        if(mousePressedOver(rocket2)){
            gameState = mercuryState;
            rocket1.visible = false;
            rocket2.visible = false;
            rocket3.visible = false;
            rocket4.visible = false;
            rocket5.visible = false;
            rocket6.visible = false;
            rocket7.visible = false;
            rocket8.visible = false;
            rocket9.visible = false;
            rocket10.visible = false;
            rocket11.visible = false;
            rocket12.visible = false;
            rocket.changeImage("2",rocket_img2);
        }

        if(mousePressedOver(rocket3)){
            gameState = mercuryState;
            rocket1.visible = false;
            rocket2.visible = false;
            rocket3.visible = false;
            rocket4.visible = false;
            rocket5.visible = false;
            rocket6.visible = false;
            rocket7.visible = false;
            rocket8.visible = false;
            rocket9.visible = false;
            rocket10.visible = false;
            rocket11.visible = false;
            rocket12.visible = false;
            rocket.changeImage("3",rocket_img3);
        }

        if(mousePressedOver(rocket4)){
            gameState = mercuryState;
            rocket1.visible = false;
            rocket2.visible = false;
            rocket3.visible = false;
            rocket4.visible = false;
            rocket5.visible = false;
            rocket6.visible = false;
            rocket7.visible = false;
            rocket8.visible = false;
            rocket9.visible = false;
            rocket10.visible = false;
            rocket11.visible = false;
            rocket12.visible = false;
            rocket.changeImage("4",rocket_img4);
        }

        if(mousePressedOver(rocket5)){
            gameState = mercuryState;
            rocket1.visible = false;
            rocket2.visible = false;
            rocket3.visible = false;
            rocket4.visible = false;
            rocket5.visible = false;
            rocket6.visible = false;
            rocket7.visible = false;
            rocket8.visible = false;
            rocket9.visible = false;
            rocket10.visible = false;
            rocket11.visible = false;
            rocket12.visible = false;
            rocket.changeImage("5",rocket_img5);
        }

        if(mousePressedOver(rocket6)){
            gameState = mercuryState;
            rocket1.visible = false;
            rocket2.visible = false;
            rocket3.visible = false;
            rocket4.visible = false;
            rocket5.visible = false;
            rocket6.visible = false;
            rocket7.visible = false;
            rocket8.visible = false;
            rocket9.visible = false;
            rocket10.visible = false;
            rocket11.visible = false;
            rocket12.visible = false;
            rocket.changeImage("6",rocket_img6);
        }

        if(mousePressedOver(rocket7)){
            gameState = mercuryState;
            rocket1.visible = false;
            rocket2.visible = false;
            rocket3.visible = false;
            rocket4.visible = false;
            rocket5.visible = false;
            rocket6.visible = false;
            rocket7.visible = false;
            rocket8.visible = false;
            rocket9.visible = false;
            rocket10.visible = false;
            rocket11.visible = false;
            rocket12.visible = false;
            rocket.changeImage("7",rocket_img7);
        }

        if(mousePressedOver(rocket8)){
            gameState = mercuryState;
            rocket1.visible = false;
            rocket2.visible = false;
            rocket3.visible = false;
            rocket4.visible = false;
            rocket5.visible = false;
            rocket6.visible = false;
            rocket7.visible = false;
            rocket8.visible = false;
            rocket9.visible = false;
            rocket10.visible = false;
            rocket11.visible = false;
            rocket12.visible = false;
            rocket.changeImage("8",rocket_img8);
        }

        if(mousePressedOver(rocket9)){
            gameState = mercuryState;
            rocket1.visible = false;
            rocket2.visible = false;
            rocket3.visible = false;
            rocket4.visible = false;
            rocket5.visible = false;
            rocket6.visible = false;
            rocket7.visible = false;
            rocket8.visible = false;
            rocket9.visible = false;
            rocket10.visible = false;
            rocket11.visible = false;
            rocket12.visible = false;
            rocket.changeImage("9",rocket_img9);
        }

        if(mousePressedOver(rocket10)){
            gameState = mercuryState;
            rocket1.visible = false;
            rocket2.visible = false;
            rocket3.visible = false;
            rocket4.visible = false;
            rocket5.visible = false;
            rocket6.visible = false;
            rocket7.visible = false;
            rocket8.visible = false;
            rocket9.visible = false;
            rocket10.visible = false;
            rocket11.visible = false;
            rocket12.visible = false;
            rocket.changeImage("10",rocket_img10);
        }

        if(mousePressedOver(rocket11)){
            gameState = mercuryState;
            rocket1.visible = false;
            rocket2.visible = false;
            rocket3.visible = false;
            rocket4.visible = false;
            rocket5.visible = false;
            rocket6.visible = false;
            rocket7.visible = false;
            rocket8.visible = false;
            rocket9.visible = false;
            rocket10.visible = false;
            rocket11.visible = false;
            rocket12.visible = false;
            rocket.changeImage("11",rocket_img11);
        }

        if(mousePressedOver(rocket12)){
            gameState = mercuryState;
            rocket1.visible = false;
            rocket2.visible = false;
            rocket3.visible = false;
            rocket4.visible = false;
            rocket5.visible = false;
            rocket6.visible = false;
            rocket7.visible = false;
            rocket8.visible = false;
            rocket9.visible = false;
            rocket10.visible = false;
            rocket11.visible = false;
            rocket12.visible = false;
            rocket.changeImage("12",rocket_img12);
        }
    }

    if(gameState === mercuryState){
        texty = 1000;
        rocket1.visible = false;
            rocket2.visible = false;
            rocket3.visible = false;
            rocket4.visible = false;
            rocket5.visible = false;
            rocket6.visible = false;
            rocket7.visible = false;
            rocket8.visible = false;
            rocket9.visible = false;
            rocket10.visible = false;
            rocket11.visible = false;
            rocket12.visible = false;
        //logo.visible = false;
        //play.visible = false;
        space.velocityX = -(4+score/10);
        logo.destroy();
        play.destroy();
        space.visible = true;
        textx = 60;
        rocket.visible = true;
        var edges = createEdgeSprites();
        rocket.bounceOff(edges);
        if(coinsGroup.isTouching(rocket)){
            score++
            coinsGroup[0].destroy();
            coinseffect.play();
        }
        if(space.x<500){
            space.x = space.width/2;
        }
        if(keyDown(DOWN_ARROW)){
            rocket.y = rocket.y+5;
        }
        if(keyDown(UP_ARROW)){
            rocket.y = rocket.y-5;
        }
        
        
        
if(meteoriteGroup.isTouching(rocket)){
    //rocket.destroy();
    gameState = END;
    gameovereffect.play();
    
}   
if(score === 5){
    Mercury();    
}

 
    }


    if(gameState === END){
        textx = 1000;
        stroke("white");
        fill("white");
        textSize(50);
        text("Press T to respawn",400,480);
        //rocket.destroy();
        //background("black");
        rocket.visible = false;
        gameover.visible = true;
        space.visible = false;
play.visible = true;
logo.visible = true;
        score = 0;
        
        coinsGroup.destroyEach();
        coinsGroup.setVelocityXEach(0);
        coinsGroup.setLifetimeEach(-1);

        meteoriteGroup.destroyEach();
        meteoriteGroup.setVelocityXEach(0);
        meteoriteGroup.setLifetimeEach(-1);

        space.velocityX = 0;
        if(keyDown("t")){
           gameState = mercuryState;
           gameover.visible = false;
           rocket.visible = true;
           space.visible = true;
           space.velocityX = -(4+score/10);
           if(space.x<500){
            space.x = space.width/2;
        }
        score = 0;

        }


    }
    
    if(gameState === restart){
        textx = 1000;
        coinsGroup.destroyEach();
        coinsGroup.setVelocityXEach(0);
        coinsGroup.setLifetimeEach(-1);

        meteoriteGroup.destroyEach();
        meteoriteGroup.setVelocityXEach(0);
        meteoriteGroup.setLifetimeEach(-1);

        space.visible = false;
            console.log("return");
            rocket.visible = false;

            

            stroke("blue");
            fill("blue");
            textSize(30);
            textFont("ComicSansMS");
            text("Congratulations!You have reached "+planet+"!",300,250);

            stroke("blue");
            fill("blue");
            textSize(30);
            textFont("ComicSansMS");
            text("To go to the next stage press R",300,300);

            

            
            if(resetState === mercuryr){
                if(keyDown("r")){
                    console.log("test");
                   gameState = venusState;
                }
            }

            if(resetState === venusr){
                if(keyDown("r")){
                console.log("test");
                gameState = earthState;
                }
            }

            if(resetState === earthr){
                if(keyDown("r")){
                console.log("test");
                gameState = marsState;
                }
            }

            if(resetState === marsr){
                if(keyDown("r")){
                    console.log("test");
                   gameState = jupiterState;
                }
            }
            if(resetState === jupiterr){
                if(keyDown("r")){
                console.log("test");
                gameState = saturnState;
                }
            }
            if(resetState === saturnr){
                if(keyDown("r")){
                console.log("test");
                gameState = uranusState;
                }
            }
        if(resetState === uranusr){
                if(keyDown("r")){
                console.log("test");
                gameState = neptuneState;
                }
            }

        if(resetState === neptuner){
                if(keyDown("r")){
                console.log("test");
                gameState = plutoState;
                }
            }

        if(resetState === plutor){
                if(keyDown("r")){
                console.log("test");
                gameState = plutoState;
                }
            }


            
        
    }
    if(gameState === venusState){
        textx = 60;
        resetState = mercuryr;
        rocket.visible = true;
        space.visible = true;
        var edges = createEdgeSprites();
        rocket.bounceOff(edges);
        if(coinsGroup.isTouching(rocket)){
            score++
            coinsGroup[0].destroy();
            coinseffect.play();
        }
        if(space.x<500){
            space.x = space.width/2;
        }
        if(keyDown(DOWN_ARROW)){
            rocket.y = rocket.y+5;
        }
        if(keyDown(UP_ARROW)){
            rocket.y = rocket.y-5;
        }
        if(meteoriteGroup.isTouching(rocket)){
            rocket.destroy();
            gameState = END;
            gameovereffect.play();
        } 
        if(score === 8){
            Venus();
        }
    }

    if(gameState === earthState){
        textx = 60;
        resetState = mercuryr;
        rocket.visible = true;
        space.visible = true;
        var edges = createEdgeSprites();
        rocket.bounceOff(edges);
        if(coinsGroup.isTouching(rocket)){
            score++
            coinsGroup[0].destroy();
            coinseffect.play();
        }
        if(space.x<500){
            space.x = space.width/2;
        }
        if(keyDown(DOWN_ARROW)){
            rocket.y = rocket.y+5;
        }
        if(keyDown(UP_ARROW)){
            rocket.y = rocket.y-5;
        }
        if(meteoriteGroup.isTouching(rocket)){
            rocket.destroy();
            gameState = END;
            gameovereffect.play();
            
        } 
        if(score === 12){
            Earth();
        }
    }

    if(gameState === marsState){
        textx = 60;
        resetState = mercuryr;
        rocket.visible = true;
        space.visible = true;
        var edges = createEdgeSprites();
        rocket.bounceOff(edges);
        if(coinsGroup.isTouching(rocket)){
            score++
            coinsGroup[0].destroy();
            coinseffect.play();
        }
        if(space.x<500){
            space.x = space.width/2;
        }
        if(keyDown(DOWN_ARROW)){
            rocket.y = rocket.y+5;
        }
        if(keyDown(UP_ARROW)){
            rocket.y = rocket.y-5;
        }
        if(meteoriteGroup.isTouching(rocket)){
            rocket.destroy();
            gameState = END;
            gameovereffect.play();
            
        } 
        
        if(score === 18){
            Mars();
        }
    }

    if(gameState === jupiterState){
        textx = 60;
        resetState = mercuryr;
        rocket.visible = true;
        space.visible = true;
        var edges = createEdgeSprites();
        rocket.bounceOff(edges);
        if(coinsGroup.isTouching(rocket)){
            score++
            coinsGroup[0].destroy();
            coinseffect.play();
        }
        if(space.x<500){
            space.x = space.width/2;
        }
        if(keyDown(DOWN_ARROW)){
            rocket.y = rocket.y+5;
        }
        if(keyDown(UP_ARROW)){
            rocket.y = rocket.y-5;
        }
        if(meteoriteGroup.isTouching(rocket)){
            rocket.destroy();
            gameState = END;
            gameovereffect.play();
            
        } 
        if(score === 25){
            Jupiter();
        }
        
    }
    
    if(gameState === saturnState){
        textx = 60;
        resetState = mercuryr;
        rocket.visible = true;
        space.visible = true;
        var edges = createEdgeSprites();
        rocket.bounceOff(edges);
        if(coinsGroup.isTouching(rocket)){
            score++
            coinsGroup[0].destroy();
            coinseffect.play();
        }
        if(space.x<500){
            space.x = space.width/2;
        }
        if(keyDown(DOWN_ARROW)){
            rocket.y = rocket.y+5;
        }
        if(keyDown(UP_ARROW)){
            rocket.y = rocket.y-5;
        }
        if(meteoriteGroup.isTouching(rocket)){
            rocket.destroy();
            gameState = END;
            gameovereffect.play();
            
        } 
        
        if(score === 30){
            Saturn();
        }
    }

    if(gameState === uranusState){
        textx = 60;
        resetState = mercuryr;

        rocket.visible = true;
        space.visible = true;
        var edges = createEdgeSprites();
        rocket.bounceOff(edges);
        if(coinsGroup.isTouching(rocket)){
            score++
            coinsGroup[0].destroy();
            coinseffect.play();
        }
        if(space.x<500){
            space.x = space.width/2;
        }
        if(keyDown(DOWN_ARROW)){
            rocket.y = rocket.y+5;
        }
        if(keyDown(UP_ARROW)){
            rocket.y = rocket.y-5;
        }
        if(meteoriteGroup.isTouching(rocket)){
            rocket.destroy();
            gameState = END;
            gameovereffect.play();
            
        } 
        
        if(score === 35){
            Uranus();
        }
    }

    if(gameState === neptuneState){
        textx = 60;
        resetState = mercuryr;

        rocket.visible = true;
        space.visible = true;
        var edges = createEdgeSprites();
        rocket.bounceOff(edges);
        if(coinsGroup.isTouching(rocket)){
            score++
            coinsGroup[0].destroy();
            coinseffect.play();
        }
        if(space.x<500){
            space.x = space.width/2;
        }
        if(keyDown(DOWN_ARROW)){
            rocket.y = rocket.y+5;
        }
        if(keyDown(UP_ARROW)){
            rocket.y = rocket.y-5;
        }
        if(meteoriteGroup.isTouching(rocket)){
            rocket.destroy();
            gameState = END;
            gameovereffect.play();
            
        } 
        
        if(score === 40){
            Neptune();
        }
    }

    if(gameState === plutoState){
        textx = 60;
        resetState = mercuryr;

        rocket.visible = true;
        space.visible = true;
        var edges = createEdgeSprites();
        rocket.bounceOff(edges);
        if(coinsGroup.isTouching(rocket)){
            score++
            coinsGroup[0].destroy();
            coinseffect.play();
        }
        if(space.x<500){
            space.x = space.width/2;
        }
        if(keyDown(DOWN_ARROW)){
            rocket.y = rocket.y+5;
        }
        if(keyDown(UP_ARROW)){
            rocket.y = rocket.y-5;
        }
        if(meteoriteGroup.isTouching(rocket)){
            rocket.destroy();
            gameState = END;
            gameovereffect.play();
            
        } 
        
        if(score === 45){
            Pluto();
        }
    }

    
    if(resetState === earthr){

    }
    if(gameState === win){
        background("blue");
        winSound.play();
        congrats =  createSprite(600,250);
        congrats.addImage(congrats_img);
        textx = 1000;
        congrats.scale = 1.5;
        rocket.visible = false;
        space.visible = false;
       
        meteoriteGroup.destroyEach();
        meteoriteGroup.setVelocityXEach(0);
        meteoriteGroup.setLifetimeEach(-1);

        coinsGroup.destroyEach();
        coinsGroup.setVelocityXEach(0);
        coinsGroup.setLifetimeEach(-1);
        
        //meteoriteGroup.visible = false;

        if(keyDown("t")){
            gameState = mercuryState;
            gameover.visible = false;
            rocket.visible = true;
            space.visible = true;
            space.velocityX = -(4+score/10);
            if(space.x<500){
             space.x = space.width/2;
         }
         score = 0;
 
         }
      }   
    
   

    



 spawnMeteorites();
 spawnCoins();
 drawSprites();
 stroke("white");
 fill("white");
 textSize(35);
 textFont("ComicSansMS");
 text("Score : "+score,75,textx);
 textSize(40);
 text("Choose Your Rocket",470,texty);
 
 console.log(gameState);
}

function spawnMeteorites(){
    if(frameCount%100===0){
        var rand = Math.round(random(50,450));
        meteorite = createSprite(1200,rand,50,50);
        meteorite.addImage(meteorite_img);
        meteorite.velocityX = -(5+score/10);
        meteorite.lifetime = 240;
        meteorite.scale = 0.5
        meteorite.setCollider("rectangle",0,0,200,200)
        meteoriteGroup.add(meteorite);
    }
}

function spawnCoins(){
    if(frameCount%120===0){
        var rand = Math.round(random(50,450));
        coins = createSprite(1200,rand,50,50);
        coins.addImage(coins_img);
        coins.velocityX = -(5+score/10);
        coins.lifetime = 240;
        coins.scale = 0.1;
        coinsGroup.add(coins);

    }

}

function Mars(){
   background(0);

        
        mars.visible = true;
        mars.velocityX = -5;
        meteoriteGroup.destroyEach();
        meteoriteGroup.setVelocityXEach(0);
        meteoriteGroup.setLifetimeEach(-1);

        coinsGroup.destroyEach();
        coinsGroup.setVelocityXEach(0);
        coinsGroup.setLifetimeEach(-1);
        
        
        if(mars.isTouching(rocket)){
            gameState = restart;
            mars.destroy();
            resetState = marsr;
            checkpointSound.play();
            

        }
}
function Jupiter(){
    background(0);

        
        jupiter.visible = true;
        jupiter.velocityX = -5;
        meteoriteGroup.destroyEach();
        meteoriteGroup.setVelocityXEach(0);
        meteoriteGroup.setLifetimeEach(-1);

        coinsGroup.destroyEach();
        coinsGroup.setVelocityXEach(0);
        coinsGroup.setLifetimeEach(-1);
        
        
        if(jupiter.isTouching(rocket)){
            gameState = restart;
            jupiter.destroy();
            resetState = jupiterr;
            checkpointSound.play();
        }

}

function Saturn(){
    background(0);

        
        saturn.visible = true;
        saturn.velocityX = -5;
        meteoriteGroup.destroyEach();
        meteoriteGroup.setVelocityXEach(0);
        meteoriteGroup.setLifetimeEach(-1);

        coinsGroup.destroyEach();
        coinsGroup.setVelocityXEach(0);
        coinsGroup.setLifetimeEach(-1);
        
        
        if(saturn.isTouching(rocket)){
            gameState = restart;
            saturn.destroy();
            resetState = saturnr;
            checkpointSound.play();
        }

}

function Uranus(){
    background(0);

        
        uranus.visible = true;
        uranus.velocityX = -5;
        meteoriteGroup.destroyEach();
        meteoriteGroup.setVelocityXEach(0);
        meteoriteGroup.setLifetimeEach(-1);

        coinsGroup.destroyEach();
        coinsGroup.setVelocityXEach(0);
        coinsGroup.setLifetimeEach(-1);
        
        
        if(uranus.isTouching(rocket)){
            gameState = restart;
            uranus.destroy();
            resetState = uranusr;
            checkpointSound.play();
        }
}

function Neptune(){
    background(0);

        
        neptune.visible = true;
        neptune.velocityX = -5;
        meteoriteGroup.destroyEach();
        meteoriteGroup.setVelocityXEach(0);
        meteoriteGroup.setLifetimeEach(-1);

        coinsGroup.destroyEach();
        coinsGroup.setVelocityXEach(0);
        coinsGroup.setLifetimeEach(-1);
        
        
        if(neptune.isTouching(rocket)){
            gameState = restart;
            neptune.destroy();
            resetState = neptuner;
            checkpointSound.play();
        }
}

function Mercury(){
    background(0);
 
         
         mercury.visible = true;
         mercury.velocityX = -5;
         meteoriteGroup.destroyEach();
         meteoriteGroup.setVelocityXEach(0);
         meteoriteGroup.setLifetimeEach(-1);
 
         coinsGroup.destroyEach();
         coinsGroup.setVelocityXEach(0);
         coinsGroup.setLifetimeEach(-1);
         
         
         if(mercury.isTouching(rocket)){
             gameState = restart;
             mercury.destroy();
             resetState = mercuryr;
             checkpointSound.play();
             
 
         }
 }

 function Venus(){
    background(0);
 
         
         venus.visible = true;
         venus.velocityX = -5;
         meteoriteGroup.destroyEach();
         meteoriteGroup.setVelocityXEach(0);
         meteoriteGroup.setLifetimeEach(-1);
 
         coinsGroup.destroyEach();
         coinsGroup.setVelocityXEach(0);
         coinsGroup.setLifetimeEach(-1);
         
         
         if(venus.isTouching(rocket)){
             gameState = restart;
             venus.destroy();
             resetState = venusr;
             checkpointSound.play();
             
 
         }
 }

 function Earth(){
    background(0);
 
         
         earth.visible = true;
         earth.velocityX = -5;
         meteoriteGroup.destroyEach();
         meteoriteGroup.setVelocityXEach(0);
         meteoriteGroup.setLifetimeEach(-1);
 
         coinsGroup.destroyEach();
         coinsGroup.setVelocityXEach(0);
         coinsGroup.setLifetimeEach(-1);
         
         
         if(earth.isTouching(rocket)){
             gameState = restart;
             earth.destroy();
             resetState = earthr;
             checkpointSound.play();
             
 
         }
 }

 function Pluto(){
    background(0);
 
         
         pluto.visible = true;
         pluto.velocityX = -5;
         meteoriteGroup.destroyEach();
         meteoriteGroup.setVelocityXEach(0);
         meteoriteGroup.setLifetimeEach(-1);
 
         coinsGroup.destroyEach();
         coinsGroup.setVelocityXEach(0);
         coinsGroup.setLifetimeEach(-1);
         
                                                                                   
         if(pluto.isTouching(rocket)){
             pluto.destroy();
             gameState = win;             
 
         }
 }