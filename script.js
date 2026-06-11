// henter boksen fra HTML
const box = document.getElementById('movable-box');
// her setter forteller jeg koden hvor bredd og høy boksen er
const BOX = 100;
// Hvor mange pixler boksen skal flytte på seg når man bruker piltastene
const STEP = 24;
// Posisjonen til boksen hver gang man starter funskjonen
let x = 0, y = 0;

// Tar imot et tall (val) og holder det innenfor min og max.
// Returnerer min hvis for liten, max hvis for stor, ellers val uendret.
function clamp(val, min, max) {
  return val < min ? min : val > max ? max : val;
}


function move(newX, newY) {
  x = clamp(newX, 0, window.innerWidth - BOX);
  // Bruker clamp funskjonen til å sjekke at firkanten holder seg mellom 0 x. altså helt innatt venstre vegg og window.innerWidth altså helt til høyre.
  y = clamp(newY, 0, window.innerHeight - BOX);
    // Bruker clamp funskjonen til å sjekke at firkanten holder seg mellom 0 i høyden, altså toppen av nettleseren og window.innerHeigth som blir bunnen av nettleseren
  box.style.left = x + 'px';
  // Oppdaterer firkantens horisontale posisjon i css
  box.style.top  = y + 'px';
  // oppdaterer firkantens vertikale posisjon i css
}
// lytter etter tastetrykk på hele nettisden og flytter firkanten i riktig retning
document.addEventListener('keydown', e => {
  if (e.key === 'ArrowUp' || e.key === 'w' || e.key === `W`) { e.preventDefault(); move(x, y - STEP); }
  // Vis man trykker på pil opp eller w eller hard Caps lock på, som gjør at det blir W. så flyttes firkanten opp vis det er rom for det. e.preventDefault gjør så at siden ikke scrolles når man bruker piltastene
  if (e.key === 'ArrowDown' || e.key === `s` || e.key === `S`)  { e.preventDefault(); move(x, y + STEP); }
  // Gjør det samme som koden over, bare at pil ned eller a/A er det som aktiverer koden
  if (e.key === 'ArrowLeft' || e.key === `a` || e.key === `A`)  { e.preventDefault(); move(x - STEP, y); }
  // gjør det samme som koden over, bare at pil venstre eller a/A aktiverer koden 
  if (e.key === 'ArrowRight' || e.key === `d` || e.key === `D`) { e.preventDefault(); move(x + STEP, y); }
  // gjør det samme som koden over, bare at pil venstre eller d/D aktiverer koden
});

// lytter etter museklikk på hele nettsiden
document.addEventListener('click', e => {
  // Henter posisjon hvor du klikket på nettsiden og halverer firkantens størrelse og plasserer den midt på der musepekeren klikket.
  move(e.clientX - BOX / 2, e.clientY - BOX / 2);
});
