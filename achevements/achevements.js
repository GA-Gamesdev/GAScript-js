

const acheve = {
  SAVETO: null,
  
  load(string2){
    console.log("achevements.js loaded")
    if(string2 === "memory"){
      this.SAVETO = "MEMORY"  // ← Need "this."
      console.warn("achevements.js will not save achevement's on memory mode")
      console.log("achevement.js set to MEMORY")
    }
    if(string2 === "localStorage"){
      this.SAVETO = "LOCALSTORAGE"  // ← Need "this."
      console.log("achevement.js set to LOCALSTORAGE")
    }

  },  // ← Need comma here
  
  grant(string,achevename,image){
    // string is achievement name
    // string3 is the achievementID
    if(this.SAVETO === "MEMORY"){
      sessionStorage.setItem(string, "1");  // ← Correct localStorage syntax
    }else{  
      localStorage.setItem(string, "1");}
    console.log("achevement "+achevename+" has been granted to player")
    _loadtoast(image,achevename)
  },
  //SHIT
  remove(string){
       if(this.SAVETO === "MEMORY"){
console.error("this function is not availiable for MEMORY settings")
       }else{
         localStorage.removeItem(string)
       console.log("achevement ID: "+string+"has been revoked")
       }
  },

//big shit
  isUnlocked(string){
let CHECKVALUE = localStorage.getItem(string)
    if(CHECKVALUE==="1"){
     return true
    }else{
     return false
    }
    
  },
  
  addProgress(acheveID,num){
    let data = localStorage.getItem(acheveID+"Progress")
    localStorage.setItem(acheveID+"progress",data+num)
  },

  checkProgress(acheveID){
let data = Number(localStorage.getItem(acheveID+"progress"))
return data
  }
}

//internal shit...

function _loadtoast(image,nme){
  const toast = document.createElement("div")
  toast.className = "mn"
  toast.innerHTML= `

    <div class="img-contan-fun">
        <img src=${image} class="image">
    </div>
<p class="text">${nme}</p>


`
document.body.appendChild(toast)

requestAnimationFrame(()=>requestAnimationFrame(()=>toast.classList.add("show")))

setTimeout(()=>{toast.classList.remove("show")
toast.addEventListener("transitionend", ()=> toast.remove(), {once:true})
},3000)
}
