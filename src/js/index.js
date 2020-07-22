const buttonHome = document.querySelector('.link-home')
const buttonBookmark = document.querySelector('.link-bookmark')
const buttonCreate = document.querySelector('.link-create')
const buttonProfile = document.querySelector('.link-profile')

const pageHome = document.querySelector('.page-home')
const pageBookmark = document.querySelector('.page-bookmarks')
const pageCreate = document.querySelector('.page-create')
const pageProfile = document.querySelector('.page-profile')

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
