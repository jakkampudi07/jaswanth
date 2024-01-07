document.addEventListener('DOMContentLoaded', function() {
  const container = document.getElementById('container');
  const audio = document.getElementById('birthdayAudio');

  container.addEventListener('mouseenter', function() {
    audio.play();
  });
});

