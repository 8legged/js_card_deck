var expect = require('chai').expect,
Deal = require('../lib/dealer');
describe('Dealer', function() {
  'use strict';
  var deal;
  beforeEach(function() {
    deal = new Deal();
  });
  it('should deal', function() {
    deal.increment();
    expect(deal.numberOfCards()).to.equal(1);
  });
  it('should exist', function() {
    expect(deal).to.be.an('object');
  });
});
