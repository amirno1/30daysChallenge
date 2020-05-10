const keyCodes = [68, 65, 83, 70, 71, 72, 74, 75, 76];
window.addEventListener("keydown", e => {
  if (keyCodes.includes(e.keyCode)) {
    playAudio(e.keyCode);
    const element = document.querySelector(`[data-key="${e.keyCode}"]`);
    element.classList.add("hit");
  }
});
window.addEventListener("keyup", e => {
  if (keyCodes.includes(e.keyCode)) {
    const element = document.querySelector(`[data-key="${e.keyCode}"]`);
    element.classList.remove("hit");
  }
});
const playAudio = keyCode => {
  const audio = new Audio(`sounds/${keyCode}.mp3`);
  audio.play();
};
