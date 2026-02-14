const acheve = {
SAVETO : null,
  load(string2){
    if(string2==="memory"){
       SAVETO = "MEMORY"
        console.warn("achevements.js will not save achevement's on memory mode")
      console.log("achevement.js set to MEMORY")
    }
        if(string2==="localStorage"){
       SAVETO = "LOCALSTORAGE"
          console.log("achevement.js set to LOCALSTORAGE")
    }
  console.log("achevements.js loaded")
  }

  grantAchevement(string,string3){
//string is achevement name
  //string3 is the achevementID
  //soon there will be icon for html achevement stuff(when that happens...)
    localStorage(string,1)

  showToast(title, description){
    // Create toast element
    const toast = document.createElement('div');
    toast.className = 'achievement-toast';
    toast.innerHTML = `
      <div class="achievement-icon">🏆</div>
      <div class="achievement-content">
        <div class="achievement-title">${title}</div>
        <div class="achievement-desc">${description}</div>
      </div>
    `;
    
    // Add to page
    document.body.appendChild(toast);
    
    // Animate in
    setTimeout(() => toast.classList.add('show'), 100);
    
    // Remove after 4 seconds
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 300);
    }, 4000);
  }
  }
  
}
