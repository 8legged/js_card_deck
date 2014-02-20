/*jshint expr:true */
var expect = require('chai').expect,
User = require('../lib/user'),
Deck = require('../lib/deck'),
Card = require('../lib/card');

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


 // it('have a name', function() {
 //     expect(patron.name).to.equal('Ben Keller');
 //   });

 //   it('can check out books');
 //   it('can return books');
 // });
