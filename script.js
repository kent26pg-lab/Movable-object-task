const box = document.getElementById('movable-box');
const BOX = 48;
const STEP = 24;
let x = 0, y = 0;

function clamp(val, min, max) {
  return val < min ? min : val > max ? max : val;
}

function move(newX, newY) {
  x = clamp(newX, 0, window.innerWidth - BOX);
  y = clamp(newY, 0, window.innerHeight - BOX);
  box.style.left = x + 'px';
  box.style.top  = y + 'px';
}

document.addEventListener('keydown', e => {
  if (e.key === 'ArrowUp')    { e.preventDefault(); move(x, y - STEP); }
  if (e.key === 'ArrowDown')  { e.preventDefault(); move(x, y + STEP); }
  if (e.key === 'ArrowLeft')  { e.preventDefault(); move(x - STEP, y); }
  if (e.key === 'ArrowRight') { e.preventDefault(); move(x + STEP, y); }
});
