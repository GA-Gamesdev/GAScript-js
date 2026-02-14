function acheve.load("MEMORY"){
  function load(string2){
    if(string2==="memory"){
      let SAVETO = MEMORY
        console.warn("achevements.js will not save achevement's on memory mode")
      console.log("achevement.js set to MEMORY")
    }
        if(string2==="localStorage"){
      let SAVETO = LOCALSTORAGE
          console.log("achevement.js set to LOCALSTORAGE")
    }
  console.log("achevements.js loaded")
  }
  
}
