//input.js

function keyPressed(key,callback){
document.addEventListener("keydown",(e)=>{
if(e.key===key){callback()}
})
}

function keyReleased(key,callback){
document.addEventListener("keyup",(e)=>{
if(e.key===key){callback()}
})
}

function mousePressed(callback){
document.addEventListener("mousedown",(e)=>{
callback()
})
}

function mouseReleased(callback){
document.addEventListener("mouseup",(e)=>{
callback()
})
}

const mouse = {
  x: 0,
  y: 0,
  pos: { x: 0, y: 0 }
};

// Update mouse position automatically
document.addEventListener("mousemove", (e) => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
  mouse.pos.x = e.clientX;
  mouse.pos.y = e.clientY;
});
