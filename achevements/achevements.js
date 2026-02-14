const acheve = {
SAVETO : null
  load(string2){
    if(string2==="memory"){
       SAVETO = MEMORY
        console.warn("achevements.js will not save achevement's on memory mode")
      console.log("achevement.js set to MEMORY")
    }
        if(string2==="localStorage"){
       SAVETO = LOCALSTORAGE
          console.log("achevement.js set to LOCALSTORAGE")
    }
  console.log("achevements.js loaded")
  }
  
}
