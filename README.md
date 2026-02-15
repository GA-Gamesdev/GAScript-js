### achevements

acheve.load() is what you start with,

for achevements you dont want to store use acheve.load("memory")

for achevements you want to store use acheve.load("localStorage")

to grant the player an achevement use acheve.grantAchevement(ACHEVEID,ACHEVETITLE)

to revoke an achevement use removeAchevement(ACHEVEID)

to check if you have an achevement or not use if(acheve.isUnlocked(ACHEVEID))

in the future, there will be an achevement hub website, for all achevements granted by achevements.js
but right now you need to build your own achevement manager

