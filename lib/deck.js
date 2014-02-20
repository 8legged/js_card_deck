module.exports = function(Card) {
'use strict';
  var cards = [];

  var constructor = function() {};
    constructor.prototype.add = function(card) {
      cards.push(card);
    };
    constructor.prototype.hit = function() {
      return cards.pop();
    };
    constructor.prototype.size = function() {
      return cards.length;
    };
    constructor.prototype.includes = function(suit) {
      if (this.size() > 0) {
        return true;
      } else {
        return false;
      }
    };
    return new constructor();
};
