//1. convert number to currency

// const myNumber = 15321.35;

// function convertNumberToCurrency(myNumber) {
//   return new Intl.NumberFormat("de-IN", {
//     style: "currency",
//     currency: "EUR",
//   }).format(myNumber);
// }

// let myMoney = convertNumberToCurrency(myNumber);

// const removedSpace = myMoney.replace(".", " ");

// console.log(removedSpace);

// 2. vypocitaj zlavu

const amount = 3599.22;

const DISCOUNT = 20;

function calculateDiscount(amount, DISCOUNT) {
  let final_DISCOUNT = (amount / 100) * DISCOUNT;

  return new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
  }).format(final_DISCOUNT);
}

console.log(calculateDiscount(amount, DISCOUNT));
