module.exports = function() {
  'use strict';
  var records = [];
  function Constructor() {}
  Constructor.prototype.increment = function() {
    records++;
  };
  Constructor.prototype.numberOfCards = function() {
    return records;
  };
return new Constructor();
};
