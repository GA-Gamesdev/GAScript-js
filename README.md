achevements.js v1.11
docs:

acheve.load(API_MODE)
starts the API system on "localStorage" or "memory" mode,

note : memory is still being worked on and is NO WHERE CLOSE TO FINSIHED

acheve.grant(ID,NAME,ICON)
grants an achievement for a user, this also causes a achievement toast to pop-up in the top right corner. this displays your achievement icon and name. when choosing an ID DO NOT MAKE IT YOUR ACHEVEMENT NAME, THIS IS A BIG NO NO. this is due to everything being through localStorage so users can edit and grant achievements at will.

note : in the load system there will be a system for turning off the achievement toast in the load script.

acheve.isUnlocked(ID)
checks if the achievement ID is unlocked, and returns a true or false value.

note : this doesn't work with MEMORY mode yet

acheve.remove(ID)
removes the achievement with the selected ID, that's all it does...

note: this doesn't work with MEMORY mode yet

acheve.addProgress(ID, NUMBER)
adds {NUMBER} progress to the achievement ID

acheve.checkProgress(ID)
checks the progress of the achievement ID

setup:
make sure that you have the script and CSS for the achievement toast.

2. type acheve.load() and select your API_MODE

3. its ready to grant achievements!

4(optional). to edit the CSS for the toast is:

 
.mn	the main bg color. (default is G.A Game's logo colors)
.img-contan-fun	image container, this is what changes the icon looks like
.text	main text for the toast

note : when editing this don't forget your !important in the CSS

good luck (;
