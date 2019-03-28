import goodSynonyms from "./synonyms/good.js";
import teamSynonyms from "./synonyms/team.js";
import workSynonyms from "./synonyms/work.js";

function displayConfetti(){
  import("./confetti.js").then((module) => {
    module.throwConfetti()
    activateKonami()
  });
}

function activateKonami(){
  import("./konami.js").then((module) => {
    module.konami()
  });
}

function choose(wordList) {
  return wordList[Math.floor(Math.random() * wordList.length)];
}

function capitalizeFirstLetter(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

document.addEventListener("DOMContentLoaded", () => {
  const motivationalSentenceTop = `${capitalizeFirstLetter(
    choose(goodSynonyms)
  )} ${choose(workSynonyms)}, `;
  
  document.getElementById(
    "sentence-top"
  ).textContent = motivationalSentenceTop;
  
  const motivationalSentenceBottom = `${choose(teamSynonyms)}!`;
  document.getElementById(
    "sentence-bottom"
  ).textContent = motivationalSentenceBottom;

  document.title = motivationalSentenceTop+motivationalSentenceBottom;
  displayConfetti()
});
