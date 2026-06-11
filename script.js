const box = document.getElementById('movable-box');
const BOX = 48;
const STEP = 24;
let x = 0, y = 0;

function clamp(val, min, max) {
  return val < min ? min : val > max ? max : val;
}

