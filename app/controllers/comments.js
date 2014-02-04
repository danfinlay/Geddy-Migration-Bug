var Comments = function () {
  this.respondsWith = ['html', 'json', 'xml', 'js', 'txt'];

  this.index = function (req, resp, params) {
    var self = this;

    geddy.model.Comment.all(function(err, comments) {
      if (err) {
        throw err;
      }
      self.respondWith(comments, {type:'Comment'});
    });
  };

  this.add = function (req, resp, params) {
    this.respond({params: params});
  };

  this.create = function (req, resp, params) {
    var self = this
      , comment = geddy.model.Comment.create(params);

    if (!comment.isValid()) {
      this.respondWith(comment);
    }
    else {
      comment.save(function(err, data) {
        if (err) {
          throw err;
        }
        self.respondWith(comment, {status: err});
      });
    }
  };

  this.show = function (req, resp, params) {
    var self = this;

    geddy.model.Comment.first(params.id, function(err, comment) {
      if (err) {
        throw err;
      }
      if (!comment) {
        throw new geddy.errors.NotFoundError();
      }
      else {
        self.respondWith(comment);
      }
    });
  };

  this.edit = function (req, resp, params) {
    var self = this;

    geddy.model.Comment.first(params.id, function(err, comment) {
      if (err) {
        throw err;
      }
      if (!comment) {
        throw new geddy.errors.BadRequestError();
      }
      else {
        self.respondWith(comment);
      }
    });
  };

  this.update = function (req, resp, params) {
    var self = this;

    geddy.model.Comment.first(params.id, function(err, comment) {
      if (err) {
        throw err;
      }
      comment.updateProperties(params);

      if (!comment.isValid()) {
        self.respondWith(comment);
      }
      else {
        comment.save(function(err, data) {
          if (err) {
            throw err;
          }
          self.respondWith(comment, {status: err});
        });
      }
    });
  };

  this.remove = function (req, resp, params) {
    var self = this;

    geddy.model.Comment.first(params.id, function(err, comment) {
      if (err) {
        throw err;
      }
      if (!comment) {
        throw new geddy.errors.BadRequestError();
      }
      else {
        geddy.model.Comment.remove(params.id, function(err) {
          if (err) {
            throw err;
          }
          self.respondWith(comment);
        });
      }
    });
  };

};

exports.Comments = Comments;
