const audioContainers = document.querySelectorAll('.audio-container');
const audioPlayers = document.querySelectorAll('.audioPlayer');

audioContainers.forEach((container, index) => {
  const playIcon = container.querySelector('.playIcon');
  const pauseIcon = container.querySelector('.pauseIcon');
  const audioPlayer = audioPlayers[index];

  playIcon.addEventListener('click', function () {

    audioPlayers.forEach((player, playerIndex) => {
      if (playerIndex !== index && !player.paused) {
        player.pause();
        audioContainers[playerIndex].querySelector('.playIcon').style.display = 'inline';
        audioContainers[playerIndex].querySelector('.pauseIcon').style.display = 'none';
      }
    });

    if (audioPlayer.paused) {
      audioPlayer.currentTime = 0;
      audioPlayer.play();
      playIcon.style.display = 'none';
      pauseIcon.style.display = 'inline';
    } else {
      audioPlayer.pause();
      playIcon.style.display = 'inline';
      pauseIcon.style.display = 'none';
    }
  });

  pauseIcon.addEventListener('click', function () {
    if (!audioPlayer.paused) {
      audioPlayer.pause();
      playIcon.style.display = 'inline';
      pauseIcon.style.display = 'none';
    }
  });

  audioPlayer.addEventListener('ended', function () {
    playIcon.style.display = 'inline';
    pauseIcon.style.display = 'none';

    if (index < audioContainers.length - 1) {
      const nextAudioPlayer = audioPlayers[index + 1];
      nextAudioPlayer.currentTime = 0;
      nextAudioPlayer.play();
      audioContainers[index + 1].querySelector('.playIcon').style.display = 'none';
      audioContainers[index + 1].querySelector('.pauseIcon').style.display = 'inline';
    }
  });
});
