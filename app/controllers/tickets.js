var Tickets = function () {
  this.respondsWith = ['html', 'json', 'xml', 'js', 'txt'];

  this.index = function (req, resp, params) {
    var self = this;

    geddy.model.Ticket.all(function(err, tickets) {
      if (err) {
        throw err;
      }
      self.respondWith(tickets, {type:'Ticket'});
    });
  };

  this.add = function (req, resp, params) {
    this.respond({params: params});
  };

  this.create = function (req, resp, params) {
    var self = this
      , ticket = geddy.model.Ticket.create(params);

    if (!ticket.isValid()) {
      this.respondWith(ticket);
    }
    else {
      ticket.save(function(err, data) {
        if (err) {
          throw err;
        }
        self.respondWith(ticket, {status: err});
      });
    }
  };

  this.show = function (req, resp, params) {
    var self = this;

    geddy.model.Ticket.first(params.id, function(err, ticket) {
      if (err) {
        throw err;
      }
      if (!ticket) {
        throw new geddy.errors.NotFoundError();
      }
      else {
        self.respondWith(ticket);
      }
    });
  };

  this.edit = function (req, resp, params) {
    var self = this;

    geddy.model.Ticket.first(params.id, function(err, ticket) {
      if (err) {
        throw err;
      }
      if (!ticket) {
        throw new geddy.errors.BadRequestError();
      }
      else {
        self.respondWith(ticket);
      }
    });
  };

  this.update = function (req, resp, params) {
    var self = this;

    geddy.model.Ticket.first(params.id, function(err, ticket) {
      if (err) {
        throw err;
      }
      ticket.updateProperties(params);

      if (!ticket.isValid()) {
        self.respondWith(ticket);
      }
      else {
        ticket.save(function(err, data) {
          if (err) {
            throw err;
          }
          self.respondWith(ticket, {status: err});
        });
      }
    });
  };

  this.remove = function (req, resp, params) {
    var self = this;

    geddy.model.Ticket.first(params.id, function(err, ticket) {
      if (err) {
        throw err;
      }
      if (!ticket) {
        throw new geddy.errors.BadRequestError();
      }
      else {
        geddy.model.Ticket.remove(params.id, function(err) {
          if (err) {
            throw err;
          }
          self.respondWith(ticket);
        });
      }
    });
  };

};

exports.Tickets = Tickets;
