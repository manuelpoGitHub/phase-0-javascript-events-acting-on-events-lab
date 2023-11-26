// Defining the dodger element
const dodger = document.getElementById('dodger');

// Function to move the dodger to the left
function moveDodgerLeft() {
  // Get the current left position of the dodger
  const currentLeft = parseInt(dodger.style.left) || 0; // Use 0 if no value is set
  
  // Calculate the new left position after moving left
  const newLeft = currentLeft - 10; // You can adjust the value as needed
  
  // Ensure that the dodger doesn't go beyond the left edge of the game area
  if (newLeft >= 0) {
    dodger.style.left = `${newLeft}px`;
  }
}

// Attach an event listener to call moveDodgerLeft when the left Arrow key is pressed
document.addEventListener('keydown', function(event) {
  if (event.key === 'ArrowLeft') {
    moveDodgerLeft();
  }
});

// Function to move the dodger to the right
function moveDodgerRight() {
    // Get the current left position of the dodger
    const currentLeft = parseInt(dodger.style.left);
    
    // Calculate the new left position after moving right
    const newLeft = currentLeft + 10; // You can adjust the value as needed
    
    // Ensure that the dodger doesn't go beyond the right edge of the game area
    // Replace '400' with your game's width
    if (newLeft <= 400 - 40) { // 40 is the dodger's width
      dodger.style.left = `${newLeft}px`;
    }
  }