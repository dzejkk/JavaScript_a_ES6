"use strict";

/** @type {SVGCircleElement} */

// let progress = document.querySelector(".progress-warn");
// let textarea = document.querySelector("textarea");
// let pathLength = progress.getAttribute("r") * 2 * Math.PI; // get perimeter
// const counter = document.querySelector(".counter");
// let tweetLength = 70;
// const warningZone = Math.floor(tweetLength * (1 / 2));
// const dangerZone = Math.floor(tweetLength * (4 / 5));

// progress.style.strokeDasharray = pathLength + "px";
// progress.style.strokeDashoffset = pathLength + "px";

///////////////////////////

// Orb.elements.textarea.addEventListener("input", (e) => {
//   let stringLength = Orb.elements.textarea.value.length;
//   Orb.handleProgress(stringLength);
//   Orb.handleColors(stringLength);
//   Orb.handleCounter(stringLength);
// });

// function handleProgress(stringLength) {
//   if (stringLength <= tweetLength) {
//     let tweetLenghtRatio = stringLength / tweetLength; // to get ratio between full length and remaining
//     let newOffset = pathLength - pathLength * tweetLenghtRatio + "px";

//     progress.style.strokeDashoffset = newOffset;
//   }
// }

// function handleColors(stringLength) {
//   progress.classList.toggle("danger", stringLength > dangerZone);
//   progress.classList.toggle("warning", stringLength >= warningZone);
//   progress.classList.toggle("tragedy", stringLength >= tweetLength);
// }

// function handleCounter(stringLength) {
//   counter.textContent = tweetLength - stringLength;
// }

/* Module aproach */
/* object properties can't reference each other during object creation */

let Orb = {
  elements: {
    progress: document.querySelector(".progress-warn"),
    textarea: document.querySelector("textarea"),
    counter: document.querySelector(".counter"),
  },

  config: {
    tweetLength: 70,
    pathLength:
      document.querySelector(".progress-warn").getAttribute("r") * 2 * Math.PI,
    warningZone: Math.floor(70 * (1 / 2)),
    dangerZone: Math.floor(70 * (4 / 5)),
  },

  handleProgress: function (stringLength) {
    const { pathLength, tweetLength } = Orb.config;
    const { progress } = Orb.elements;

    if (stringLength <= tweetLength) {
      let tweetLenghtRatio = stringLength / tweetLength; // to get ratio between full length and remaining
      let newOffset = pathLength - pathLength * tweetLenghtRatio + "px";

      progress.style.strokeDashoffset = newOffset;
    }
  },
  handleColors: function (stringLength) {
    progress.classList.toggle("danger", stringLength > dangerZone);
    progress.classList.toggle("warning", stringLength >= warningZone);
    progress.classList.toggle("tragedy", stringLength >= tweetLength);
  },
  handleCounter: function (stringLength) {
    counter.textContent = tweetLength - stringLength;
  },
};

const { pathLength } = Orb.config;

Orb.elements.progress.style.strokeDasharray = pathLength + "px";
Orb.elements.progress.style.strokeDashoffset = pathLength + "px";

Orb.elements.textarea.addEventListener("input", (e) => {
  let stringLength = Orb.elements.textarea.value.length;
  Orb.handleProgress(stringLength);
  Orb.handleColors(stringLength);
  Orb.handleCounter(stringLength);
});
