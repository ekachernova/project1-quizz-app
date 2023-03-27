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

//counting left caracters in the question form

const questionTextarea = document.querySelector('[data-js = "question__text"]');
const charactersCounter = document.querySelector(
  '[data-js ="question__left__caracters"]'
);
const maxLength = questionTextarea.maxLength;

questionTextarea.addEventListener("input", () => {
  const typedCharacters = questionTextarea.value.length;
  const leftCharacters = maxLength - typedCharacters;
  charactersCounter.textContent =
    typedCharacters === 0 ? "" : `Left characters: ${leftCharacters}`;

  console.log(typedCharacters);
});

//counting left caracters in the answer form

const answerTextarea = document.querySelector('[data-js="answer__text"]');
const answerCharactersCounter = document.querySelector(
  '[data-js ="answer__left__caracters"]'
);
const answerMaxLength = answerTextarea.maxLength;

answerTextarea.addEventListener("input", () => {
  const typedCharactersAnswer = answerTextarea.value.length;
  const leftCharactersAnswer = answerMaxLength - typedCharactersAnswer;
  answerCharactersCounter.textContent =
    typedCharactersAnswer === 0
      ? ""
      : `Left characters: ${leftCharactersAnswer}`;
  console.log(typedCharactersAnswer);
});
