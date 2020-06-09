// Elements 
var loadingScreen = document.getElementById('loadingScreen');
var portfolioWrapper = document.getElementById('portfolioWrapper');
var iconsDiv = document.getElementById('icons');

// miliseconds delay
var miliseconds = 1500;

addIcons(4, miliseconds);

// Add ghosts sequentially on loading screen
function addIcons(length, ms) {
  var icons = [
    'fas fa-gamepad',
    'fas fa-ghost',
    'fas fa-headset',
    'fas fa-dice-d6',
    'fas fa-dice-d20',
    'far fa-heart',
    'fas fa-gavel',
    'fas fa-hat-wizard',
    'fas fa-dragon',
    'fas fa-scroll'
  ];

  var rngIcon = icons[Math.floor(Math.random() * icons.length)];

  for (var i = 0; i < length; i++) {
    var delay = i * (ms / length);

    setTimeout(function() {
      var icon = document.createElement('i');
      icon.setAttribute('class', 'icon ' + rngIcon);
      iconsDiv.appendChild(icon);
    }, delay);
  }
}

// Remove loading screen after 2 seconds
setTimeout(() => {
  loadingScreen.classList.add('hidden');
  portfolioWrapper.classList.remove('hidden');
}, miliseconds);