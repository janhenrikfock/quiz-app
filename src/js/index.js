//JS functions for navbar
const buttonHome = get('.link-home')
const buttonBookmark = get('.link-bookmark')
const buttonCreate = get('.link-create')
const buttonProfile = get('.link-profile')

const pageHome = get('.page-home')
const pageBookmark = get('.page-bookmarks')
const pageCreate = get('.page-create')
const pageProfile = get('.page-profile')

buttonHome.addEventListener('click', () => {
  pageHome.classList.remove(d - none)
  pageBookmark.classList.add(d - none)
  pageCreate.classList.add(d - none)
  pageProfile.classList.add(d - none)
})

buttonBookmark.addEventListener('click', () => {
  pageHome.classList.add(d - none)
  pageBookmark.classList.remove(d - none)
  pageCreate.classList.add(d - none)
  pageProfile.classList.add(d - none)
})

buttonCreate.addEventListener('click', () => {
  pageHome.classList.add(d - none)
  pageBookmark.classList.add(d - none)
  pageCreate.classList.remove(d - none)
  pageProfile.classList.add(d - none)
})

buttonProfile.addEventListener('click', () => {
  pageHome.classList.add(d - none)
  pageBookmark.classList.add(d - none)
  pageCreate.classList.add(d - none)
  pageProfile.classList.remove(d - none)
})

//Switch color on first bookmark button
const buttonBookmarkCard = document.querySelector('.quizcard__bookmark')
buttonBookmarkCard.addEventListener('click', () => {
  buttonBookmarkCard.classList.toggle('active')
})

//Functions
function get(selector) {
  return document.querySelector(selector)
}
