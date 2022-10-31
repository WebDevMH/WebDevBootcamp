// This is for the hats //
function turnOn() {
  document.getElementById('myImage').src = 'blackhat.png';
}
function turnOff() {
  document.getElementById('myImage').src = 'whitehat.png';
}
const bulbImage = document.getElementById('myImage');

// This is for the put out the fire on camp page //

function myFunc() {
  document.getElementById('image').src = 'images/star.png';
  document.getElementById('btn').addEventListener('click', function () {
    document.getElementById('demo').innerHTML = 'You made the correct choice<br><br>';
  });
}
function changeColor(element) {
  var currentColor = element.style.backgroundColor;
  if (currentColor == 'rgb(0, 64, 84)') {
    element.style.backgroundColor = 'black';
  } else {
    element.style.backgroundColor = 'rgb(0, 64, 84)';
  }
}
