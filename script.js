// henter boksen fra HTML
const box = document.getElementById('movable-box');
// her setter forteller jeg koden hvor bredd og høy boksen er
const BOX = 48;
// Hvor mange pixler boksen skal flytte på seg når man bruker piltastene
const STEP = 24;
// Posisjonen til boksen hver gang man starter funskjonen
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
  if (e.key === 'ArrowUp' || e.key === 'w' || e.key === `W`) { e.preventDefault(); move(x, y - STEP); }
  if (e.key === 'ArrowDown' || e.key === `s` || e.key === `S`)  { e.preventDefault(); move(x, y + STEP); }
  if (e.key === 'ArrowLeft' || e.key === `a` || e.key === `A`)  { e.preventDefault(); move(x - STEP, y); }
  if (e.key === 'ArrowRight' || e.key === `d` || e.key === `D`) { e.preventDefault(); move(x + STEP, y); }
});

document.addEventListener('click', e => {
  move(e.clientX - BOX / 2, e.clientY - BOX / 2);
});
