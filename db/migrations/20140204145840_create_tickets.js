var CreateTickets = function () {
  this.up = function (next) {
    var def = function (t) {
          t.column('text', 'string');
        }
      , callback = function (err, data) {
          if (err) {
            throw err;
          }
          else {
            next();
          }
        };
    this.createTable('ticket', def, callback);
  };

  this.down = function (next) {
    var callback = function (err, data) {
          if (err) {
            throw err;
          }
          else {
            next();
          }
        };
    this.dropTable('ticket', callback);
  };
};

exports.CreateTickets = CreateTickets;
