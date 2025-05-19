// podla idcka najdeme zoznam, do ktoreho chceme pridat spravu
// vytvorime novy, cisty, panensky li element
// jeho text nastavime na 'message' a nalepime do zoznamu
function addMessage(elementId, message) {
  let list = document.getElementById(elementId),
    newItem = document.createElement("li");

  newItem.textContent = message;
  list.appendChild(newItem);
}

// ----------------------

// kedze moj javascript je na spodku stranky, vsetky html elementy uz prehliadac nacital
// beriem to tak, ze stranka je loadnuta
addMessage("browser", "page loaded, bitch");

// po kliknuti na body pridame spravu do zoznamu
document.body.addEventListener("click", function (event) {
  addMessage("user", "totally clicked it");
});

// ked drzim a - hybe sa stranka dolava
// ked drzim b - hybe sa stranka doprava
document.body.addEventListener("keypress", function (event) {
  // vytiahnem si aktualnu hodnotu body { left: ?px }
  let oldLeft = getComputedStyle(document.body).left,
    newLeft;

  let oldTop = getComputedStyle(document.body).top,
    newTop;

  // zrejme to bude nieco ako "10px"
  // z toho potrebujem vytiahnut iba cisla na zaciatku, cize 10
  oldLeft = parseInt(oldLeft, 10);
  oldTop = parseInt(oldTop, 10);
  // ak stlacim a, left znizim o 10
  // ak stlacim d, left zvysim o 10
  // pre starsie prehliadace si pozri https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode
  if (event.key === "a") {
    newLeft = oldLeft - 10;
  } else if (event.key === "d") {
    newLeft = oldLeft + 10;
  } else if (event.key === "w") {
    newTop = oldTop - 10;
  } else if (event.key === "s") {
    newTop = oldTop + 10;
  }

  // do newLeft som vypocital aku novu left hodnotu by body element mal mat
  // teraz mu ju este musim dat
  document.body.style.left = newLeft + "px";
  document.body.style.top = newTop + "px";
});

// pred zatvorenim okna sa zobrazi "naozaj to chces?" dialog
window.addEventListener("beforeunload", function (event) {
  addMessage("browser", "don't try to close me! dick!");
  event.returnValue = ":(";
  return ":(";
});
