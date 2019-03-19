import goodSynonyms from "./synonyms/good.js";
import teamSynonyms from "./synonyms/team.js";
import workSynonyms from "./synonyms/work.js";

document.addEventListener("DOMContentLoaded", () => {
  function choose(wordList) {
    return wordList[Math.floor(Math.random() * wordList.length)];
  }

  function capitalizeFirstLetter(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  const motivationalSentence = `${capitalizeFirstLetter(
    choose(goodSynonyms)
  )} ${choose(workSynonyms)}, ${choose(teamSynonyms)}!`;

  document.getElementById(
    "motivational-sentence"
  ).textContent = motivationalSentence;

  document.title = motivationalSentence;
});
