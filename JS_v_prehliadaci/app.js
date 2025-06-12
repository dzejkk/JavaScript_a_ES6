"use strict";

const img = document.querySelectorAll(".contianer article img");
const myImgArray = Array.from(img); // parsing nodelist to array

const SCORES_KEY = "imageScore";

function loadFromLocalStorage() {
  const savedScore = localStorage.getItem(SCORES_KEY);
  return savedScore ? JSON.parse(savedScore) : {};
}

function saveToLocalStorage(scores) {
  localStorage.setItem(SCORES_KEY, JSON.stringify(scores));
}

// scores store
let imageScore = loadFromLocalStorage();
//

const hoverEvents = ["mouseover", "mouseout"];

//main function
myImgArray.forEach((img, index) => {
  let imageID = `image_${index}`;

  if (!(imageID in imageScore)) {
    imageScore[imageID] = 0;
  }
  let scoreElement = img.nextElementSibling;
  scoreElement.textContent = imageScore[imageID];

  function makeItBigger() {
    img.classList.toggle("emphasize");
  }

  img.addEventListener("click", () => {
    imageScore[imageID]++;
    saveToLocalStorage(imageScore);
    scoreElement.textContent = imageScore[imageID];
  });

  hoverEvents.forEach((eventType) => {
    img.addEventListener(eventType, makeItBigger);
  });
});

// utility  functions
function resetScores() {
  imageScore = {};
  saveToLocalStorage(imageScore);

  myImgArray.forEach((img) => {
    img.nextElementSibling.textContent = 0;
  });
}

// Add these utilities functions to the console
window.imageScoreUtils = {
  resetScores,
};
