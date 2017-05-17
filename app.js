var express = require('express');
var router = express.Router();
var app = express();
app.use(express.static('lib'));
app.use(express.static('bootstrap'));
app.use(express.static('theme'));
app.use(express.static('src'));
// app.use('/',router);
app.get('/', function (req, res) {
  res.send('Hello World!');
});
app.get('/home', function(req,res){
    res.sendFile(__dirname + '/index.html');
});


var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
// // 该路由使用的中间件
// router.use(function timeLog(req, res, next) {
//   console.log('Time: ', Date.now());
//   next();
// });
// // 定义网站主页的路由
// router.get('/', function(req, res) {
//   res.send('Birds home page');
// });
// // 定义 about 页面的路由
// router.get('/about', function(req, res) {
//   res.send('About birds');
// });


module.exports = router;

