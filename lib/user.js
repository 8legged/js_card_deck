module.exports = function() {
  'use strict';
  var name = '';
  var cards = [];

  var constructor = function() {};

constructor.prototype.getName = function() {
  if (name) {
  return name;
  }
};
  constructor.prototype.hit = function(card) {
    cards.push(card);
  };
  constructor.prototype.showCards = function() {
    return cards;
  };
  return new constructor();
};





