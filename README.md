### achevements

acheve.load() is what you start with,

for achevements you dont want to store use acheve.load("memory")

for achevements you want to store use acheve.load("localStorage")

this command CANNOT BE RUN TWICE!!!!

to grant the player an achevement use acheve.grantAchevement(ACHEVEID,ACHEVETITLE)

to revoke an achevement use removeAchevement(ACHEVEID)

to check if you have an achevement or not use if(acheve.isUnlocked(ACHEVEID))

in the future, there will be an achevement hub website, for all achevements granted by achevements.js
but right now you need to build your own achevement manager

### html

this is a long one so... enjoy?

when you need to get an element from the html, use const NAME = html.element(ELEMENT_ID)

when you need to detect a click for buttons, use isClicked(obj,code)
note : the obj is the element you grabed with const NAME = html.element(ELEMENT_ID)

to edit text content from the html, use setText(obj,text)

to edit image content, use setImg(obj,image_path)

to edit video/audio content, use setVideo/audio(obj,pathtocontent) respectivly

to edit urls, use setURL(obj,URL)

to add elements to the html document, use addElement(type,text,parent)
the text element is not required, but you do have to just put blank parentasis

to remove elements from the html, use removeElement(obj)

I made this documenataion and code late at night so I can't garentiy everything is correct and works...
if there are any issues go to the issues tab and report it, its going to make development 10X quicker.
even though messing with html through js is easier using this library, you still need to know html/css to use it...
### input

when you need to detect key input, use keyPressed(key,code)

to check when a key is released, use keyReleased(key,code)

to check if a mouse button is pressed down, use mousePressed(code)
note: this checks for all mouse buttons, same with the release function

to check if a mouse button has been released, use mouseReleased(code)

to check the mouse pos, use mouse.pos
note: this counts as a variable as well as the other mouse functions

to check the mouse x pos, use mouse.x

to check the mouse y pos, use mouse.y

