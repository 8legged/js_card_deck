exports.Card = function(rank,suit) { 
function constructor() { } 
constructor.prototype.getRank = function () { return rank; };
constructor.prototype.getSuit = function () { return suit; };

return new constructor(); 
};
