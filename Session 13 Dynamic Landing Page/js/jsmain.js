// DOM Elelemts
const time = document.getElementById('time'),
  greeting = document.getElementById('greeting');
personalname = document.getElementById('personalname');
focus = document.getElementById('focus');

// Show Time
function showTime() {
  let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

  // Set Am or PM
  const amPM = hour >= 12 ? 'PM' : 'AM';

  // 12h Format
  hour = hour % 12 || 12;

  // Output Time
  time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;

  setTimeout(showTime, 1000);
}

// Add Zero
function addZero(n) {
  return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

// Set Background and Greeting
function setBgGreet() {
  let today = new Date(),
    hour = today.getHours();

  if (hour < 12) {
    // Morning
    document.body.style.backgroundImage = "url('https://i.ibb.co/XknVLwS/morning.jpg')";
    greeting.textContent - 'Good Morning';
  } else if (hour < 18) {
    // Afternoon
    document.body.style.backgroundImage = "url('https://i.ibb.co/fFcvqwh/afternoon.jpg')";
    greeting.textContent - 'Good Afternoon';
  } else {
    // Evening
    document.body.style.backgroundImage = "url('https://i.ibb.co/RPmStR6/night.jpg')";
    greeting.textContent - 'Good Evening';
    document.body.style.color = 'white';
  }
}

// Get Focus
function getFocus() {
  if (localStorage.getItem('focus') === null) {
    focus.textContent = '[Enter Focus]';
  } else {
    focus.textContent = localStorage.getItem('focus');
  }
}

// Run
showTime();
setBgGreet();
getFocus();
