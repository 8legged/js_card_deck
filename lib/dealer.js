module.exports = function() {
  'use strict';
  var records = [];
  var constructor = function() {};
  constructor.prototype.increment = function() {
    records++;
  };
  constructor.prototype.numberOfCards = function() {
    return records;
  };
return new constructor(); // jshint ignore:line
};
