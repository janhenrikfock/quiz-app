"use strict";

var buttonHome = document.querySelector('.link-home');
var buttonBookmark = document.querySelector('.link-bookmark');
var buttonCreate = document.querySelector('.link-create');
var buttonProfile = document.querySelector('.link-profile');
var pageHome = document.querySelector('.page-home');
var pageBookmark = document.querySelector('.page-bookmarks');
var pageCreate = document.querySelector('.page-create');
var pageProfile = document.querySelector('.page-profile');
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
});