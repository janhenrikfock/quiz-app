console.log('showanswer.js')

//JS variables for show-answer button
const buttonShowAnswer = get('.quizcard__button')
const paraAnswer = get('.quizcard__paragraph--answer')

//Show the Answer on the Page
buttonShowAnswer.addEventListener('click', () => {
  paraAnswer.classList.toggle('d-none')
})
