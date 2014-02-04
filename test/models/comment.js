var assert = require('assert')
  , tests
  , Comment = geddy.model.Comment;

tests = {

  'after': function (next) {
    // cleanup DB
    Comment.remove({}, function (err, data) {
      if (err) { throw err; }
      next();
    });
  }

, 'simple test if the model saves without a error': function (next) {
    var comment = Comment.create({});
    comment.save(function (err, data) {
      assert.equal(err, null);
      next();
    });
  }

, 'test stub, replace with your own passing test': function () {
    assert.equal(true, false);
  }

};

module.exports = tests;
