
/*
 * GET home page.
 */

var xinguan = require('../node_modules/stuNo');

exports.index = function(req, res){
  res.render('index', { title: 'Express', stuNo: xinguan.stuNo });
};