"use strict";

//JS functions for navbar
var buttonHome = get('.link-home');
var buttonBookmark = get('.link-bookmark');
var buttonCreate = get('.link-create');
var buttonProfile = get('.link-profile');
var pageHome = get('.page-home');
var pageBookmark = get('.page-bookmarks');
var pageCreate = get('.page-create');
var pageProfile = get('.page-profile');
buttonHome.addEventListener('click', function () {
  pageHome.classList.remove(d - none);
  pageBookmark.classList.add(d - none);
  pageCreate.classList.add(d - none);
  pageProfile.classList.add(d - none);
});
buttonBookmark.addEventListener('click', function () {
  pageHome.classList.add(d - none);
  pageBookmark.classList.remove(d - none);
  pageCreate.classList.add(d - none);
  pageProfile.classList.add(d - none);
});
buttonCreate.addEventListener('click', function () {
  pageHome.classList.add(d - none);
  pageBookmark.classList.add(d - none);
  pageCreate.classList.remove(d - none);
  pageProfile.classList.add(d - none);
});
buttonProfile.addEventListener('click', function () {
  pageHome.classList.add(d - none);
  pageBookmark.classList.add(d - none);
  pageCreate.classList.add(d - none);
  pageProfile.classList.remove(d - none);
}); //Switch color on first bookmark button

var buttonBookmarkCard = document.querySelector('.quizcard__bookmark');
buttonBookmarkCard.addEventListener('click', function () {
  buttonBookmarkCard.classList.toggle('active');
}); //Functions

function get(selector) {
  return document.querySelector(selector);
}