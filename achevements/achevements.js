const acheve = {
  SAVETO: null,
  
  load(string2){
    if(string2 === "memory"){
      this.SAVETO = "MEMORY"  // ← Need "this."
      console.warn("achevements.js will not save achevement's on memory mode")
      console.log("achevement.js set to MEMORY")
    }
    if(string2 === "localStorage"){
      this.SAVETO = "LOCALSTORAGE"  // ← Need "this."
      console.log("achevement.js set to LOCALSTORAGE")
    }
    console.log("achevements.js loaded")
  },  // ← Need comma here
  
  grantAchevement(string,achevename){
    // string is achievement name
    // string3 is the achievementID
    if(this.SAVETO === "MEMORY"){
      sessionStorage.setItem(string, "1");  // ← Correct localStorage syntax
    }else{  
      localStorage.setItem(string, "1");}
    console.log("achevement "+achevename+" has been granted to player")
  }
}
