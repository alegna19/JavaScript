"use strict";

var users = {
  name: 'Angie',
  email: 'angie@gmail.com',
  age: 30,
  country: 'Colombia'
};
var name = users.name,
    email = users.email,
    country = users.country;

var showInfo = function showInfo(_ref) {
  var name = _ref.name,
      email = _ref.email,
      country = _ref.country;
  return console.log("".concat(name, " is from ").concat(country));
};

showInfo(users);