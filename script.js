/*let menuIcon = document.querySelector('#menu-icon');
let mobileMenu = document.querySelector('#mobile-menu');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  mobileMenu.classList.toggle('hidden');
};



//scroll to top button//

 var toTopButton = document.getElementById("to-top-button");

    // Check if the button exists
    if (toTopButton) {

        // On scroll event, toggle button visibility based on scroll position
        window.onscroll = function() {
            if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
                toTopButton.classList.remove("hidden");
            } else {
                toTopButton.classList.add("hidden");
            }
        };

        // Function to scroll to the top of the page smoothly
        window.goToTop = function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        };
    }

/*
function goToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}
*/



// Check for saved 'darkMode' in localStorage
const darkMode = localStorage.getItem('darkMode');

// If the user previously enabled dark mode, enable it
if (darkMode === 'enabled') {
  document.documentElement.classList.add('dark');
  localStorage.setItem('darkMode', 'enabled');
} else if (darkMode === null) {
  // Optional: Set default to light mode if no preference exists
  localStorage.setItem('darkMode', 'disabled');
}

// Toggle dark mode function
function toggleDarkMode() {
  const isDark = document.documentElement.classList.toggle('dark');
  if (isDark) {
    localStorage.setItem('darkMode', 'enabled');
  } else {
    localStorage.setItem('darkMode', 'disabled');
  }
}

// Set up the dark mode toggle button
const darkModeToggle = document.querySelector('[onclick*="classList.toggle"]');
if (darkModeToggle) {
  darkModeToggle.onclick = toggleDarkMode;
}

// Mobile menu toggle
const menuButton = document.getElementById('menu-icon');
const mobileMenu = document.getElementById('mobile-menu');

if (menuButton && mobileMenu) {
  menuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });
}

// Back to top button
const toTopButton = document.getElementById('to-top-button');

window.onscroll = function() {
  if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
    toTopButton.classList.remove('hidden');
  } else {
    toTopButton.classList.add('hidden');
  }
};

function goToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
