//add toggle function to the bookmarks

const bookmark = document.querySelector('[data-js = "bookmark_checkbox"]');
let toggle = true;

bookmark.addEventListener("click", () => {
  toggle = !toggle;
  if (toggle) {
    bookmark.setAttribute("src", "./assets/bookmark_transparent.png");
  } else {
    bookmark.setAttribute("src", "./assets/bookmark_filled.png");
  }
});

//add functionality to the button

const cardButton = document.querySelector('[data-js="card__button"]');
const cardQuestion = document.querySelector('[data-js="card"]');
const cardAnswer = document.querySelector('[data-js = "card__answer"]');
cardButton.addEventListener("click", () => {
  cardAnswer.toggleAttribute("hidden");
  cardButton.textContent = "Hide answer!";
  if (cardAnswer.hasAttribute("hidden")) {
    cardButton.textContent = "Show answer";
  } else {
    cardButton.textContent = "Hide answer";
  }
});
