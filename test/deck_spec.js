/*jshint expr:true */
var expect = require('chai').expect,
Deck = require('../lib/deck'),
Card = require('../lib/card');

describe('Deck', function() {
  'use strict';
  var deck;
  beforeEach(function() {
    deck = new Deck(Card);
  });
  it('should know card count', function() {
    deck.add(new Card('10', 'Hearts'));
    expect(deck.includes('10', 'Hearts')).to.be.true;
  });
});




