module.exports.User = function(name) {
  'use strict';

  var cards = [];

  function Constructor() {}
  Constructor.prototype.getName = function() {
  if (name) {
  return name;
  }
};
  Constructor.prototype.hit = function(card) {
    cards.push(card);
  };
  Constructor.prototype.showCards = function() {
    return cards;
  };
  return new Constructor();
};





