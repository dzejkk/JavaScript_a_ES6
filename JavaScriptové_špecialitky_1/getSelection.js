const display = document.querySelector("h3");

document.addEventListener("selectionchange", () => {
  const selection = document.getSelection();
  const selectedText = selection.toString().trim(); // treba  parsovat

  if (selectedText) {
    display.innerHTML = `Selected: "${selectedText}"`;
    display.style.color = "green";
  } else {
    display.innerHTML = "Select some text...";
    display.style.color = "gray";
  }
});
