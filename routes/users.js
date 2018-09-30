const router = require('koa-router')()
const sql = require('../sql/mysql.js')
const check = require('../middlewares/check')

router.get('/', async function (ctx, next) {
  let data = {
    user: {},
    title: '标题'
  }
  if(!check.checkLogin(ctx))ctx.redirect('/sign')
  await sql.findUser(ctx.session.username)
    .then(res => {
      data.user.username = res[0].username
    }).catch((err) => {
      ctx.body = err
  })
  await ctx.render('users', data)
})

module.exports = router;
