window.addEventListener("keyup", e => {
  const keyCodes = [68, 65, 83, 70, 71, 72, 74, 75, 76];
  if (keyCodes.includes(e.keyCode)) {
    playAudio(e.keyCode);
  }
});
const playAudio = keyCode => {
  const audio = new Audio(`sounds/${keyCode}.mp3`);
  audio.play();
};
