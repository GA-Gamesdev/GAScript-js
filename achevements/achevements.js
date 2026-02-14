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
  
  grantAchevement(string, string3){
    // string is achievement name
    // string3 is the achievementID
    
    // Save to localStorage
    if(this.SAVETO === "LOCALSTORAGE"){
      localStorage.setItem(string3, "1");  // ← Correct localStorage syntax
    }
    
    // Show the toast
    this.showToast(string, string3);  // ← Call showToast with "this."
  },  // ← Need comma here
  
  showToast(title, description){  // ← This was nested inside grantAchevement - moved it out
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
