// Get necessary elements
const designSystemLabel = document.querySelector('.design-system-label'); // The Design System button
const designSystemPopup = document.getElementById('designSystemPopup'); // The popup panel
const body = document.body; // The body for screen shake effect
const interactiveText = document.getElementById('interactive-text'); // The centered text

// Function to show the popup
function showPopup() {
  designSystemPopup.style.right = '0px'; // Slide the popup into view
}

// Function to hide the popup
function hidePopup() {
  designSystemPopup.style.right = '-50%'; // Slide the popup out of view
}

// Handle Design System label click to show the popup
designSystemLabel.addEventListener('click', (event) => {
  event.stopPropagation(); // Prevent triggering document click event
  showPopup(); // Show the popup
});

// Handle click outside of the popup to hide it
document.addEventListener('click', (event) => {
  // Close the popup if clicked outside of it or outside the Design System label
  if (!designSystemPopup.contains(event.target) && !designSystemLabel.contains(event.target)) {
    hidePopup(); // Hide the popup
  }
});

// Handle centered text click for screen shake and lightning effect
interactiveText.addEventListener('click', () => {
  // Screen shake effect
  body.style.transform = 'rotate(1deg)';
  setTimeout(() => {
    body.style.transform = 'rotate(-1deg)';
  }, 100);
  setTimeout(() => {
    body.style.transform = 'rotate(0deg)';
  }, 200);

  // Lightning effect
  const lightning = document.createElement('img'); // Create a new image element
  lightning.src = 'https://gd-hbimg.huaban.com/fb67a3c627a22bd47e60f031929052b94af1c908411c-4JyFnq_fw1200'; // Lightning image source
  lightning.style.position = 'absolute';
  lightning.style.top = '0';
  lightning.style.left = '0';
  lightning.style.width = '100%';
  lightning.style.height = '100%';
  lightning.style.zIndex = '100';
  lightning.style.pointerEvents = 'none'; // Prevent interaction with the lightning
  body.appendChild(lightning); // Add lightning to the body

  // Remove the lightning effect after a short delay
  setTimeout(() => {
    body.removeChild(lightning);
  }, 500); // Lightning visible for 500ms
});
