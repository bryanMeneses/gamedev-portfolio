var hamburger = document.querySelector('.hamburger-box');
var linksDiv = document.querySelector('.nav-links-mobile');
var links = linksDiv.querySelectorAll('.link-item h2');

var state = {
  isActive: false
}

hamburger.addEventListener('click', function() { 

  state.isActive = !state.isActive;

  links.forEach(function(link, index) {
    if (!state.isActive) {
      // Fade out animation
      link.style.animation = 'navLinkFadeOut 0.1s ease forwards 0s';
    } else {
      // if not active, fade in animation
      link.style.animation = 'navLinkFadeIn 0.4s ease forwards ' + (index / 7 + 0.2 ) + 's';
    }
   });

  linksDiv.classList.toggle('nav-active');
  hamburger.classList.toggle('active');
});

window.addEventListener("load", function() {
  clearInterval(iconsHandle);
  loadingScreen.classList.add("hidden");
  document.getElementById('portfolioWrapper').classList.remove("hidden");
  loadingScreen.remove();
});