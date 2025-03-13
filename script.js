let menuIcon = document.querySelector('#menu-icon');
let mobileMenu = document.querySelector('#mobile-menu');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  mobileMenu.classList.toggle('hidden');
};


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
        /*window.goToTop = function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        };
    }
*/

function goToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}
