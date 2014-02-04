var CommentRelation = function () {
  this.up = function (next) {
    this.addColumn('comment', 'ticketId', function(err, data){
      if(err){
        throw err;
      }else{
        next();
      }
    });
};

  this.down = function (next) {
   this.removeColumn('comment', 'ticketId', function(err, data){
      if(err){
        throw err;
      }else{
        next();
      }
    });
  };
};

exports.CommentRelation = CommentRelation;
