const canvas=document.getElementById('canvas1');
var score=document.getElementById('score');
score.innerHTML=0;
const ctx=canvas.getContext('2d');
canvas.width=1000;
canvas.height=450;

const keys={};
const player={
    x:200,
    y:250,
    width:32,
    height:48,
    frameX:0,
    frameY:0,
    speed:5,
    moving:false
};

const dusman={
x:400,
y:250,
width:32,
height:48,
frameX:0,
frameY:0,
speed:3,
moving:false
};

const arrow={
x:205,
y:240,
width:40,
height:48,
frameX:0,
frameY:0,
speed:10
}

let ustsinir=140,altsinir=380,solsinir=20,sagsinir=948;
let zaman=0;
let dusmanzaman=0;
let durum=0;
let mesafe=0;

const archer=new Image();
archer.src="archer.png";
const alien=new Image();
alien.src="yoda.png";
const arrow1=new Image();
arrow1.src="arrow125.png";


function drawSp(img,sX,sY,sW,sH,dX,dY,dW,dH){
    ctx.drawImage(img,sX,sY,sW,sH,dX,dY,dW,dH);
}
function ekle()
{
a=1;
}

function animate(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    drawSp(archer,player.width * player.frameX,player.height * player.frameY,
    player.width,player.height,player.x,player.y,player.width,player.height);
    drawSp(arrow1,arrow.width * arrow.frameX,arrow.height * arrow.frameY,
    arrow.width,arrow.height,arrow.x,arrow.y,arrow.width,arrow.height);
    hareket();
    dusmanAnimation();
    drawSp(alien,dusman.width * dusman.frameX,dusman.height * dusman.frameY,
    dusman.width,dusman.height,dusman.x,dusman.y,dusman.width,dusman.height);
    controls();
    
    playerAnimation();
    requestAnimationFrame(animate);
}
animate();

function hareket(){
if(durum==0) //asagi
{
    mesafe=Math.floor(Math.random() * 100)+50;
    dusman.moving=true;
    dusman.frameY=durum;
    if(dusman.y>=altsinir)
    {
    dusman.moving=false;
    clearInterval(dusmanzaman);
	durum=Math.floor(Math.random() * 4);
    }
    dusmanzaman=setInterval(function(){
    if(dusman.y<altsinir)
    {
    dusman.y+=0.050;
    }
    },10)
}


else if(durum==1) //sol
{   
    mesafe=Math.floor(Math.random() * 100)+50;
    dusman.moving=true;
    dusman.frameY=durum;
    if(dusman.x<=solsinir)
    {
    dusman.moving=false;
    clearInterval(dusmanzaman);
	durum=Math.floor(Math.random() * 4);
    }
    dusmanzaman=setInterval(function(){
    if(dusman.x>solsinir)
    {
    dusman.x-=0.050;
    }
    },10)
}

else if(durum==2) //sag
{
    mesafe=Math.floor(Math.random() * 100)+50;
    dusman.moving=true;
    dusman.frameY=durum;
    if(dusman.x>=sagsinir)
    {
    dusman.moving=false;
    clearInterval(dusmanzaman);
	durum=Math.floor(Math.random() * 4);
    }
    dusmanzaman=setInterval(function(){
    if(dusman.x<sagsinir)
    {
    dusman.x+=0.050;
    }
    },10)
}

else if(durum==3) //yukari
{
    mesafe=Math.floor(Math.random() * 100)+50;
    dusman.moving=true;
    dusman.frameY=durum;
    if(dusman.y<=ustsinir)
    {
    dusman.moving=false;
    clearInterval(dusmanzaman);
	durum=Math.floor(Math.random() * 4);
    }
    dusmanzaman=setInterval(function(){
    if(dusman.y>ustsinir)
    {
    dusman.y-=0.050;
    }   
    },10)
}
else if(durum==4)
{
    durum=Math.floor(Math.random() * 5);
    dusman.y=mesafe=Math.floor(Math.random() * 100)+50;
    dusman.x=mesafe=Math.floor(Math.random() * 100)+50;
}
}



window.addEventListener("keydown",function(e){
 keys[e.keyCode]=true;
 player.moving=true;
 arrow.moving=true;
 
},false);
window.addEventListener("keyup",function(e){
 delete keys[e.keyCode];
 player.moving=false;
 arrow.moving=false;
 
},false);


window.addEventListener('keydown',function(e)
{
    if(32 in keys)
    {
            clearInterval(zaman);
            if(player.frameY==2){//karakter sag tarafa bakıyorsa
                    arrow.x=player.x;
                    arrow.y=player.y;
                    if(arrow.x<sagsinir)
                    {
                    zaman=setInterval(function(){
                    arrow.x+=arrow.speed;
                    arrow.frameY=2;//ok yonu sag taraf
                    player.moving=false;
                    },10)
                    }
                    else
                    {
                        arrow.x=player.x; 
                        arrow.y=player.y;
                    }
                }

                
                if(player.frameY==0){//karakter asagi tarafa bakıyorsa
                    arrow.x=player.x;
                    arrow.y=player.y;
                    if(arrow.y<altsinir)
                    {
                    zaman=setInterval(function(){
                    arrow.y+=arrow.speed;
                    arrow.frameY=0;//ok yonu asagi taraf
                    player.moving=false;
                    },10)
                    }
                    else
                    {
                        arrow.x=player.x; 
                        arrow.y=player.y;
                    }
                    }
    
                if(player.frameY==1){//karakter sol tarafa bakıyorsa
                    arrow.x=player.x;
                    arrow.y=player.y;
                    if(arrow.x>solsinir)
                    {
                        zaman=setInterval(function(){
                        arrow.x-=arrow.speed;
                        arrow.frameY=1;//ok yonu sol taraf
                        player.moving=false;
                        },10) 
                    }
                    else
                    {   
                        arrow.x=player.x;
                        arrow.y=player.y;
                    } 
                    }

                if(player.frameY==3){//karakter yukari tarafa bakıyorsa
                    arrow.x=player.x;
                    arrow.y=player.y;
                    if(arrow.y>ustsinir)
                    {
                    zaman=setInterval(function(){
                        arrow.y-=arrow.speed;
                        arrow.frameY=3;//ok yonu yukari taraf
                        player.moving=false;
                    },10)
                    }   
                    else
                    {
                        arrow.y=player.y;
                        arrow.x=player.x;
                    }
                    }

            }
    })

function controls(){
    if(38 in keys && player.y>ustsinir){
        player.y -=player.speed;
        player.frameY=3;
	    player.moving=true;
        }
    if (40 in keys && player.y<altsinir){
	    player.y +=player.speed;
        player.frameY=0;
        player.moving=true;
	}
     if (37 in keys && player.x>solsinir){
	    player.x -=player.speed;
        player.frameY=1;
        player.moving=true;
	}
      if(39 in keys && player.x<sagsinir){
	    player.x +=player.speed;
        player.frameY=2;
        player.moving=true;
	}
    if(arrow.x < dusman.x+10 && arrow.x > dusman.x-10 && arrow.y > dusman.y-15 && arrow.y < dusman.y+30){
    score.innerHTML++;
	arrow.x=0; 
	arrow.y=-50;
	clearInterval(zaman);
    clearInterval(dusmanzaman);
}
    if(dusman.x+5<=player.x+10 && dusman.x+5>=player.x && dusman.y+5>=player.y && dusman.y+25<=player.y+30)
    {
    alert('OYUNU KAYBETTİNİZ!!');
    }
}
function playerAnimation(){
if(player.frameX<3 && player.moving) player.frameX++;
else player.frameX=0;
}
function dusmanAnimation(){
if(dusman.frameX<3 && dusman.moving) dusman.frameX++;
else dusman.frameX=0;
}