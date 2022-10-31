function slideDown() {
  var elem = document.getElementById('demo');

  elem.style.maxHeight = '200px';
}

function slideUp() {
  var elem = document.getElementById('demo');

  elem.style.maxHeight = '0px';
}

var btn = document.getElementById('fcc-btn-sweetwater3');

btn.addEventListener('click', function () {
  alert('An internal voice tells you this is the wrong decision');
});
