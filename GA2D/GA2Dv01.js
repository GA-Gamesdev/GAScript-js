//GA2Dv2.js

let ctx

function GA2Dinit(width,height){
 G2D = document.createElement("canvas")

document.body.appendChild(G2D)
G2D.width=width
G2D.height=height
ctx = G2D.getContext("2d");
return G2D

}
//draw functions
function drawRect(w,h,x,y,col){
ctx.fillStyle = col;
ctx.fillRect(x, y, w, h);
}

function drawText(text,x,y,font,col){
ctx.fillStyle = col;
ctx.font = font
ctx.fillText(text,x,y)
}


function draw(callback){
function frame(){
ctx.clearRect(0, 0, G2D.width, G2D.height);


callback();


requestAnimationFrame(frame);
}
frame()
}


