const html = {

element: function(ELEMENTID){
return document.getElementById(ELEMENTID)
}}

function isClicked(object,callback) {

object.addEventListener("click", callback );
}

function setText(obj,txt) {

obj.textContent = txt

};

function setImg(obj,img){
obj.src = img
}

function setAudio(obj,audio){
obj.src= audio
obj.load()
}

function setVideo(obj,video){
obj.src= video
obj.load()
}

function setLink(obj,url){
obj.href= url
}

function addElement(type,txt,parent){

const cool = document.createElement(type)
cool.textContext = txt
parent.appendChild(cool)
return cool

}

function deleteElement(obj){
obj.remove()
}
