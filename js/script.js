// Elements 
var loadingScreen = document.getElementById('loadingScreen');
var portfolioWrapper = document.getElementById('portfolioWrapper');
var iconsDiv = document.getElementById('icons');
var iconsEl = iconsDiv.querySelectorAll(".icon");

// Icons Interval Handle
var iconsHandle;

addIcons(4, 600);

// Add ghosts sequentially on loading screen
function addIcons(length, ms) {
  var icons = [
    'fas fa-gamepad',
    'fas fa-ghost',
    'fas fa-headset',
    'fas fa-dice-d6',
    'fas fa-dice-d20',
    'fas fa-gavel',
    'fas fa-hat-wizard',
    'fas fa-dragon',
    'fas fa-scroll'
  ];

  var rngIcon = icons[Math.floor(Math.random() * icons.length)];

  iconsHandle = setInterval(function() {
    if (iconsDiv.children.length === length) {
      iconsDiv.innerHTML = "";
    }
    createIcon(rngIcon);
  }, ms);
}

function createIcon(rngIcon) { 
  var icon = document.createElement('i');
  icon.setAttribute('class', 'icon ' + rngIcon);
  iconsDiv.appendChild(icon);
}