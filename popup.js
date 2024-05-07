document.addEventListener('DOMContentLoaded', function() {
  var playButton = document.getElementById('playButton');
  playButton.addEventListener('click', function() {
    var audio = new Audio('sound.mp3');
    audio.play();
  });
});
