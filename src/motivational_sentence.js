import goodSynonyms from "./synonyms/good.js";
import teamSynonyms from "./synonyms/team.js";
import workSynonyms from "./synonyms/work.js";

async function displayConfetti() {
  const module = await import("./confetti.js");
  module.throwConfetti();
}

async function listenForKonamiCode() {
  const module = await import("./konami.js");
  module.konami(activateYoshiMode);
}

function choose(wordList) {
  return wordList[Math.floor(Math.random() * wordList.length)];
}

function capitalizeFirstLetter(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function isAprilFirst() {
  const now = new Date();
  return now.getMonth() === 3 && now.getDate() === 1
}

function activateYoshiMode() {
  document.getElementById("sentence-icon").classList.add("konami");
  window.konamiActivated = true;
}

document.addEventListener("DOMContentLoaded", async () => {
  if (isAprilFirst()) {
    activateYoshiMode();
  }

  const motivationalSentenceTop = `${capitalizeFirstLetter(
    choose(goodSynonyms)
  )} ${choose(workSynonyms)}, `;

  document.getElementById("sentence-top").textContent = motivationalSentenceTop;

  const motivationalSentenceBottom = `${choose(teamSynonyms)}!`;
  document.getElementById(
    "sentence-bottom"
  ).textContent = motivationalSentenceBottom;

  document.title = motivationalSentenceTop + motivationalSentenceBottom;

  await displayConfetti();
  await listenForKonamiCode();
});
