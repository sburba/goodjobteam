import goodSynonyms from "./synonyms/good.js";
import workSynonyms from "./synonyms/job.js";
import teamSynonyms from "./synonyms/team.js";
import randomFactory from "./random.js";

async function displayConfetti() {
  const module = await import("./confetti.js");
  module.throwConfetti();
}

async function listenForKonamiCode() {
  const module = await import("./konami.js");
  module.konami(activateYoshiMode);
}

function chooseWith(random, wordList) {
  return wordList[Math.floor(random() * wordList.length)];
}

function capitalizeFirstLetter(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function isAprilFirst() {
  const now = new Date();
  return now.getMonth() === 3 && now.getDate() === 1;
}

function activateYoshiMode() {
  document.getElementById("sentence-icon").classList.add("konami");
  window.konamiActivated = true;
}

function showNewSentenceWith(random) {
  const choose = chooseWith.bind(undefined, random);

  const sentenceTop = `${capitalizeFirstLetter(choose(goodSynonyms))} ${choose(
    workSynonyms
  )}, `;
  const sentenceBottom = `${choose(teamSynonyms)}!`;

  document.title = sentenceTop + sentenceBottom;
  document.getElementById("sentence-top").textContent = sentenceTop;
  document.getElementById("sentence-bottom").textContent = sentenceBottom;
}

document.addEventListener("DOMContentLoaded", async () => {
  if (isAprilFirst()) {
    activateYoshiMode();
  }

  const today = new Date();
  const random = randomFactory(
    `${today.getFullYear()}${today.getMonth()}${today.getDate()}`
  );

  showNewSentenceWith(random);

  document.getElementById("new-sentence").onclick = () => {
    showNewSentenceWith(Math.random);
  };

  await displayConfetti();
  await listenForKonamiCode();
});
