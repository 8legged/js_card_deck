var expect = require('chai').expect,
    Deck = require('../lib/deck').Deck,
    Deal = require('../lib/dealer'),
    Card = require('../lib/card').Card;

describe('Dealer', function() {
  'use strict';
  var deal,
      deck;
  beforeEach(function() {
    deal = new Deal();
    deck = new Deck(Card);
    // deck.length = 52;
  });
  it('should know number of cards dealt', function() {
    deck.add(new Card('10', 'Hearts'));
    expect(deck.dealt()).to.equal(51);
  });

  it('should deal', function() {
    deal.increment();
    expect(deal.numberOfCards()).to.equal(1);
  });
  it('should exist', function() {
    expect(deal).to.be.an('object');
  });
});
