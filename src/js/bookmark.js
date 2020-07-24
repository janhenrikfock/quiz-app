import { getAll } from './util'

export function initializeBookmark() {
  const cardList = getAll('.quizcard')
  cardList.forEach(bookmarkQuestion)

  function bookmarkQuestion(quizCard) {
    const bookmarkButton = quizCard.querySelector('.quizcard__bookmark')
    bookmarkButton.addEventListener('click', () => {
      bookmarkButton.classList.toggle('active')
    })
  }
}
