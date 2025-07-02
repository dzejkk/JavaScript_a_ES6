const data = [
  {
    who: "Finn the Human",
    wat: "Finn is a silly kid who wants to become a great hero one day. He might not look too tough, but if there's evil around, he'll slay it. That's his deal.",
    comments: 4,
  },

  {
    who: "Jake the Dog",
    wat: "Finn's best friend is a wise, old dog with a big heart. Jake has the magical ability to stretch and grow. When evil's not running amok, he plays viola with Lady Rainicorn.",
    comments: 23,
  },

  {
    who: "Ice King",
    wat: "Armed with a magic crown and an icy heart, the Ice King has only one goal: to secure a wife by any means necessary.",
    comments: 10,
  },

  {
    who: "Princess Bubblegum",
    wat: "As a millionaire nerd enthusiast, Princess Bubblegum immerses herself in every branch of geekdom from rocket science to turtle farming.",
    comments: 44,
  },

  {
    who: "Marcy the Vampire",
    wat: "Marceline is a wild rocker girl. Centuries of wandering the Land of Ooo have made her a fearless daredevil.",
    comments: 10,
  },
];

/* MAP METHOD */

// const cardContainer = document.getElementById("card-container");

// let template = "";

// data.map((post) => {
//   template += `
//               <article>
//                 <h2 class="card-header">${post.who}</h2>
//                 <p class="main-text-card">${post.wat}</p>
//                 <footer class="comments">${post.comments}</footer>
//                </article>
//                 `;
// });

// cardContainer.innerHTML = template;

/* DOCUMENT FRAGMENT METHOD - BETTER  PERFORMACE + USAGE ( u can add event listeners) */
// it is not known, its advanced BROWSER API

const cardContainer = document.getElementById("card-container");
const fragment = document.createDocumentFragment();

data.forEach((post) => {
  const article = document.createElement("article");

  article.innerHTML = `
               <h2 class="card-header">${post.who}</h2>
               <p class="main-text-card">${post.wat}</p>
               <footer class="comments">${post.comments}</footer>
               `;

  fragment.appendChild(article);
});

cardContainer.appendChild(fragment);

/* No Layout Thrashing
When you append elements directly to the DOM in a loop, 
the browser recalculates layout, styles,
 and repaints on each iteration. With DocumentFragment, 
 all that expensive work happens only once. */
