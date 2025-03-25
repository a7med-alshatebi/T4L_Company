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
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    toTopButton.classList.remove('hidden');
  } else {
    toTopButton.classList.add('hidden');
  }
};

function goToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

////////////////////////////////////////////////////////////////////////////////////////////



// Weather API configuration
const weatherAPIKey = 'YOUR_OPENWEATHERMAP_API_KEY'; // Replace with your API key
const weatherUnits = 'metric'; // or 'imperial' for Fahrenheit

async function fetchWeather(latitude, longitude) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=${weatherUnits}&appid=${weatherAPIKey}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching weather:', error);
    return null;
  }
}

function updateWeatherUI(weatherData) {
  if (!weatherData) {
    document.getElementById('location').textContent = 'Weather data unavailable';
    return;
  }

  // Update location
  document.getElementById('location').textContent = `${weatherData.name}, ${weatherData.sys.country}`;
  
  // Update date
  const now = new Date();
  document.getElementById('date').textContent = now.toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
  
  // Update temperature and weather
  document.getElementById('temperature').textContent = `${Math.round(weatherData.main.temp)}°`;
  document.getElementById('weather-description').textContent = weatherData.weather[0].description;
  document.getElementById('humidity').textContent = weatherData.main.humidity;
  document.getElementById('wind').textContent = Math.round(weatherData.wind.speed * 3.6); // Convert m/s to km/h
  document.getElementById('feels-like').textContent = `${Math.round(weatherData.main.feels_like)}°`;
  document.getElementById('temp-min').textContent = `${Math.round(weatherData.main.temp_min)}°`;
  document.getElementById('temp-max').textContent = `${Math.round(weatherData.main.temp_max)}°`;
  
  // Update weather icon
  const iconCode = weatherData.weather[0].icon;
  document.getElementById('weather-icon').innerHTML = 
    `<img src="https://openweathermap.org/img/wn/${iconCode}@2x.png" alt="${weatherData.weather[0].description}" class="w-16 h-16">`;
}

function getLocationAndWeather() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        const weatherData = await fetchWeather(latitude, longitude);
        updateWeatherUI(weatherData);
      },
      (error) => {
        console.error('Geolocation error:', error);
        // Fallback to a default location if geolocation is denied
        fetchWeather(40.7128, -74.0060).then(updateWeatherUI); // Default to New York
      }
    );
  } else {
    console.log('Geolocation is not supported by this browser.');
    // Fallback to a default location
    fetchWeather(40.7128, -74.0060).then(updateWeatherUI); // Default to New York
  }
}

// Initialize weather when page loads
document.addEventListener('DOMContentLoaded', getLocationAndWeather);
