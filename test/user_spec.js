/*jshint expr:true */
var expect = require('chai').expect,
    User = require('../lib/user').User,
    Deck = require('../lib/deck').Deck,
    Card = require('../lib/card').Card;

describe('User gets card', function() {
  'use strict';
  var deck, user;
  beforeEach(function() {
    deck = new Deck(Card);
    user = new User();
  });
  it('can hit card', function() {
    user.hit(deck.hit());
    expect(user.showCards().length).to.equal(1);
  });
});
