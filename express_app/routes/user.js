
/*
 * GET users listing.
 */

exports.list = function(req, res){
  res.send("here comes a user: " + req.params.id + ' ' + req.params.type);
};