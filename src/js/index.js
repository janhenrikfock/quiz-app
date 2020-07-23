//JS functions for navbar
const buttonHome = get('.link-home')
const buttonBookmark = get('.link-bookmark')
const buttonCreate = get('.link-create')
const buttonProfile = get('.link-profile')

const pageHome = get('.page-home')
const pageBookmark = get('.page-bookmarks')
const pageCreate = get('.page-create')
const pageProfile = get('.page-profile')

//Navigate the pages
buttonHome.addEventListener('click', () => {
  nav(pageHome)
})
buttonBookmark.addEventListener('click', () => {
  nav(pageBookmark)
})
buttonCreate.addEventListener('click', () => {
  nav(pageCreate)
})
buttonProfile.addEventListener('click', () => {
  nav(pageProfile)
})

//Switch color on first bookmark button
const buttonBookmarkCard = document.querySelector('.quizcard__bookmark')
buttonBookmarkCard.addEventListener('click', () => {
  buttonBookmarkCard.classList.toggle('active')
})
//Function Navigate the pages
function nav(newPage) {
  pageHome.classList.add('d-none')
  pageBookmark.classList.add('d-none')
  pageCreate.classList.add('d - none')
  pageProfile.classList.add('d - none')
  newPage.classList.remove('d-none')
}
//Function get
function get(selector) {
  return document.querySelector(selector)
}
