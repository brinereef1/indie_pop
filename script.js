const audioContainers = document.querySelectorAll('.audio-container');
const audioPlayers = document.querySelectorAll('.audioPlayer');

function playAudio(index) {
  const playIcon = audioContainers[index].querySelector('.playIcon');
  const pauseIcon = audioContainers[index].querySelector('.pauseIcon');
  const audioPlayer = audioPlayers[index];

  audioPlayer.play();
  playIcon.style.display = 'none';
  pauseIcon.style.display = 'inline';

  audioPlayer.addEventListener('ended', function () {
    playIcon.style.display = 'inline';
    pauseIcon.style.display = 'none';
    if (index < audioContainers.length - 1) {
      playAudio(index + 1);
    }
  });
}

audioContainers.forEach((container, index) => {
  const playIcon = container.querySelector('.playIcon');
  const pauseIcon = container.querySelector('.pauseIcon');
  const audioPlayer = audioPlayers[index];

  playIcon.addEventListener('click', function () {
    if (audioPlayer.paused) {
      audioPlayers.forEach((player, playerIndex) => {
        if (playerIndex !== index && !player.paused) {
          player.pause();
          audioContainers[playerIndex].querySelector('.playIcon').style.display = 'inline';
          audioContainers[playerIndex].querySelector('.pauseIcon').style.display = 'none';
        }
      });

      playAudio(index);
    }
  });

  pauseIcon.addEventListener('click', function () {
    if (!audioPlayer.paused) {
      audioPlayer.pause();
      playIcon.style.display = 'inline';
      pauseIcon.style.display = 'none';
    }
  });
});