// let a = parseInt(prompt("zadaj prve cislo"));
// let b = parseInt(prompt("zadaj druhe cislo"));

// function sum(a, b) {
//   console.log(a + b);
//   return a + b;
// }

// sum(a, b);

//

let pocetProduktov = 5;
let cenaProduktu = 600;

function how_much(quantity, price) {
  const app = document.getElementById("app");
  const display = document.createElement("p");

  display.textContent = `kupil si ${quantity} predmetov za ${
    price * quantity
  } dokopy`;

  app.appendChild(display);
}

how_much(5, 1500);
