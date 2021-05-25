var person, ghost, dustbin, dustparticles, footpath;

function setup(){
    createCanvas(500,700);
    person = createSprite(250,550,50,50);

    for(var i = 50; i<700; i = i +400){
        footpath = createSprite(i,350,100,700);
    }
}


function draw(){
 background("black");

 dustBin();
 drawSprites();
}

function dustBin(){
    if(frameCount%50=== 0){
       
        var xvalue = Math.round(random(0,475));
        if(xvalue>400 || xvalue<75){
            dustbin = createSprite(xvalue,600,25,25);
            dustbin.velocityY = -2;
        dustbin.lifetime = 300;
        dustbin.shapeColor = "Green"; 
        }
        
    }
}



