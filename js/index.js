"use strict";

//JS variables for show-answer button
var buttonShowAnswer = get('.quizcard__button');
var paraAnswer = get('.quizcard__paragraph--answer'); //JS variables for navbar

var buttonHome = get('.link-home');
var buttonBookmark = get('.link-bookmark');
var buttonCreate = get('.link-create');
var buttonProfile = get('.link-profile');
var pageHome = get('.page-home');
var pageBookmark = get('.page-bookmarks');
var pageCreate = get('.page-create');
var pageProfile = get('.page-profile'); //Show the Answer on the Page

buttonShowAnswer.addEventListener('click', function () {
  paraAnswer.classList.toggle('d-none');
}); //Navigate the pages

buttonHome.addEventListener('click', function () {
  nav(pageHome);
});
buttonBookmark.addEventListener('click', function () {
  nav(pageBookmark);
});
buttonCreate.addEventListener('click', function () {
  nav(pageCreate);
});
buttonProfile.addEventListener('click', function () {
  nav(pageProfile);
}); //Switch color on first bookmark button

var buttonBookmarkCard = document.querySelector('.quizcard__bookmark');
buttonBookmarkCard.addEventListener('click', function () {
  buttonBookmarkCard.classList.toggle('active');
}); //Function Navigate the pages

function nav(newPage) {
  pageHome.classList.add('d-none');
  pageBookmark.classList.add('d-none');
  pageCreate.classList.add('d - none');
  pageProfile.classList.add('d - none');
  newPage.classList.remove('d-none');
} //Function get


function get(selector) {
  return document.querySelector(selector);
}