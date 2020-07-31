import { get } from './util'

const cardArray = [
  {
    question: 'Dies ist unsere Frage Nummer 1',
    answer: 'Dies ist unsere schlaue Antwort',
    tags: ['HTML', 'CSS', 'JS', 'None'],
  },
  {
    question: 'Dies ist unsere Frage Nummer 2',
    answer: 'Dies ist unsere schlaue Antwort',
    tags: ['HTML', 'CSS', 'JS', 'None'],
  },
  {
    question: 'Dies ist unsere Frage Nummer 3',
    answer: 'Dies ist unsere schlaue Antwort',
    tags: ['HTML', 'CSS', 'JS', 'None'],
  },
]

export function initCard() {
  cardArray.forEach(createQuestionCard)
}

export function createQuestionCard({
  question = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr',
  answer = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr',
} = {}) {
  const newCard = document.createElement('section')
  const target = get('.page-home')

  newCard.className = 'quizcard'
  target.appendChild(newCard)
  newCard.innerHTML = `<h2 class="quizcard__headline serif">Question</h2>
<button class="quizcard__bookmark">
  <img src="/images/bookmark.png" alt="" />
</button>
<p class="quizcard__para quizcard__paragraph--question">
${question}
</p>
<button class="quizcard__button" onclick="">Show Answer</button>
<p class="quizcard__para quizcard__paragraph--answer">
${answer}
</p>
<ul class="quizcard__answerlist">
  <li class="quizcard__answerlist__answer">A</li>
  <li class="quizcard__answerlist__answer">B</li>
  <li class="quizcard__answerlist__answer">C</li>
  <li class="quizcard__answerlist__answer">D</li>
</ul>`
}
