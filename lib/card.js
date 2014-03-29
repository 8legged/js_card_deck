module.exports.Card = function(rank, suit) {
'use strict';
  function Constructor() {}
  Constructor.prototype.getRank = function() {
    return rank;
  };
  Constructor.prototype.setRank = function(r) {
    rank = r;
  };
  Constructor.prototype.getSuit = function() {
    return suit;
  };
  Constructor.prototype.setSuit = function(s) {
    suit = s;
  };
  return new Constructor();
};
