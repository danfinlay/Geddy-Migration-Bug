var assert = require('assert')
  , tests
  , Ticket = geddy.model.Ticket;

tests = {

  'after': function (next) {
    // cleanup DB
    Ticket.remove({}, function (err, data) {
      if (err) { throw err; }
      next();
    });
  }

, 'simple test if the model saves without a error': function (next) {
    var ticket = Ticket.create({});
    ticket.save(function (err, data) {
      assert.equal(err, null);
      next();
    });
  }

, 'test stub, replace with your own passing test': function () {
    assert.equal(true, false);
  }

};

module.exports = tests;
