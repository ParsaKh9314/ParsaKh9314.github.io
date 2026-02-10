function exploreAction() {
    // Finding the element by its ID
    const messageElement = document.getElementById('display-message');
    
    // This is like a Python variable assignment
    const status = "You clicked the button! Logic is working.";
    
    // Changing the text on the screen
    messageElement.innerHTML = status;

    // Optional: Log it in the browser console (Press F12 to see)
    console.log("Status updated!");
}
