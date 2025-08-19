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
    overlay: document.querySelector(".text-overlay"),
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
    } else {
      progress.style.strokeDashoffset = "0px"; // added for pasting values to work
    }
  },
  handleColors: function (stringLength, event, text) {
    const { progress, overlay } = Orb.elements;
    const { dangerZone, warningZone, tweetLength } = Orb.config;

    if (event.inputType === "insertText") {
      progress.classList.toggle("danger", stringLength > dangerZone);
      progress.classList.toggle("warning", stringLength >= warningZone);
      progress.classList.toggle("tragedy", stringLength > tweetLength);
    } else {
      progress.classList.remove("danger", "warning", "tragedy");
    }

    console.log(tweetLength);

    if (stringLength > tweetLength) {
      const normalText = text.slice(0, tweetLength);
      const excessText = text.slice(tweetLength);
      overlay.innerHTML =
        normalText + '<span class="excess-text">' + excessText + "</span>";
    } else {
      overlay.innerHTML = "";
    }
  },
  handleCounter: function (stringLength) {
    const { counter } = Orb.elements;
    const { tweetLength } = Orb.config;
    counter.textContent = tweetLength - stringLength;
  },
};

/*Calling  with event listeners */

const { pathLength } = Orb.config;

Orb.elements.progress.style.strokeDasharray = pathLength + "px";
Orb.elements.progress.style.strokeDashoffset = pathLength + "px";

Orb.elements.textarea.addEventListener("input", (event) => {
  console.log(event);
  let stringLength = Orb.elements.textarea.value.length;
  const text = Orb.elements.textarea.value;
  Orb.handleProgress(stringLength);
  Orb.handleColors(stringLength, event, text);
  Orb.handleCounter(stringLength);
});

/* to graphics stay in sync when big chunk of text is pasted */
Orb.elements.textarea.addEventListener("scroll", function () {
  /* this  keyword explain */
  console.log("this is:", this);
  console.log("Same as textarea?", this === Orb.elements.textarea);
  /*///////////////////////////////*/

  Orb.elements.overlay.scrollTop = this.scrollTop;
  Orb.elements.overlay.scrollLeft = this.scrollLeft;
});
