"use strict";

/** @type {SVGCircleElement} */

let progress = document.querySelector(".progress-warn");
let textarea = document.querySelector("textarea");
let pathLenght = progress.getAttribute("r") * 2 * Math.PI; // get perimeter
const counter = document.querySelector(".counter");

let tweetLength = 70;
const warningZone = Math.floor(tweetLength * (1 / 2));
const dangerZone = Math.floor(tweetLength * (4 / 5));

progress.style.strokeDasharray = pathLenght + "px";
progress.style.strokeDashoffset = pathLenght + "px";

textarea.addEventListener("input", (e) => {
  let stringLength = textarea.value.length;

  if (stringLength <= tweetLength) {
    let tweetLenghtRatio = stringLength / tweetLength; // to get ratio between full lenght and remaining
    let newOffset = pathLenght - pathLenght * tweetLenghtRatio + "px";

    progress.style.strokeDashoffset = newOffset;

    // handle counter

    // handle color
  }

  counter.textContent = tweetLength - stringLength;
  counter.classList.toggle("danger", stringLength >= tweetLength);

  progress.classList.toggle("danger", stringLength > dangerZone);
  progress.classList.toggle("warning", stringLength >= warningZone);
});
