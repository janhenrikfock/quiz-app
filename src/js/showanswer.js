import { getAll } from './util'

export function initializeShowanswer() {
  const cardList = getAll('.quizcard')
  cardList.forEach(showHideAnswerLogic)

  function showHideAnswerLogic(quizCard) {
    const buttonAnswer = quizCard.querySelector('.quizcard__button')
    const paraAnswer = quizCard.querySelector('.quizcard__paragraph--answer')

    console.log(123)

    buttonAnswer.addEventListener('click', () => {
      paraAnswer.classList.toggle('d-none')
    })
  }
}
