module.exports = {
    bouncer: function(req, res, next) {
      var users = ["dante", "amara", "monica", "jules"]
      if (req.cookies.user){
        next();
      } else {
        res.redirect("/login");
      }
    },
    userchecker: function(req, res, next) {
      var users = ["dante", "amara", "monica", "jules"]
      if (req.params.username === req.cookies.user){
        next();
      } else {
        res.redirect("/login");
      }
    }
}
