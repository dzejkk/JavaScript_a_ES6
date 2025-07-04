"use strict";

/** @type {SVGCircleElement} */

let progress = document.querySelector(".progress-warn");
let textarea = document.querySelector("textarea");
let pathLenght = progress.getTotalLength();
let tweetLength = 140;

progress.style.strokeDasharray = pathLenght + "px";
progress.style.strokeDashoffset = pathLenght + "px";

// console.log(progress, textarea, pathLenght);

textarea.addEventListener("input", (e) => {
  let stringLength = textarea.value.length;
  let tweetLenghtRation = stringLength / tweetLength; // to get ration between full lenght and remaining
  let newOffset = pathLenght - pathLenght * tweetLenghtRation + "px";

  progress.style.strokeDashoffset = newOffset;
});
