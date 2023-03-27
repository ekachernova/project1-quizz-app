//add submit action to the form

let submitButton = document.querySelector('[data-js="button__form__submit"]');
const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();
  //   console.log(event.target);
  const formElements = event.target.elements;
  //   console.log(formElements.your__question.value);
  const newCardData = document.createElement("section");
  newCardData.classList.add("card");
  newCardData.innerHTML = `
<div id="card__bookmark">
<img
  src="./assets/bookmark_transparent.png"
  alt="non-active-bookmark"
  id="bookmark_checkbox"
  data-js="bookmark_checkbox"
/>
</div>
<h2>${formElements.your__question.value}</h2>
<button data-js="card__button">Show Answer</button>
<!--hidden answer-->
<h2 data-js="card__answer">${formElements.your__answer.value}</h2>
<div class="card__tags__container">
<a href="#">${formElements.tag.value}</a>
<a href="#">#flexbox</a>
<a href="#">#css</a>
</div>

`;
  document.body.append(newCardData);
});
