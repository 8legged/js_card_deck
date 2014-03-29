module.exports.Deck = function() {
'use strict';
  var deck = [];

  function Constructor() {}
    Constructor.prototype.add = function(card) {
      deck.push(card);
    };
    Constructor.prototype.hit = function() {
      return deck.pop();
    };
    Constructor.prototype.dealt = function() {
      return 52 - deck.length;
    };
    Constructor.prototype.size = function() {
      return deck.length;
    };
    Constructor.prototype.includes = function(suit) {
      if (this.size() > 0) {
        return true;
      } else {
        return false;
      }
    };
    return new Constructor();
};
