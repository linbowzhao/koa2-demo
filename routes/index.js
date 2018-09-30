var router = require('koa-router')()

router.get('/', async function (ctx, next) {
  ctx.state = {
    title: '接口后台管理系统'
  }

  await ctx.render('index', {})
})
module.exports = router;
