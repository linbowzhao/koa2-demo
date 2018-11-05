const router = require('koa-router')()
const sql = require('../sql/mysql.js')
const check = require('../middlewares/check')

router.get('/', async function (ctx, next) {
  if(check.checkLogin(ctx)){
    ctx.redirect('/users')
  }else{
    await ctx.render('login', {
      title: '登陆/注册'
    })
  }
})

// 登录 post
router.post('/login', async function(ctx, next) {
  let {username,password} = ctx.request.body
  await sql.checkPassword(username, password)
    .then(res => {
      if (res[0]['username'] === username) {
        ctx.session.username = username
        ctx.body = {
          code: 1,
          mes: '登陆成功'
        }
      }
    }).catch((res) => {
      ctx.body = {
        code: 0,
        mes: '该用户未注册'
      }
    })
})

// 登出get
router.get('/logout', async function(ctx, next) {
  if(check.checkLogin(ctx)){
    ctx.session = null
    ctx.body = {
      code: 3,
      mes: '登出成功'
    }
  }else{
    ctx.body = {
      code: 4,
      mes: '未登录'
    }
  }
})

// 测试
router.post('/test', async function(ctx, next) {
  if(!check.checkLogin(ctx))ctx.redirect('/sign')
  ctx.body = {
    code: 1,
    mes: '成功'
  }
})
module.exports = router;
