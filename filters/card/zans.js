// Generated by CoffeeScript 1.9.3
(function() {
  var func_card;

  func_card = __F('card');

  module.exports = function(req, res, next) {
    return func_card.getZans(req.params.id, function(error, zans) {
      res.locals.zans = zans;
      return next();
    });
  };

}).call(this);
