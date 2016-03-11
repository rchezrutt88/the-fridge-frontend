'use strict';

// globalObjects is an object/dictionary, containing keys "user" and "baseUrl"
// "user" contains the user data which our server returns. "baseUrl" is set at document.ready
const globalObjects = require('./global-objects');

// after this require command, "userFunc" is an object/dictionary, containing...
// keys: "signUp", "signIn", "signOut", and "changePassword"
// each key corresponds to a user function
const userFunc = require('./user-functions');

// all jquery event listeners should go here
let userHandler = function() {
  $('.sign-up').on('submit', userFunc.signUp);
  $('.sign-in').on('submit', userFunc.signIn);
  $('.sign-out').on('click', userFunc.signOut);
  $('.change-password').on('submit', userFunc.changePassword);
};

$(document).ready(() => {
  // checks whether page is open in localhost, and sets the baseUrl based on that
  document.location.hostname === 'localhost' ?
    globalObjects.baseUrl = 'http://localhost:3000' :
    globalObjects.baseUrl = ''; // set to our heroku app URL
  userHandler(); // Calls jquery listener definintion function, above
});