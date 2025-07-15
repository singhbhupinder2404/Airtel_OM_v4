// Get references to the HTML elements
const mouseoverButton = document.getElementById('mouseoverButton');
const mouseoutButton = document.getElementById('mouseoutButton');
const clickButton = document.getElementById('clickButton');
const dblclickButton = document.getElementById('dblclickButton');
const focusInput = document.getElementById('focusInput');
const blurInput = document.getElementById('blurInput');

// --- Event Listeners ---

// OnMouseover Event
// When the mouse pointer moves over the button, change its background color to blue.
mouseoverButton.addEventListener('mouseover', function() {
    this.style.backgroundColor = 'blue';
    this.style.color = 'white'; // Make text white for better contrast
});

// OnMouseout Event
// When the mouse pointer moves out of the button, change its background color back to red.
mouseoutButton.addEventListener('mouseout', function() {
    this.style.backgroundColor = 'red';
    this.style.color = 'white'; // Make text white for better contrast
});

// Onclick Event
// When the button is clicked, change its background color to green.
clickButton.addEventListener('click', function() {
    this.style.backgroundColor = 'green';
    this.style.color = 'white'; // Make text white for better contrast
});

// Ondblclick Event
// When the button is double-clicked, change its background color to purple.
dblclickButton.addEventListener('dblclick', function() {
    this.style.backgroundColor = 'purple';
    this.style.color = 'white'; // Make text white for better contrast
});

// Onfocus Event
// When the input field gains focus (is clicked or tabbed into), change its background color to light yellow.
focusInput.addEventListener('focus', function() {
    this.style.backgroundColor = 'lightyellow';
});

// Onblur Event
// When the input field loses focus (clicks outside or tabs away),
// change its background color back to white and convert its text to uppercase.
blurInput.addEventListener('blur', function() {
    this.style.backgroundColor = 'white';
    this.value = this.value.toUpperCase(); // Convert text to uppercase
});
