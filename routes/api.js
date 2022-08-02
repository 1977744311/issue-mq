var router = require('koa-router')();

var mqemitter = require('mqemitter-mongodb')
var instance = mqemitter({
  url: 'mongodb://localhost/aaa'
})

router.get('/emit', function (ctx, next) {
  console.log('sssss')
  instance.emit({ topic: 'hello', payload: 'world' })
  ctx.body = 'this response!';
});

module.exports = router;
