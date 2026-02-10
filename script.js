function exploreAction() {
    // This is like a 'print' and 'if' in Python
    const currentTime = new Date().toLocaleTimeString();
    
    alert("Styles and Scripts are now separated!\n" + 
          "Current time: " + currentTime + "\n" +
          "The button is now larger and lighter on hover.");
          
    console.log("Button was clicked at " + currentTime);
}
