/*jshint expr:true */
var expect = require('chai').expect,
  Card = require('../lib/card');

describe('Card', function() {
  'use strict';
  var card;
  beforeEach(function() {
    card = new Card('10', 'Spades');
  });
  it('card should be truthy(exists)', function() {
    expect(card).to.be.ok;
  });
  it('card should have rank property', function() {
    expect(card.getRank()).to.equal('10');
  });

  it('card should have correct suit', function() {
    expect(card.getSuit()).to.equal('Spades');
  });

  it('can\'t change the card suit', function() {
    card.suit = 'Hearts';
    expect(card.getSuit()).to.equal('Spades');
  });
});
