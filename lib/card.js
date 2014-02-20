module.exports = function(rank, suit) { 
  'use strict';
  function constructor() { }
  constructor.prototype.getRank = function () {
    return rank;
  };
  constructor.prototype.setRank = function (r) {
    rank = r;
  };
  constructor.prototype.getSuit = function () {
    return suit;
  };
  constructor.prototype.setSuit = function (s) {
    suit = s;
  };

  return new constructor();  // jshint ignore:line
};
