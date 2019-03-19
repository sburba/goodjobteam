// https://stackoverflow.com/questions/31626852/how-to-add-konami-code-in-a-website-based-on-html

// the 'official' Konami Code sequence
const konamiCode = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

// a variable to remember the 'position' the user has reached so far.
let konamiCodePosition = 0;

// add keydown event listener
document.addEventListener("keydown", function(e) {
  // get the value of the required key from the konami code
  const requiredKey = konamiCode[konamiCodePosition];

  // compare the key with the required key
  if (e.key === requiredKey) {
    // move to the next key in the konami code sequence
    konamiCodePosition++;

    // if the last key is reached, activate cheats
    if (konamiCodePosition === konamiCode.length) {
      activateCheats();
      konamiCodePosition = 0;
    }
  } else {
    konamiCodePosition = 0;
  }
});

function activateCheats() {
  document.querySelector("#yoshiba").style.visibility = "visible";
}
